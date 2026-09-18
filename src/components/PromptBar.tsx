import React, { useState } from 'react';
import { Sparkles, Wand2, ArrowUp, RefreshCw, Palette, MessageSquarePlus } from 'lucide-react';
import { PROMPT_TEMPLATES, STYLE_OPTIONS } from '../data/templates';

interface PromptBarProps {
  onGenerate: (prompt: string, style: string, mode?: 'new' | 'refine') => void;
  isGenerating: boolean;
  currentPrompt: string;
  suggestedPrompts?: string[];
}

export const PromptBar: React.FC<PromptBarProps> = ({
  onGenerate,
  isGenerating,
  currentPrompt,
  suggestedPrompts = [],
}) => {
  const [prompt, setPrompt] = useState('Create a portfolio website');
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [refineMode, setRefineMode] = useState(false);
  const [showStyleMenu, setShowStyleMenu] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;
    onGenerate(prompt.trim(), selectedStyle, refineMode ? 'refine' : 'new');
  };

  const handleSelectTemplate = (templatePrompt: string, style?: string) => {
    setPrompt(templatePrompt);
    if (style) setSelectedStyle(style);
    onGenerate(templatePrompt, style || selectedStyle, 'new');
  };

  const handleSuggestionClick = (suggested: string) => {
    setPrompt(suggested);
    setRefineMode(true);
    onGenerate(suggested, selectedStyle, 'refine');
  };

  return (
    <div className="border-b border-neutral-800 bg-neutral-900/70 p-3 sm:p-4 space-y-3 shrink-0">
      {/* Primary Generator Input Box */}
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="relative flex-1 flex items-center rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all shadow-inner">
          <div className="pl-4 pr-2 text-indigo-400">
            {refineMode ? (
              <MessageSquarePlus className="w-4 h-4 text-emerald-400" />
            ) : (
              <Wand2 className="w-4 h-4 text-indigo-400" />
            )}
          </div>

          <input
            id="promptInput"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isGenerating}
            placeholder={
              refineMode
                ? "Refine website: e.g. 'Add a skills progress section with animated bars'..."
                : "Type your website idea (e.g. 'Create a portfolio website')..."
            }
            className="w-full bg-transparent py-3.5 pr-3 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none disabled:opacity-60"
          />

          {/* Style Selector Popover button */}
          <div className="relative mr-2">
            <button
              id="styleSelectorBtn"
              type="button"
              onClick={() => setShowStyleMenu(!showStyleMenu)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-medium text-neutral-300 border border-neutral-800 transition-colors"
              title="Select visual style"
            >
              <Palette className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden md:inline capitalize">{selectedStyle}</span>
            </button>

            {showStyleMenu && (
              <div className="absolute right-0 top-full mt-2 w-64 p-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl z-50 space-y-1">
                <div className="px-2 py-1 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  Visual Aesthetics
                </div>
                {STYLE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedStyle(opt.id);
                      setShowStyleMenu(false);
                    }}
                    className={`w-full text-left p-2 rounded-xl transition-all flex flex-col ${
                      selectedStyle === opt.id
                        ? 'bg-indigo-600/15 border border-indigo-500/30 text-indigo-300'
                        : 'hover:bg-neutral-800 text-neutral-300'
                    }`}
                  >
                    <div className="text-xs font-semibold">{opt.label}</div>
                    <div className="text-[11px] text-neutral-400">{opt.desc}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mode switch (New vs Refine) */}
          <button
            id="refineToggleBtn"
            type="button"
            onClick={() => setRefineMode(!refineMode)}
            className={`mr-2 px-2.5 py-1.5 rounded-xl text-xs font-medium border transition-colors hidden sm:flex items-center gap-1 ${
              refineMode
                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
            title={refineMode ? 'Mode: Refine existing website' : 'Mode: Generate brand new website'}
          >
            {refineMode ? 'Refining' : 'New Build'}
          </button>

          {/* Generate Button */}
          <button
            id="generateSubmitBtn"
            type="submit"
            disabled={!prompt.trim() || isGenerating}
            className="m-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 shrink-0"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Building...</span>
              </>
            ) : (
              <>
                <span>{refineMode ? 'Refine' : 'Generate'}</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Quick Prompts & Suggestions row */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-neutral-500 text-[11px] font-medium flex items-center gap-1 shrink-0">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          Quick Ideas:
        </span>

        {/* Primary prompt as requested by user prompt */}
        <button
          id="quickPromptPortfolio"
          type="button"
          onClick={() => handleSelectTemplate('Create a portfolio website', 'modern')}
          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
            currentPrompt === 'Create a portfolio website'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-neutral-950 border border-neutral-800 text-neutral-300 hover:border-indigo-500/50 hover:text-white'
          }`}
        >
          “Create a portfolio website”
        </button>

        {PROMPT_TEMPLATES.slice(1, 4).map((tpl) => (
          <button
            key={tpl.id}
            type="button"
            onClick={() => handleSelectTemplate(tpl.prompt, tpl.style)}
            className="hidden md:inline-block px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200 text-xs transition-colors truncate max-w-xs"
          >
            {tpl.label}
          </button>
        ))}

        {/* Suggested Next Refinements */}
        {suggestedPrompts.length > 0 && (
          <div className="hidden lg:flex items-center gap-1.5 ml-auto text-[11px] text-neutral-400">
            <span className="text-emerald-400 font-semibold">Try next:</span>
            {suggestedPrompts.slice(0, 2).map((sugg, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSuggestionClick(sugg)}
                className="px-2 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 hover:bg-emerald-900/60 transition-colors truncate max-w-[200px]"
                title={sugg}
              >
                + {sugg}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
