import { useState } from 'react';
import {
  TECHNICAL_INDEX,
  APPOINTMENTS,
  NEWS_IN_BRIEF,
  type NewsBrief,
} from '../data/editorialData';

interface RightRailProps {
  onOpenBrief: (brief: NewsBrief) => void;
}

type IndexCategory = 'All' | 'Systems' | 'Interface' | 'Data';

export function RightRail({ onOpenBrief }: RightRailProps) {
  const [categoryFilter, setCategoryFilter] = useState<IndexCategory>('All');

  const filteredIndex =
    categoryFilter === 'All'
      ? TECHNICAL_INDEX
      : TECHNICAL_INDEX.filter((item) => item.category === categoryFilter);

  return (
    <aside
      aria-label="Sidebar Briefs and Technical Index"
      className="flex flex-col gap-8 border-t border-[#141413] dark:border-[#F7F5F0]/75 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6"
    >
      {/* 1. Dense Stock-Table Style Technical Index */}
      <section id="technical-index" aria-labelledby="technical-index-heading">
        <div className="border-b-[3px] border-double border-[#141413] dark:border-[#F7F5F0]/90 pb-2">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
            MARKET COMPOSITE
          </p>
          <h2
            id="technical-index-heading"
            className="mt-1 font-display text-2xl font-bold tracking-tight text-[#141413] dark:text-[#F7F5F0]"
          >
            Technical Index
          </h2>
        </div>

        {/* Category Segmented Filter Bar (0px radius, hairline borders) */}
        <div
          role="tablist"
          aria-label="Filter Technical Index by Discipline"
          className="mt-3 grid grid-cols-4 border border-[#141413] dark:border-[#F7F5F0]/75"
        >
          {(['All', 'Systems', 'Interface', 'Data'] as const).map((cat, idx) => {
            const active = categoryFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategoryFilter(cat)}
                className={`min-h-[36px] cursor-pointer px-2 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] transition-colors whitespace-nowrap ${
                  idx > 0 ? 'border-l border-[#141413] dark:border-[#F7F5F0]/75' : ''
                } ${
                  active
                    ? 'bg-[#141413] text-[#F7F5F0] dark:bg-[#F7F5F0] dark:text-[#141413] font-bold'
                    : 'bg-transparent text-[#4A4945] dark:text-[#B5B2AA] hover:bg-[#EFECE6] dark:hover:bg-[#1E1D1B] hover:text-[#141413] dark:hover:text-[#F7F5F0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Stock Index Table */}
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#141413] dark:border-[#F7F5F0]/75 font-mono text-[10px] uppercase tracking-[0.14em] text-[#4A4945] dark:text-[#B5B2AA]">
                <th scope="col" className="py-2 pr-2 font-medium">SYM</th>
                <th scope="col" className="py-2 pr-2 font-medium">STACK</th>
                <th scope="col" className="py-2 pr-2 text-right font-medium">TENURE</th>
                <th scope="col" className="py-2 text-right font-medium">TIER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#141413]/20 dark:divide-[#F7F5F0]/20">
              {filteredIndex.map((entry) => (
                <tr
                  key={entry.symbol}
                  className="hover:bg-[#EFECE6] dark:hover:bg-[#1E1D1B] transition-colors"
                >
                  <td className="py-2 pr-2 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#8B1E1E] dark:text-[#E06666]">
                    {entry.symbol}
                  </td>
                  <td className="py-2 pr-2 font-serif text-sm text-[#141413] dark:text-[#F7F5F0]">
                    {entry.name}
                  </td>
                  <td className="py-2 pr-2 text-right font-mono text-[11px] tabular-nums text-[#4A4945] dark:text-[#B5B2AA] whitespace-nowrap">
                    {entry.experience}
                  </td>
                  <td className="py-2 text-right font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0]">
                    {entry.tier}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Chronological Appointments & Credentials Timeline */}
      <section aria-labelledby="appointments-heading" className="border-t border-[#141413] dark:border-[#F7F5F0]/75 pt-6">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
          CURRICULUM RECORD
        </p>
        <h2
          id="appointments-heading"
          className="mt-1 font-display text-2xl font-bold tracking-tight text-[#141413] dark:text-[#F7F5F0]"
        >
          Appointments & Credentials
        </h2>

        <ol className="mt-4 divide-y divide-[#141413]/25 dark:divide-[#F7F5F0]/25 border-t border-[#141413]/25 dark:border-[#F7F5F0]/25">
          {APPOINTMENTS.map((item) => (
            <li key={`${item.period}-${item.institution}`} className="py-4 first:pt-3 last:pb-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] tabular-nums text-[#8B1E1E] dark:text-[#E06666]">
                  {item.period}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#4A4945] dark:text-[#B5B2AA]">
                  {item.location}
                </span>
              </div>
              <h3 className="mt-1 font-display text-lg font-bold leading-snug text-[#141413] dark:text-[#F7F5F0]">
                {item.role}
              </h3>
              <p className="font-serif text-sm italic text-[#4A4945] dark:text-[#B5B2AA]">
                {item.institution}
              </p>
              <p className="mt-1.5 font-serif text-[14.5px] leading-relaxed text-[#141413] dark:text-[#F7F5F0]">
                {item.summary}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 3. News in Brief: Publications, Keynotes & Lab Notes */}
      <section
        aria-labelledby="news-brief-heading"
        className="border border-[#141413] dark:border-[#F7F5F0]/75 bg-[#EFECE6] dark:bg-[#1E1D1B] p-4"
      >
        <div className="border-b border-[#141413] dark:border-[#F7F5F0]/75 pb-2">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
            WIRE DISPATCHES
          </p>
          <h2
            id="news-brief-heading"
            className="mt-0.5 font-display text-xl font-bold tracking-tight text-[#141413] dark:text-[#F7F5F0]"
          >
            News in Brief
          </h2>
        </div>

        <div className="mt-3 divide-y divide-[#141413]/25 dark:divide-[#F7F5F0]/25">
          {NEWS_IN_BRIEF.map((brief) => (
            <article key={brief.id} className="py-3.5 first:pt-1 last:pb-1">
              <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.14em]">
                <span className="font-bold text-[#8B1E1E] dark:text-[#E06666]">{brief.kicker}</span>
                <span className="tabular-nums text-[#4A4945] dark:text-[#B5B2AA]">{brief.date}</span>
              </div>
              <h3 className="mt-1 font-display text-base font-bold leading-snug text-[#141413] dark:text-[#F7F5F0]">
                {brief.headline}
              </h3>
              <p className="mt-1 font-serif text-sm leading-relaxed text-[#4A4945] dark:text-[#B5B2AA]">
                {brief.excerpt}
              </p>
              <button
                type="button"
                onClick={() => onOpenBrief(brief)}
                className="mt-2 inline-flex min-h-[32px] cursor-pointer items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#141413] dark:text-[#F7F5F0] hover:text-[#8B1E1E] dark:hover:text-[#E06666] underline-offset-4 hover:underline transition-colors"
              >
                <span>Read Dispatch Note</span>
                <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}
