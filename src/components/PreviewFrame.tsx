import React, { useRef, useState } from 'react';
import { RotateCw, Maximize2, Minimize2, Laptop, Smartphone, Tablet } from 'lucide-react';
import { ViewportMode } from '../types';

interface PreviewFrameProps {
  html: string;
  viewport: ViewportMode;
  isGenerating: boolean;
  stepMessage?: string;
}

export const PreviewFrame: React.FC<PreviewFrameProps> = ({
  html,
  viewport,
  isGenerating,
  stepMessage = "Generating website...",
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeKey, setIframeKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  const getViewportDimensions = () => {
    switch (viewport) {
      case 'mobile':
        return { width: '375px', label: 'iPhone 15 (375 × 667)', icon: Smartphone };
      case 'tablet':
        return { width: '768px', label: 'iPad Pro (768 × 1024)', icon: Tablet };
      case 'desktop':
      default:
        return { width: '100%', label: 'Desktop 100% Fluid', icon: Laptop };
    }
  };

  const vp = getViewportDimensions();
  const IconComponent = vp.icon;

  return (
    <div
      className={`relative flex flex-col items-center justify-start h-full w-full bg-neutral-950/60 p-2 sm:p-4 overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 p-0 bg-black' : ''
      }`}
    >
      {/* Device Toolbar Header */}
      <div className="w-full max-w-6xl flex items-center justify-between px-3 py-2 bg-neutral-900/90 border border-neutral-800 rounded-t-xl text-xs text-neutral-400 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
          </div>
          <div className="h-3 w-[1px] bg-neutral-800 mx-1"></div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-300">
            <IconComponent className="w-3.5 h-3.5 text-indigo-400" />
            <span>{vp.label}</span>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          <button
            id="reloadPreviewBtn"
            onClick={handleReload}
            className="p-1 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            title="Reload Preview"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
          <button
            id="toggleFullscreenBtn"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div
        className="relative flex-1 w-full flex justify-center items-start overflow-auto pb-4 transition-all duration-300"
        style={{ height: 'calc(100% - 40px)' }}
      >
        <div
          className={`relative h-full transition-all duration-300 shadow-2xl overflow-hidden bg-white ${
            viewport === 'desktop'
              ? 'w-full rounded-b-xl border-x border-b border-neutral-800'
              : 'rounded-b-2xl border-x-4 border-b-4 border-neutral-800 my-auto'
          }`}
          style={{
            width: vp.width,
            maxWidth: '100%',
            height: viewport === 'desktop' ? '100%' : '94%',
          }}
        >
          {/* Live iframe */}
          <iframe
            key={iframeKey}
            ref={iframeRef}
            srcDoc={html}
            title="Website Live Preview"
            sandbox="allow-scripts allow-forms allow-same-origin allow-modals"
            className="w-full h-full border-none bg-white block"
          />

          {/* Loading Animation Overlay */}
          {isGenerating && (
            <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-20 text-center animate-fade-in">
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin"></div>
                <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Synthesizing Website Architecture</h3>
              <p className="text-xs text-neutral-400 max-w-sm">{stepMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
