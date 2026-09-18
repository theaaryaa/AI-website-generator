import React from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Eye, 
  Code2, 
  Columns, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  History
} from 'lucide-react';
import { ViewportMode, ViewTab } from '../types';

interface HeaderProps {
  viewport: ViewportMode;
  setViewport: (v: ViewportMode) => void;
  viewTab: ViewTab;
  setViewTab: (t: ViewTab) => void;
  onOpenNewTab: () => void;
  onDownloadHtml: () => void;
  onCopyCode: () => void;
  copied: boolean;
  onToggleHistory: () => void;
  versionCount: number;
  currentVersion: number;
}

export const Header: React.FC<HeaderProps> = ({
  viewport,
  setViewport,
  viewTab,
  setViewTab,
  onOpenNewTab,
  onDownloadHtml,
  onCopyCode,
  copied,
  onToggleHistory,
  versionCount,
  currentVersion,
}) => {
  return (
    <header className="h-16 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur-md px-4 flex items-center justify-between z-30 shrink-0 select-none">
      {/* Brand & AI badge */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold tracking-tight text-white">SiteCraft AI</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Gemini 3.8 Flash
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 hidden sm:block">AI Website Builder & Live Preview</p>
          </div>
        </div>
      </div>

      {/* Center Controls: Viewport and View Mode */}
      <div className="flex items-center gap-2">
        {/* View Mode Buttons (Preview / Split / Code) */}
        <div className="flex items-center p-1 bg-neutral-950 rounded-xl border border-neutral-800">
          <button
            id="viewTabPreviewBtn"
            onClick={() => setViewTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewTab === 'preview'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
            title="Full Preview"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Preview</span>
          </button>
          <button
            id="viewTabSplitBtn"
            onClick={() => setViewTab('split')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewTab === 'split'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
            title="Split View (Preview & Code)"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Split</span>
          </button>
          <button
            id="viewTabCodeBtn"
            onClick={() => setViewTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewTab === 'code'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
            title="Code Inspector"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Code</span>
          </button>
        </div>

        {/* Viewport switch (only visible if preview is visible) */}
        {viewTab !== 'code' && (
          <div className="hidden sm:flex items-center p-1 bg-neutral-950 rounded-xl border border-neutral-800">
            <button
              id="viewportDesktopBtn"
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewport === 'desktop'
                  ? 'bg-neutral-800 text-indigo-400'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Desktop View (100%)"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              id="viewportTabletBtn"
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewport === 'tablet'
                  ? 'bg-neutral-800 text-indigo-400'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              id="viewportMobileBtn"
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                viewport === 'mobile'
                  ? 'bg-neutral-800 text-indigo-400'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Mobile View (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Right actions: Export, New Window, Copy, History */}
      <div className="flex items-center gap-2">
        <button
          id="toggleHistoryBtn"
          onClick={onToggleHistory}
          className="relative px-2.5 py-1.5 rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-300 hover:bg-neutral-800 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
          title="Version History"
        >
          <History className="w-3.5 h-3.5 text-neutral-400" />
          <span className="hidden lg:inline">v{currentVersion}</span>
          {versionCount > 1 && (
            <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 text-[10px] font-bold flex items-center justify-center">
              {versionCount}
            </span>
          )}
        </button>

        <button
          id="copyCodeBtn"
          onClick={onCopyCode}
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-300 hover:bg-neutral-800 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
          title="Copy HTML Source"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </button>

        <button
          id="openNewTabBtn"
          onClick={onOpenNewTab}
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-300 hover:bg-neutral-800 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
          title="Open in New Window"
        >
          <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          <span className="hidden sm:inline">New Tab</span>
        </button>

        <button
          id="downloadHtmlBtn"
          onClick={onDownloadHtml}
          className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all flex items-center gap-1.5"
          title="Download Complete Website (.html)"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>
    </header>
  );
};
