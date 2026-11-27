import { Sun, Moon } from 'lucide-react';
import { MASTHEAD_CONFIG } from '../data/editorialData';

interface MastheadProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Masthead({ isDark, onToggleTheme }: MastheadProps) {
  return (
    <header className="w-full pt-6 pb-2">
      {/* Top Utility Row: Left Ear Box — Centerpiece Nameplate — Right Ear Box */}
      <div className="grid grid-cols-1 items-stretch gap-4 border-b border-[#141413] dark:border-[#F7F5F0]/80 pb-5 lg:grid-cols-12 lg:gap-6">
        {/* Left Ear Box: Availability Status */}
        <div className="order-2 flex flex-col justify-between border border-[#141413] dark:border-[#F7F5F0]/75 bg-[#EFECE6] dark:bg-[#1E1D1B] p-3 lg:order-1 lg:col-span-3">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
              {MASTHEAD_CONFIG.availabilityTitle}
            </p>
            <p className="mt-1 font-serif text-sm leading-snug text-[#141413] dark:text-[#F7F5F0]">
              {MASTHEAD_CONFIG.availabilitySubtitle}
            </p>
          </div>
          <a
            href="#classifieds"
            className="mt-3 inline-flex items-center justify-between border-t border-[#141413]/25 dark:border-[#F7F5F0]/25 pt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#141413] dark:text-[#F7F5F0] hover:text-[#8B1E1E] dark:hover:text-[#E06666] transition-colors whitespace-nowrap"
          >
            <span>Commission Inquiry</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Centerpiece Nameplate */}
        <div className="order-1 flex flex-col items-center justify-center text-center lg:order-2 lg:col-span-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#4A4945] dark:text-[#B5B2AA]">
            {MASTHEAD_CONFIG.subBanner}
          </p>
          <h1 className="mt-2 font-display text-4xl font-black tracking-tight text-[#141413] dark:text-[#F7F5F0] sm:text-5xl xl:text-[3.5rem] leading-[1.02] text-balance">
            {MASTHEAD_CONFIG.publicationName}
          </h1>
          <p className="mt-2 font-serif text-sm italic text-[#4A4945] dark:text-[#B5B2AA]">
            “Clarity, durability, and verifiable systems craft.”
          </p>
        </div>

        {/* Right Ear Box: Interactive Edition Mode Toggle */}
        <div className="order-3 flex flex-col justify-between border border-[#141413] dark:border-[#F7F5F0]/75 bg-[#EFECE6] dark:bg-[#1E1D1B] p-3 lg:col-span-3">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#141413] dark:text-[#F7F5F0]">
              {MASTHEAD_CONFIG.editionLabel}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] tabular-nums text-[#4A4945] dark:text-[#B5B2AA]">
              {isDark ? 'DARK INK' : 'NEWSPRINT'}
            </span>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to Morning Newsprint light mode' : 'Switch to Evening Edition dark mode'}
            className="ink-action mt-3 flex min-h-[40px] w-full cursor-pointer items-center justify-between gap-2 border border-[#141413] dark:border-[#F7F5F0]/80 bg-[#F7F5F0] dark:bg-[#141413] px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] whitespace-nowrap"
          >
            <span className="flex items-center gap-2">
              {isDark ? (
                <Sun className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              ) : (
                <Moon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              )}
              <span>{isDark ? 'Morning Newsprint' : 'Evening Edition'}</span>
            </span>
            <span className="text-[10px] opacity-75" aria-hidden="true">
              {isDark ? 'LIGHT' : 'DARK'}
            </span>
          </button>
        </div>
      </div>

      {/* Dateline Strip + Section Navigation Anchored by 3px Double Bottom Border */}
      <div className="flex flex-col justify-between gap-3 border-b-[3px] border-double border-[#141413] dark:border-[#F7F5F0]/90 py-2.5 md:flex-row md:items-center">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] tabular-nums text-[#141413] dark:text-[#F7F5F0]">
          <span className="font-bold">{MASTHEAD_CONFIG.volume}</span>
          <span aria-hidden="true" className="text-[#4A4945] dark:text-[#B5B2AA]">·</span>
          <span>{MASTHEAD_CONFIG.issueNumber}</span>
          <span aria-hidden="true" className="text-[#4A4945] dark:text-[#B5B2AA]">·</span>
          <span>{MASTHEAD_CONFIG.location}</span>
          <span aria-hidden="true" className="text-[#4A4945] dark:text-[#B5B2AA]">·</span>
          <span className="text-[#4A4945] dark:text-[#B5B2AA]">{MASTHEAD_CONFIG.datePublished}</span>
        </div>

        <nav
          aria-label="Broadsheet Sections"
          className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em]"
        >
          <a
            href="#lead-story"
            className="text-[#141413] dark:text-[#F7F5F0] hover:text-[#8B1E1E] dark:hover:text-[#E06666] underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Lead Story
          </a>
          <a
            href="#featured-projects"
            className="text-[#141413] dark:text-[#F7F5F0] hover:text-[#8B1E1E] dark:hover:text-[#E06666] underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Dispatches
          </a>
          <a
            href="#technical-index"
            className="text-[#141413] dark:text-[#F7F5F0] hover:text-[#8B1E1E] dark:hover:text-[#E06666] underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Technical Index
          </a>
          <a
            href="#classifieds"
            className="text-[#141413] dark:text-[#F7F5F0] hover:text-[#8B1E1E] dark:hover:text-[#E06666] underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Classifieds
          </a>
        </nav>
      </div>
    </header>
  );
}
