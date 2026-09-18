import React, { useState } from 'react';
import { Copy, Check, Download, FileCode, Palette, Terminal, Search } from 'lucide-react';
import { CodeLanguage } from '../types';

interface CodeInspectorProps {
  html: string;
  css: string;
  js: string;
  onCopy: () => void;
  copied: boolean;
  onDownload: () => void;
}

export const CodeInspector: React.FC<CodeInspectorProps> = ({
  html,
  css,
  js,
  onCopy,
  copied,
  onDownload,
}) => {
  const [activeTab, setActiveTab] = useState<CodeLanguage>('full');
  const [searchTerm, setSearchTerm] = useState('');

  const getCodeContent = () => {
    switch (activeTab) {
      case 'css':
        return css || '/* Tailwind utility classes are embedded directly in the HTML elements */';
      case 'js':
        return js || '// Interactive scripts are embedded at the bottom of the HTML document';
      case 'html': {
        // Extract body only
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        return bodyMatch ? bodyMatch[1].trim() : html;
      }
      case 'full':
      default:
        return html;
    }
  };

  const code = getCodeContent();
  const lines = code.split('\n');
  const filteredLineCount = lines.length;

  return (
    <div className="h-full flex flex-col bg-neutral-950 border-neutral-800 font-mono text-xs overflow-hidden">
      {/* Code Inspector Header Tabs */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 select-none">
        <div className="flex items-center gap-2">
          <button
            id="codeTabFullBtn"
            onClick={() => setActiveTab('full')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'full'
                ? 'bg-neutral-800 text-indigo-400 border border-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>index.html (Full)</span>
          </button>
          <button
            id="codeTabHtmlBtn"
            onClick={() => setActiveTab('html')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'html'
                ? 'bg-neutral-800 text-indigo-400 border border-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <span>&lt;body&gt; Structure</span>
          </button>
          <button
            id="codeTabCssBtn"
            onClick={() => setActiveTab('css')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'css'
                ? 'bg-neutral-800 text-indigo-400 border border-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>CSS / Styles</span>
          </button>
          <button
            id="codeTabJsBtn"
            onClick={() => setActiveTab('js')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'js'
                ? 'bg-neutral-800 text-indigo-400 border border-neutral-700'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>JavaScript</span>
          </button>
        </div>

        {/* Quick Search & Actions */}
        <div className="flex items-center gap-2">
          <div className="relative hidden md:flex items-center">
            <Search className="w-3 h-3 text-neutral-500 absolute left-2.5" />
            <input
              type="text"
              placeholder="Find in code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-7 pr-2 py-1 bg-neutral-950 border border-neutral-800 rounded-lg text-[11px] text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-indigo-500 w-32"
            />
          </div>

          <button
            onClick={onCopy}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs transition-colors"
            title="Copy current code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            onClick={onDownload}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-sans font-semibold transition-colors"
            title="Download index.html"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Code Viewer with Line Numbers */}
      <div className="flex-1 overflow-auto p-4 flex">
        {/* Line Numbers */}
        <div className="select-none text-right pr-4 text-neutral-600 font-mono text-[11px] leading-5 shrink-0">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code text */}
        <pre className="flex-1 text-neutral-200 font-mono text-[11px] leading-5 whitespace-pre overflow-x-auto selection:bg-indigo-600 selection:text-white">
          <code>
            {lines.map((line, idx) => {
              const isMatch = searchTerm && line.toLowerCase().includes(searchTerm.toLowerCase());
              return (
                <div
                  key={idx}
                  className={isMatch ? 'bg-indigo-950/80 text-indigo-200 font-semibold' : ''}
                >
                  {line}
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Footer info bar */}
      <div className="px-4 py-1.5 bg-neutral-900 border-t border-neutral-800 text-[11px] text-neutral-500 flex items-center justify-between font-sans">
        <div>
          Lines: <span className="text-neutral-300 font-mono">{filteredLineCount}</span> · UTF-8 · Standalone HTML5
        </div>
        <div className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Tailwind CDN + Vanilla JS Included
        </div>
      </div>
    </div>
  );
};
