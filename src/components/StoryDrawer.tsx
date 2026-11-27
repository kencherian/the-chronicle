import { useEffect, useState } from 'react';
import { X, ArrowUpRight, Copy, Check } from 'lucide-react';
import type { ProjectStory, NewsBrief } from '../data/editorialData';
import type { StoryModalTab } from './FeaturedProjects';
import { EditorialImage } from './EditorialImage';

interface StoryDrawerProps {
  project: ProjectStory | null;
  initialTab: StoryModalTab;
  brief: NewsBrief | null;
  onClose: () => void;
}

export function StoryDrawer({ project, initialTab, brief, onClose }: StoryDrawerProps) {
  const [activeTab, setActiveTab] = useState<StoryModalTab>(initialTab);
  const [copiedCode, setCopiedCode] = useState(false);
  const [simulatedLoad, setSimulatedLoad] = useState<'nominal' | 'spike'>('nominal');

  useEffect(() => {
    setActiveTab(initialTab);
    setSimulatedLoad('nominal');
  }, [project, initialTab]);

  useEffect(() => {
    if (!project && !brief) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, brief, onClose]);

  if (!project && !brief) return null;

  const handleCopyExcerpt = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      window.setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      setCopiedCode(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#141413]/70 backdrop-blur-[1px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-headline"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex h-full w-full max-w-3xl flex-col overflow-y-auto border-l border-[#141413] dark:border-[#F7F5F0]/80 bg-[#F7F5F0] dark:bg-[#141413] text-[#141413] dark:text-[#F7F5F0]">
        {/* Sticky Drawer Mast Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b-[3px] border-double border-[#141413] dark:border-[#F7F5F0]/90 bg-[#F7F5F0] dark:bg-[#141413] px-6 py-4">
          <div className="min-w-0">
            <p className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
              {project ? project.kicker : `${brief?.kicker} · ${brief?.date}`}
            </p>
            <p className="truncate font-mono text-[10px] uppercase tracking-[0.12em] text-[#4A4945] dark:text-[#B5B2AA]">
              {project ? project.byline : brief?.publication}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dispatch reader"
            className="ink-action inline-flex min-h-[40px] shrink-0 cursor-pointer items-center gap-1.5 border border-[#141413] dark:border-[#F7F5F0]/80 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413]"
          >
            <span>Close</span>
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 px-6 py-6 sm:px-8 sm:py-8">
          {project ? (
            <>
              <h2
                id="drawer-headline"
                className="font-display text-2xl font-black leading-[1.1] tracking-tight sm:text-3xl text-balance"
              >
                {project.headline}
              </h2>
              <p className="mt-3 font-serif text-lg leading-relaxed text-[#4A4945] dark:text-[#B5B2AA]">
                {project.subhead}
              </p>

              {/* Drawer Mode Tabs */}
              <div
                role="tablist"
                aria-label="Project Story Views"
                className="mt-6 grid grid-cols-3 border border-[#141413] dark:border-[#F7F5F0]/80"
              >
                {(
                  [
                    { id: 'dispatch', label: 'Editorial Story' },
                    { id: 'source', label: 'Source Excerpt' },
                    { id: 'demo', label: 'Benchmarks & Spec' },
                  ] as const
                ).map((tab, idx) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={`min-h-[40px] cursor-pointer px-3 py-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] transition-colors whitespace-nowrap ${
                        idx > 0 ? 'border-l border-[#141413] dark:border-[#F7F5F0]/80' : ''
                      } ${
                        isActive
                          ? 'bg-[#141413] text-[#F7F5F0] dark:bg-[#F7F5F0] dark:text-[#141413]'
                          : 'bg-transparent text-[#4A4945] dark:text-[#B5B2AA] hover:bg-[#EFECE6] dark:hover:bg-[#1E1D1B] hover:text-[#141413] dark:hover:text-[#F7F5F0]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: Full Editorial Story */}
              {activeTab === 'dispatch' && (
                <div className="mt-6 space-y-5">
                  {project.image && (
                    <EditorialImage
                      src={project.image}
                      alt={project.imageAlt || project.headline}
                      caption={project.caption}
                      aspectClass="aspect-[16/9]"
                    />
                  )}

                  <div className="border border-[#141413]/30 dark:border-[#F7F5F0]/30 bg-[#EFECE6] dark:bg-[#1E1D1B] p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#8B1E1E] dark:text-[#E06666]">
                        PROBLEM STATEMENT
                      </p>
                      <p className="mt-1.5 font-serif text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em]">
                        SYSTEM RESOLUTION
                      </p>
                      <p className="mt-1.5 font-serif text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {project.fullDispatch.map((para, i) => (
                      <p
                        key={i}
                        className={`font-serif text-[17px] leading-[1.72] ${
                          i === 0 ? 'broadsheet-dropcap' : ''
                        }`}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Source Excerpt */}
              {activeTab === 'source' && (
                <div className="mt-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border border-b-0 border-[#141413] dark:border-[#F7F5F0]/80 bg-[#EFECE6] dark:bg-[#1E1D1B] px-4 py-2.5">
                    <span className="font-mono text-xs font-bold text-[#141413] dark:text-[#F7F5F0]">
                      {project.codeExcerptTitle}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyExcerpt(project.codeExcerpt)}
                      className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#8B1E1E] dark:text-[#E06666] hover:underline"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copied Snippet</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copy Excerpt</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="overflow-x-auto border border-[#141413] dark:border-[#F7F5F0]/80 bg-[#141413] p-4 font-mono text-xs leading-relaxed text-[#F7F5F0]">
                    <code>{project.codeExcerpt}</code>
                  </pre>

                  <div className="mt-4 flex items-center justify-between border border-[#141413]/30 dark:border-[#F7F5F0]/30 p-4">
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#4A4945] dark:text-[#B5B2AA]">
                        REPOSITORY ACCESS
                      </p>
                      <p className="mt-0.5 font-serif text-sm">
                        Full test suite, benchmarks, and crate documentation.
                      </p>
                    </div>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ink-action inline-flex min-h-[38px] items-center gap-1.5 border border-[#141413] dark:border-[#F7F5F0] px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] whitespace-nowrap"
                    >
                      <span>Open GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 3: Interactive Benchmarks & Live Spec */}
              {activeTab === 'demo' && (
                <div className="mt-6 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 border border-[#141413] dark:border-[#F7F5F0]/80 bg-[#EFECE6] dark:bg-[#1E1D1B] p-4">
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#8B1E1E] dark:text-[#E06666]">
                        INTERACTIVE WORKLOAD PROFILE
                      </p>
                      <p className="mt-1 font-serif text-sm">
                        {project.liveSimulationNote}
                      </p>
                    </div>
                    <div className="flex border border-[#141413] dark:border-[#F7F5F0]/80">
                      <button
                        type="button"
                        onClick={() => setSimulatedLoad('nominal')}
                        className={`cursor-pointer px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${
                          simulatedLoad === 'nominal'
                            ? 'bg-[#141413] text-[#F7F5F0] dark:bg-[#F7F5F0] dark:text-[#141413]'
                            : 'bg-transparent text-[#4A4945] dark:text-[#B5B2AA]'
                        }`}
                      >
                        Nominal Load
                      </button>
                      <button
                        type="button"
                        onClick={() => setSimulatedLoad('spike')}
                        className={`cursor-pointer border-l border-[#141413] dark:border-[#F7F5F0]/80 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${
                          simulatedLoad === 'spike'
                            ? 'bg-[#8B1E1E] text-[#F7F5F0] dark:bg-[#E06666] dark:text-[#141413]'
                            : 'bg-transparent text-[#4A4945] dark:text-[#B5B2AA]'
                        }`}
                      >
                        3× Burst Spike
                      </button>
                    </div>
                  </div>

                  {/* Tabular Metrics Table */}
                  <table className="w-full border-collapse border border-[#141413] dark:border-[#F7F5F0]/80 text-left">
                    <thead>
                      <tr className="border-b border-[#141413] dark:border-[#F7F5F0]/80 bg-[#EFECE6] dark:bg-[#1E1D1B] font-mono text-[10px] uppercase tracking-[0.14em]">
                        <th scope="col" className="p-3 font-bold">Metric</th>
                        <th scope="col" className="p-3 text-right font-bold">Measured</th>
                        <th scope="col" className="p-3 text-right font-bold">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#141413]/25 dark:divide-[#F7F5F0]/25">
                      {project.benchmarks.map((row) => (
                        <tr key={row.label}>
                          <td className="p-3 font-serif text-sm font-medium">{row.label}</td>
                          <td className="p-3 text-right font-mono text-sm font-bold tabular-nums text-[#8B1E1E] dark:text-[#E06666]">
                            {simulatedLoad === 'spike' && row.value.includes('ms')
                              ? '1.14 ms'
                              : row.value}
                          </td>
                          <td className="p-3 text-right font-mono text-[11px] text-[#4A4945] dark:text-[#B5B2AA]">
                            {simulatedLoad === 'spike' ? 'Under 3× burst envelope' : row.delta}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : brief ? (
            <>
              <h2
                id="drawer-headline"
                className="font-display text-2xl font-black leading-[1.12] tracking-tight sm:text-3xl text-balance"
              >
                {brief.headline}
              </h2>
              <p className="mt-2 font-serif text-base italic text-[#4A4945] dark:text-[#B5B2AA]">
                Published in {brief.publication} · {brief.date}
              </p>

              <div className="mt-6 space-y-4 border-t border-[#141413] dark:border-[#F7F5F0]/75 pt-6">
                {brief.fullText.map((para, idx) => (
                  <p
                    key={idx}
                    className={`font-serif text-[17px] leading-[1.72] ${
                      idx === 0 ? 'broadsheet-dropcap' : ''
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {brief.url && (
                <div className="mt-6 border-t border-[#141413]/25 dark:border-[#F7F5F0]/25 pt-4">
                  <a
                    href={brief.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-action inline-flex min-h-[40px] items-center gap-2 border border-[#141413] dark:border-[#F7F5F0] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413]"
                  >
                    <span>{brief.urlLabel || 'Open External Dispatch'}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
