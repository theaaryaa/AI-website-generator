import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PromptBar } from './components/PromptBar';
import { PreviewFrame } from './components/PreviewFrame';
import { CodeInspector } from './components/CodeInspector';
import { VersionHistory } from './components/VersionHistory';
import { INITIAL_PORTFOLIO_HTML } from './data/defaultSite';
import { ViewportMode, ViewTab, WebsiteVersion } from './types';
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

const INITIAL_VERSION: WebsiteVersion = {
  id: 'v-1',
  version: 1,
  prompt: 'Create a portfolio website',
  title: 'Elena Rostova — Principal Product Designer & Technologist',
  html: INITIAL_PORTFOLIO_HTML,
  css: '/* Custom glassmorphism, floating animation & responsive layout */',
  js: '// Interactive theme toggle, mobile drawer, project filtering, contact form handling',
  timestamp: Date.now(),
  style: 'modern',
  suggestedPrompts: [
    'Add an interactive testimonials client slider',
    'Change color scheme to emerald and dark slate',
    'Add a tech stack badge matrix with icons',
    'Add an interactive project lightbox modal',
  ],
};

export default function App() {
  const [versions, setVersions] = useState<WebsiteVersion[]>([INITIAL_VERSION]);
  const [currentVersionId, setCurrentVersionId] = useState<string>(INITIAL_VERSION.id);
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [viewTab, setViewTab] = useState<ViewTab>('preview');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationStep, setGenerationStep] = useState<string>('Ready');
  const [copied, setCopied] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  const currentVersion = versions.find((v) => v.id === currentVersionId) || versions[0];

  // Auto-dismiss toasts
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(null), 4000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ text, type });
  };

  const handleGenerate = async (promptText: string, styleChoice: string, mode: 'new' | 'refine' = 'new') => {
    setIsGenerating(true);
    setGenerationStep('Analyzing website design requirements...');

    // Progress step animations
    const step1 = setTimeout(() => {
      setGenerationStep('Architecting layout, semantic HTML5 & Tailwind styles...');
    }, 1200);

    const step2 = setTimeout(() => {
      setGenerationStep('Synthesizing high-res imagery, typography & visual hierarchy...');
    }, 2800);

    const step3 = setTimeout(() => {
      setGenerationStep('Embedding vanilla JS interactions, theme toggle & animations...');
    }, 4500);

    try {
      const response = await fetch('/api/generate-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          style: styleChoice,
          existingHtml: mode === 'refine' ? currentVersion.html : '',
          mode,
        }),
      });

      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Server returned an error.');
      }

      const data = await response.json();
      const newVersionNum = versions.length + 1;
      const newVersionId = `v-${newVersionNum}-${Date.now()}`;

      const newVersion: WebsiteVersion = {
        id: newVersionId,
        version: newVersionNum,
        prompt: promptText,
        title: data.title || 'Generated Website',
        html: data.html,
        css: data.css || '',
        js: data.js || '',
        timestamp: Date.now(),
        style: styleChoice,
        suggestedPrompts: data.suggestedPrompts || [
          'Add animated stats counter',
          'Add customer review testimonials',
          'Change color palette',
          'Add FAQ accordion',
        ],
      };

      setVersions((prev) => [newVersion, ...prev]);
      setCurrentVersionId(newVersionId);
      if (data.notice) {
        showToast(data.notice, data.isFallback ? 'info' : 'success');
      } else {
        showToast(`Website generated successfully for "${promptText}"!`, 'success');
      }
    } catch (err: any) {
      console.error('Generation failure:', err);
      let userFriendlyError = 'Could not generate website. Please try again.';
      const raw = String(err?.message || err || '');
      if (raw.includes('503') || raw.includes('UNAVAILABLE') || raw.includes('high demand')) {
        userFriendlyError = 'The AI model is currently experiencing high demand (503). Please retry in a few moments.';
      } else {
        try {
          const parsed = JSON.parse(raw.replace(/^ApiError:\s*/, ''));
          if (parsed?.error?.message) {
            userFriendlyError = parsed.error.message;
          }
        } catch {
          if (raw && !raw.startsWith('{')) {
            userFriendlyError = raw;
          }
        }
      }
      showToast(userFriendlyError, 'error');
    } finally {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      setIsGenerating(false);
      setGenerationStep('Ready');
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentVersion.html);
      setCopied(true);
      showToast('HTML code copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      showToast('Failed to copy code.', 'error');
    }
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([currentVersion.html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeName = currentVersion.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    link.href = url;
    link.download = `${safeName || 'website'}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${link.download} successfully!`, 'success');
  };

  const handleOpenNewTab = () => {
    const blob = new Blob([currentVersion.html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-neutral-950 text-neutral-100 font-sans">
      {/* Top App Bar with View Controls and Export */}
      <Header
        viewport={viewport}
        setViewport={setViewport}
        viewTab={viewTab}
        setViewTab={setViewTab}
        onOpenNewTab={handleOpenNewTab}
        onDownloadHtml={handleDownloadHtml}
        onCopyCode={handleCopyCode}
        copied={copied}
        onToggleHistory={() => setShowHistory(!showHistory)}
        versionCount={versions.length}
        currentVersion={currentVersion.version}
      />

      {/* Interactive Prompt & AI Refinement Bar */}
      <PromptBar
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
        currentPrompt={currentVersion.prompt}
        suggestedPrompts={currentVersion.suggestedPrompts}
      />

      {/* Main Workspace Stage */}
      <main className="relative flex-1 w-full overflow-hidden flex">
        {/* VIEW MODE: PREVIEW */}
        {viewTab === 'preview' && (
          <div className="w-full h-full">
            <PreviewFrame
              html={currentVersion.html}
              viewport={viewport}
              isGenerating={isGenerating}
              stepMessage={generationStep}
            />
          </div>
        )}

        {/* VIEW MODE: CODE */}
        {viewTab === 'code' && (
          <div className="w-full h-full">
            <CodeInspector
              html={currentVersion.html}
              css={currentVersion.css}
              js={currentVersion.js}
              onCopy={handleCopyCode}
              copied={copied}
              onDownload={handleDownloadHtml}
            />
          </div>
        )}

        {/* VIEW MODE: SPLIT (Side by side Preview & Code) */}
        {viewTab === 'split' && (
          <div className="w-full h-full flex flex-col lg:flex-row overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
              <PreviewFrame
                html={currentVersion.html}
                viewport="desktop"
                isGenerating={isGenerating}
                stepMessage={generationStep}
              />
            </div>
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
              <CodeInspector
                html={currentVersion.html}
                css={currentVersion.css}
                js={currentVersion.js}
                onCopy={handleCopyCode}
                copied={copied}
                onDownload={handleDownloadHtml}
              />
            </div>
          </div>
        )}

        {/* Revisions History Drawer */}
        <VersionHistory
          isOpen={showHistory}
          onClose={() => setShowHistory(false)}
          versions={versions}
          currentVersionId={currentVersion.id}
          onSelectVersion={(selected) => {
            setCurrentVersionId(selected.id);
            setShowHistory(false);
            showToast(`Restored version v${selected.version}: "${selected.prompt}"`, 'info');
          }}
        />

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs font-medium text-white shadow-2xl animate-fade-in">
            {toastMessage.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            {toastMessage.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-400" />}
            {toastMessage.type === 'info' && <Sparkles className="w-4 h-4 text-indigo-400" />}
            <span>{toastMessage.text}</span>
          </div>
        )}
      </main>
    </div>
  );
}
