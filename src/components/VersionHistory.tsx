import React from 'react';
import { History, X, Clock, ArrowRight, RotateCcw } from 'lucide-react';
import { WebsiteVersion } from '../types';

interface VersionHistoryProps {
  isOpen: boolean;
  onClose: () => void;
  versions: WebsiteVersion[];
  currentVersionId: string;
  onSelectVersion: (version: WebsiteVersion) => void;
}

export const VersionHistory: React.FC<VersionHistoryProps> = ({
  isOpen,
  onClose,
  versions,
  currentVersionId,
  onSelectVersion,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-80 sm:w-96 bg-neutral-900 border-l border-neutral-800 shadow-2xl z-40 flex flex-col animate-slide-in">
      {/* Header */}
      <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-white">Revision Timeline</h2>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-neutral-800 text-neutral-400">
            {versions.length} builds
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* List of versions */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {versions.map((v) => {
          const isCurrent = v.id === currentVersionId;
          const dateStr = new Date(v.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <div
              key={v.id}
              onClick={() => onSelectVersion(v)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-indigo-600/10 border-indigo-500/50 shadow-md'
                  : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">v{v.version}</span>
                  {isCurrent && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-500 text-white">
                      Current
                    </span>
                  )}
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 px-1.5 py-0.5 rounded bg-neutral-800">
                    {v.style}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-neutral-500">
                  <Clock className="w-3 h-3" />
                  <span>{dateStr}</span>
                </div>
              </div>

              <div className="text-xs font-medium text-neutral-300 line-clamp-2 mb-2">
                “{v.prompt}”
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-neutral-800/80">
                <span className="truncate max-w-[180px]">{v.title}</span>
                <span className="text-indigo-400 font-semibold flex items-center gap-1">
                  Restore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
