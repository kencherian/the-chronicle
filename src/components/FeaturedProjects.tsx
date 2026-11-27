import { useRef, useState } from 'react';
import {
  FEATURED_PROJECTS,
  type ProjectStory,
  type ProjectDomain,
} from '../data/editorialData';
import { ArchitecturalPlate } from './ArchitecturalPlate';
import { EditorialImage } from './EditorialImage';

export type StoryModalTab = 'dispatch' | 'source' | 'demo';

type FilterOption = 'All' | ProjectDomain;

const ITEMS_PER_PAGE = 4;

const FILTER_OPTIONS: { id: FilterOption; label: string }[] = [
  { id: 'All', label: 'ALL (10)' },
  { id: 'Cybersecurity', label: 'CYBERSECURITY' },
  { id: 'Full-Stack', label: 'FULL-STACK' },
  { id: 'Machine-Learning', label: 'MACHINE-LEARNING' },
  { id: 'Data-Visualization', label: 'DATA-VISUALIZATION' },
];

interface FeaturedProjectsProps {
  onOpenProject: (project: ProjectStory, initialTab?: StoryModalTab) => void;
}

export function FeaturedProjects({ onOpenProject }: FeaturedProjectsProps) {
  const [activeDomain, setActiveDomain] = useState<FilterOption>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const archiveTopRef = useRef<HTMLDivElement>(null);

  const primaryProject = FEATURED_PROJECTS.find((p) => p.tier === 'primary');
  const allSecondary = FEATURED_PROJECTS.filter((p) => p.tier === 'secondary');
  const filteredProjects =
    activeDomain === 'All'
      ? allSecondary
      : allSecondary.filter((p) => p.domain === activeDomain);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const rangeStart = filteredProjects.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = startIndex + paginatedProjects.length;
  const rangeLabel =
    rangeStart === rangeEnd ? `${rangeStart}` : `${rangeStart}–${rangeEnd}`;

  const handleDomainChange = (domain: FilterOption) => {
    setActiveDomain(domain);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === safePage) return;
    setCurrentPage(page);
    archiveTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const formatPageNum = (page: number) => String(page).padStart(2, '0');

  return (
    <section id="featured-projects" aria-labelledby="projects-section-heading" className="pt-8">
      <div className="mb-5 flex items-baseline justify-between border-b border-[#141413] dark:border-[#F7F5F0]/75 pb-2">
        <h2
          id="projects-section-heading"
          className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#141413] dark:text-[#F7F5F0]"
        >
          SECTION A · FEATURED ENGINEERING DISPATCHES
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] tabular-nums text-[#4A4945] dark:text-[#B5B2AA]">
          {FEATURED_PROJECTS.length} PRODUCTION REPORTS
        </span>
      </div>

      {/* Primary 8-Column Feature Story (Anchored) */}
      {primaryProject && (
        <article className="border-b border-[#141413] dark:border-[#F7F5F0]/75 pb-8">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
            {primaryProject.kicker}
          </p>

          <h3 className="mt-2 font-display text-2xl font-bold leading-[1.12] tracking-tight text-[#141413] dark:text-[#F7F5F0] sm:text-3xl lg:text-[2.15rem] text-balance">
            {primaryProject.headline}
          </h3>

          <p className="mt-2.5 font-serif text-lg leading-relaxed text-[#4A4945] dark:text-[#B5B2AA]">
            {primaryProject.subhead}
          </p>

          {/* Tech Stack Byline */}
          <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#4A4945] dark:text-[#B5B2AA]">
            <span className="font-semibold text-[#141413] dark:text-[#F7F5F0]">
              STACK:
            </span>
            {primaryProject.techStack.map((tech, idx) => (
              <span key={tech} className="inline-flex items-center gap-2.5">
                <span>{tech}</span>
                {idx < primaryProject.techStack.length - 1 && (
                  <span aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Interactive Architectural Plate */}
          <div className="mt-5">
            <ArchitecturalPlate caption={primaryProject.caption} />
          </div>

          {/* Problem / Solution Two-Column Narrative */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border-b border-[#141413]/25 dark:border-[#F7F5F0]/25 pb-4 md:border-b-0 md:border-r md:pr-6 md:pb-0">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B1E1E] dark:text-[#E06666]">
                The Bottleneck
              </h4>
              <p className="mt-2 font-serif text-[16px] leading-[1.68] text-[#141413] dark:text-[#F7F5F0]">
                {primaryProject.problem}
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#141413] dark:text-[#F7F5F0]">
                Architectural Resolution
              </h4>
              <p className="mt-2 font-serif text-[16px] leading-[1.68] text-[#141413] dark:text-[#F7F5F0]">
                {primaryProject.solution}
              </p>
            </div>
          </div>

          {/* Ink-Fill Hover Action Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenProject(primaryProject, 'dispatch')}
              className="ink-action min-h-[40px] cursor-pointer border border-[#141413] dark:border-[#F7F5F0] bg-[#141413] dark:bg-[#F7F5F0] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#F7F5F0] dark:text-[#141413] hover:bg-[#8B1E1E] hover:border-[#8B1E1E] dark:hover:bg-[#E06666] dark:hover:border-[#E06666] dark:hover:text-[#141413] whitespace-nowrap"
            >
              [ READ FULL STORY → ]
            </button>
            <button
              type="button"
              onClick={() => onOpenProject(primaryProject, 'source')}
              className="ink-action min-h-[40px] cursor-pointer border border-[#141413] dark:border-[#F7F5F0]/80 bg-transparent px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] whitespace-nowrap"
            >
              [ READ SOURCE CODE → ]
            </button>
            <button
              type="button"
              onClick={() => onOpenProject(primaryProject, 'demo')}
              className="ink-action min-h-[40px] cursor-pointer border border-[#141413] dark:border-[#F7F5F0]/80 bg-transparent px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] whitespace-nowrap"
            >
              [ LIVE DEMO → ]
            </button>
          </div>
        </article>
      )}

      {/* Compact Broadsheet Category Filter Bar */}
      <div
        ref={archiveTopRef}
        className="mt-8 scroll-mt-6 border-b border-[#141413] dark:border-[#F7F5F0]/75 pb-4"
      >
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#4A4945] dark:text-[#B5B2AA]">
            ARCHIVE DESK · FILTER SECONDARY DISPATCHES
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] tabular-nums text-[#8B1E1E] dark:text-[#E06666]">
            SHOWING {rangeLabel} OF {filteredProjects.length} REPORTS · PAGE {safePage} OF {totalPages}
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Filter projects by engineering domain"
          className="mt-3 flex flex-wrap border border-[#141413] dark:border-[#F7F5F0]/75"
        >
          {FILTER_OPTIONS.map((option, idx) => {
            const active = activeDomain === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleDomainChange(option.id)}
                className={`min-h-[38px] flex-1 cursor-pointer px-3 py-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] transition-colors whitespace-nowrap ${
                  idx > 0 ? 'border-t sm:border-t-0 sm:border-l border-[#141413] dark:border-[#F7F5F0]/75' : ''
                } ${
                  active
                    ? 'bg-[#141413] text-[#F7F5F0] dark:bg-[#F7F5F0] dark:text-[#141413]'
                    : 'bg-transparent text-[#4A4945] dark:text-[#B5B2AA] hover:bg-[#EFECE6] dark:hover:bg-[#1E1D1B] hover:text-[#141413] dark:hover:text-[#F7F5F0]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2×2 Secondary Project Dispatches Grid */}
      <div className="mt-8 grid grid-cols-1 gap-y-8 md:grid-cols-2">
        {paginatedProjects.map((project, index) => {
          const isLeftColumn = index % 2 === 0;
          const hasRightSibling = isLeftColumn && index + 1 < paginatedProjects.length;
          const isLastMobile = index === paginatedProjects.length - 1;
          const mdLastRowStart =
            paginatedProjects.length % 2 === 0
              ? paginatedProjects.length - 2
              : paginatedProjects.length - 1;
          const isLastRowMd = index >= mdLastRowStart;

          return (
            <article
              key={project.id}
              className={`flex flex-col justify-between ${
                hasRightSibling
                  ? 'md:border-r md:border-[#141413]/75 md:dark:border-[#F7F5F0]/60 md:pr-6'
                  : isLeftColumn
                    ? 'md:pr-6'
                    : 'md:pl-6'
              } ${
                !isLastMobile
                  ? 'border-b border-[#141413]/40 dark:border-[#F7F5F0]/35 pb-8'
                  : 'border-b-0 pb-0'
              } ${
                !isLastRowMd
                  ? 'md:border-b md:border-[#141413]/40 md:dark:border-[#F7F5F0]/35 md:pb-8'
                  : 'md:border-b-0 md:pb-0'
              }`}
            >
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
                  {project.kicker}
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold leading-[1.16] tracking-tight text-[#141413] dark:text-[#F7F5F0] text-balance">
                  {project.headline}
                </h3>

                {project.image ? (
                  <div className="mt-4">
                    <EditorialImage
                      src={project.image}
                      alt={project.imageAlt || project.headline}
                      caption={project.caption}
                      aspectClass="aspect-[4/3]"
                    />
                  </div>
                ) : (
                  <p className="mt-2.5 font-serif text-[15.5px] italic leading-relaxed text-[#4A4945] dark:text-[#B5B2AA]">
                    {project.subhead}
                  </p>
                )}

                <p className="mt-4 font-serif text-[16px] leading-[1.65] text-[#141413] dark:text-[#F7F5F0]">
                  {project.problem}
                </p>
                <p className="mt-3 font-serif text-[15px] leading-[1.65] text-[#4A4945] dark:text-[#B5B2AA]">
                  {project.solution}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#141413]/25 dark:border-[#F7F5F0]/25">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#4A4945] dark:text-[#B5B2AA]">
                  {project.techStack.join(' · ')}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenProject(project, 'dispatch')}
                    className="ink-action min-h-[40px] cursor-pointer border border-[#141413] dark:border-[#F7F5F0]/80 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] whitespace-nowrap"
                  >
                    [ READ FULL STORY → ]
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenProject(project, 'source')}
                    className="ink-action min-h-[40px] cursor-pointer border border-[#141413]/40 dark:border-[#F7F5F0]/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:border-[#8B1E1E] hover:bg-[#8B1E1E] hover:text-[#F7F5F0] dark:hover:border-[#E06666] dark:hover:bg-[#E06666] dark:hover:text-[#141413] whitespace-nowrap"
                  >
                    [ SOURCE → ]
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenProject(project, 'demo')}
                    className="ink-action min-h-[40px] cursor-pointer border border-[#141413]/40 dark:border-[#F7F5F0]/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:border-[#141413] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:border-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] whitespace-nowrap"
                  >
                    [ SPEC → ]
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Broadsheet Edition Pagination Bar */}
      <nav
        aria-label="Secondary Dispatches Pagination"
        className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#141413] dark:border-[#F7F5F0]/75 pt-4 sm:flex-row sm:items-center"
      >
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] tabular-nums text-[#4A4945] dark:text-[#B5B2AA]">
          EDITION PAGE {formatPageNum(safePage)} / {formatPageNum(totalPages)}
        </span>

        {totalPages > 1 ? (
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={safePage === 1}
              onClick={() => handlePageChange(safePage - 1)}
              className="ink-action min-h-[38px] cursor-pointer border border-[#141413] dark:border-[#F7F5F0]/80 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#141413] dark:disabled:hover:bg-transparent dark:disabled:hover:text-[#F7F5F0] whitespace-nowrap"
            >
              [ ← PREV PAGE ]
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => {
                const isActive = page === safePage;
                return (
                  <button
                    key={page}
                    type="button"
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`Page ${page}`}
                    onClick={() => handlePageChange(page)}
                    className={`ink-action min-h-[38px] cursor-pointer border border-[#141413] dark:border-[#F7F5F0]/80 px-2.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] tabular-nums whitespace-nowrap ${
                      isActive
                        ? 'bg-[#141413] text-[#F7F5F0] dark:bg-[#F7F5F0] dark:text-[#141413]'
                        : 'bg-transparent text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413]'
                    }`}
                  >
                    [ {formatPageNum(page)} ]
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={safePage === totalPages}
              onClick={() => handlePageChange(safePage + 1)}
              className="ink-action min-h-[38px] cursor-pointer border border-[#141413] dark:border-[#F7F5F0]/80 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#141413] dark:disabled:hover:bg-transparent dark:disabled:hover:text-[#F7F5F0] whitespace-nowrap"
            >
              [ NEXT PAGE → ]
            </button>
          </div>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#4A4945] dark:text-[#B5B2AA]">
            COMPLETE ARCHIVE · ALL MATCHING REPORTS DISPLAYED
          </span>
        )}
      </nav>
    </section>
  );
}
