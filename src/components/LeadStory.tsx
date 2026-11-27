import { LEAD_STORY } from '../data/editorialData';
import { EditorialImage } from './EditorialImage';

export function LeadStory() {
  return (
    <section
      id="lead-story"
      aria-labelledby="lead-story-heading"
      className="border-b border-[#141413] dark:border-[#F7F5F0]/75 pb-8"
    >
      {/* Kicker */}
      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E1E] dark:text-[#E06666]">
        {LEAD_STORY.kicker}
      </p>

      {/* Main Broadsheet Headline */}
      <h2
        id="lead-story-heading"
        className="mt-2 font-display text-3xl font-black leading-[1.08] tracking-tight text-[#141413] dark:text-[#F7F5F0] sm:text-4xl lg:text-[2.75rem] text-balance"
      >
        {LEAD_STORY.headline}
      </h2>

      {/* Editorial Deck */}
      <p className="mt-3 font-serif text-lg leading-relaxed text-[#4A4945] dark:text-[#B5B2AA] sm:text-xl">
        {LEAD_STORY.deck}
      </p>

      {/* Byline Strip */}
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-[#141413]/25 dark:border-[#F7F5F0]/25 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#4A4945] dark:text-[#B5B2AA]">
        <span className="font-semibold text-[#141413] dark:text-[#F7F5F0]">{LEAD_STORY.byline}</span>
        <span aria-hidden="true">·</span>
        <span>{LEAD_STORY.readTime}</span>
      </div>

      {/* Two-Column Bio Narrative with 3-Line CSS Drop Cap & Framed Portrait Plate */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Left Bio Column (with 3-Line Drop Cap) */}
        <div className="md:col-span-6 md:border-r md:border-[#141413]/30 md:dark:border-[#F7F5F0]/30 md:pr-6">
          <p className="broadsheet-dropcap font-serif text-[17px] leading-[1.68] text-[#141413] dark:text-[#F7F5F0]">
            {LEAD_STORY.paragraphs[0]}
          </p>
          <p className="mt-4 font-serif text-[17px] leading-[1.68] text-[#141413] dark:text-[#F7F5F0]">
            {LEAD_STORY.paragraphs[1]}
          </p>
        </div>

        {/* Right Bio Column: Portrait Plate + Concluding Paragraph + Pull Quote */}
        <div className="flex flex-col justify-between gap-5 md:col-span-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-start">
            <div className="sm:col-span-5">
              <EditorialImage
                src={LEAD_STORY.portraitImage}
                alt={LEAD_STORY.portraitAlt}
                caption={LEAD_STORY.portraitCaption}
                aspectClass="aspect-[3/4]"
              />
            </div>
            <div className="sm:col-span-7 space-y-4">
              <p className="font-serif text-[17px] leading-[1.68] text-[#141413] dark:text-[#F7F5F0]">
                {LEAD_STORY.paragraphs[2]}
              </p>
            </div>
          </div>

          {LEAD_STORY.paragraphs[3] && (
            <p className="font-serif text-[17px] leading-[1.68] text-[#141413] dark:text-[#F7F5F0]">
              {LEAD_STORY.paragraphs[3]}
            </p>
          )}

          {/* Inset Editorial Pull Quote */}
          <blockquote className="border-y border-[#141413] dark:border-[#F7F5F0]/75 bg-[#EFECE6] dark:bg-[#1E1D1B] px-4 py-3.5">
            <p className="font-display text-base italic leading-snug text-[#141413] dark:text-[#F7F5F0]">
              {LEAD_STORY.pullQuote}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
