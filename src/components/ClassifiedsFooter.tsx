import { useState } from 'react';
import { Copy, Check, Download, Printer, ArrowUpRight, Send } from 'lucide-react';
import {
  CLASSIFIEDS_CONFIG,
  MASTHEAD_CONFIG,
  TECHNICAL_INDEX,
  FEATURED_PROJECTS,
} from '../data/editorialData';

export function ClassifiedsFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryNote, setInquiryNote] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CLASSIFIEDS_CONFIG.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleDownloadResume = () => {
    const lines = [
      'KEN CHERIAN — CURRICULUM VITAE',
      `${MASTHEAD_CONFIG.roleTitle} | B.Tech in Computer Engineering (2023–2028), SVPCET Nagpur`,
      `${CLASSIFIEDS_CONFIG.locationNote} | ${CLASSIFIEDS_CONFIG.email}`,
      '========================================================================',
      '',
      'EDUCATION & EXPERIENCE',
      '- 2023–2028 | B.Tech in Computer Engineering, St. Vincent Pallotti College of Engineering & Technology (SVPCET), Nagpur',
      '  Honors focus in Distributed Systems & Cyber Defense.',
      '- JUN 2026  | Cybersecurity Intern, Secuerium Technologies (Nagpur, India)',
      '  Vulnerability assessment, security controls, and threat monitoring.',
      '',
      'LEADERSHIP & COMMUNITY',
      '- 2026–Present | Technical Team Member, ACM Student Chapter (SVPCET, Nagpur)',
      '  Orchestrating technical workshops and competitive coding events.',
      '- 2026–Present | Coordinator, Aster Club — Zenith Forum (SVPCET, Nagpur)',
      '  Leading speech sessions, debates, and professional development cohorts.',
      '',
      'CERTIFICATIONS',
      '- Qualys VMDR Certified Specialist (2026) — Vulnerability Management, Detection & Response',
      '- Palo Alto Networks Cybersecurity Certificate (2026)',
      '- Google Cybersecurity Professional Certificate (2025) — Network Defense, SIEM, Incident Response & Python',
      '',
      'TECHNICAL TOOLING & STACK',
      ...TECHNICAL_INDEX.map(
        (t) => `- [${t.symbol}] ${t.name} (${t.category} · ${t.tier})`
      ),
      '',
      'ALL 10 PRODUCTION ENGINEERING PROJECTS',
      ...FEATURED_PROJECTS.map(
        (p, idx) =>
          `${idx + 1}. ${p.headline} [${p.domain}]\n   Stack: ${p.techStack.join(', ')}\n   Summary: ${p.subhead}\n   Source: ${p.sourceUrl}`
      ),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ken-Cherian-Curriculum-Vitae.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail.trim() || !inquiryNote.trim()) return;
    setInquirySent(true);
    setSenderEmail('');
    setInquiryNote('');
    window.setTimeout(() => {
      setInquirySent(false);
      setShowInquiryForm(false);
    }, 2800);
  };

  return (
    <footer
      id="classifieds"
      aria-labelledby="classifieds-heading"
      className="mt-12 border-t-[3px] border-double border-[#141413] dark:border-[#F7F5F0]/90 pt-6 pb-10"
    >
      {/* Classifieds Mast Banner */}
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B1E1E] dark:text-[#E06666]">
            SECTION B · THE CLASSIFIEDS
          </p>
          <h2
            id="classifieds-heading"
            className="mt-1 font-display text-2xl font-bold tracking-tight text-[#141413] dark:text-[#F7F5F0]"
          >
            Correspondence, Wires & Colophon
          </h2>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#4A4945] dark:text-[#B5B2AA]">
          {CLASSIFIEDS_CONFIG.locationNote}
        </p>
      </div>

      {/* Multi-Box 1px Bordered Classifieds Grid */}
      <div className="grid grid-cols-1 border-t border-l border-[#141413] dark:border-[#F7F5F0]/75 md:grid-cols-2 xl:grid-cols-4">
        {/* Ad Box 1: Direct Email Inquiry */}
        <div className="flex flex-col justify-between border-r border-b border-[#141413] dark:border-[#F7F5F0]/75 bg-[#EFECE6] dark:bg-[#1E1D1B] p-5">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
              BOX 01 · DIRECT INQUIRY
            </p>
            <h3 className="mt-1.5 font-display text-lg font-bold text-[#141413] dark:text-[#F7F5F0]">
              Editorial & Architecture Desk
            </h3>
            <p className="mt-1.5 font-serif text-sm leading-relaxed text-[#4A4945] dark:text-[#B5B2AA]">
              {CLASSIFIEDS_CONFIG.responseSla}
            </p>
            <p className="mt-3 font-mono text-xs font-semibold break-all text-[#141413] dark:text-[#F7F5F0]">
              {CLASSIFIEDS_CONFIG.email}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="ink-action inline-flex min-h-[38px] flex-1 cursor-pointer items-center justify-center gap-1.5 border border-[#141413] dark:border-[#F7F5F0]/80 bg-[#F7F5F0] dark:bg-[#141413] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] whitespace-nowrap"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowInquiryForm((prev) => !prev)}
                className="ink-action inline-flex min-h-[38px] cursor-pointer items-center justify-center gap-1.5 border border-[#141413] dark:border-[#F7F5F0]/80 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#8B1E1E] hover:border-[#8B1E1E] hover:text-[#F7F5F0] dark:hover:bg-[#E06666] dark:hover:border-[#E06666] dark:hover:text-[#141413] whitespace-nowrap"
              >
                <Send className="h-3 w-3" aria-hidden="true" />
                <span>{showInquiryForm ? 'Close' : 'Send Note'}</span>
              </button>
            </div>

            {showInquiryForm && (
              <form
                onSubmit={handleSendInquiry}
                className="mt-2 border-t border-[#141413]/25 dark:border-[#F7F5F0]/25 pt-3 space-y-2"
              >
                {inquirySent ? (
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#8B1E1E] dark:text-[#E06666]">
                    DISPATCH QUEUED · THANK YOU
                  </p>
                ) : (
                  <>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="your@email.com"
                      aria-label="Your email address"
                      className="w-full border border-[#141413] dark:border-[#F7F5F0]/75 bg-[#F7F5F0] dark:bg-[#141413] px-2.5 py-1.5 font-mono text-xs text-[#141413] dark:text-[#F7F5F0] placeholder:text-[#4A4945]/70 dark:placeholder:text-[#B5B2AA]/70 focus:outline-2 focus:outline-[#8B1E1E]"
                    />
                    <textarea
                      required
                      rows={2}
                      value={inquiryNote}
                      onChange={(e) => setInquiryNote(e.target.value)}
                      placeholder="Project brief or advisory scope..."
                      aria-label="Inquiry message"
                      className="w-full border border-[#141413] dark:border-[#F7F5F0]/75 bg-[#F7F5F0] dark:bg-[#141413] px-2.5 py-1.5 font-serif text-sm text-[#141413] dark:text-[#F7F5F0] placeholder:text-[#4A4945]/70 dark:placeholder:text-[#B5B2AA]/70 focus:outline-2 focus:outline-[#8B1E1E]"
                    />
                    <button
                      type="submit"
                      className="ink-action w-full min-h-[36px] cursor-pointer border border-[#141413] dark:border-[#F7F5F0] bg-[#141413] dark:bg-[#F7F5F0] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#F7F5F0] dark:text-[#141413] hover:bg-[#8B1E1E] hover:border-[#8B1E1E] dark:hover:bg-[#E06666] dark:hover:border-[#E06666]"
                    >
                      Transmit Inquiry
                    </button>
                  </>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Ad Box 2: Social Wires */}
        <div className="flex flex-col justify-between border-r border-b border-[#141413] dark:border-[#F7F5F0]/75 p-5">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
              BOX 02 · SOCIAL WIRES
            </p>
            <h3 className="mt-1.5 font-display text-lg font-bold text-[#141413] dark:text-[#F7F5F0]">
              Public Repositories & Press
            </h3>
            <ul className="mt-3 divide-y divide-[#141413]/20 dark:divide-[#F7F5F0]/20 border-t border-[#141413]/20 dark:border-[#F7F5F0]/20">
              {CLASSIFIEDS_CONFIG.wires.map((wire) => (
                <li key={wire.label}>
                  <a
                    href={wire.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 py-2.5 text-sm transition-colors hover:text-[#8B1E1E] dark:hover:text-[#E06666]"
                  >
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]">
                      {wire.label}
                    </span>
                    <span className="inline-flex items-center gap-1 font-serif text-sm italic text-[#4A4945] dark:text-[#B5B2AA] group-hover:text-[#8B1E1E] dark:group-hover:text-[#E06666]">
                      <span>{wire.handle}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ad Box 3: Curriculum Vitae & Print Edition */}
        <div className="flex flex-col justify-between border-r border-b border-[#141413] dark:border-[#F7F5F0]/75 bg-[#EFECE6] dark:bg-[#1E1D1B] p-5">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
              BOX 03 · DOSSIER ARCHIVE
            </p>
            <h3 className="mt-1.5 font-display text-lg font-bold text-[#141413] dark:text-[#F7F5F0]">
              Curriculum Vitae & Print
            </h3>
            <p className="mt-1.5 font-serif text-sm leading-relaxed text-[#4A4945] dark:text-[#B5B2AA]">
              Download an unformatted plain-text dossier for offline review or print this broadsheet edition directly to paper or PDF.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleDownloadResume}
              className="ink-action inline-flex min-h-[40px] w-full cursor-pointer items-center justify-between border border-[#141413] dark:border-[#F7F5F0] bg-[#141413] dark:bg-[#F7F5F0] px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#F7F5F0] dark:text-[#141413] hover:bg-[#8B1E1E] hover:border-[#8B1E1E] dark:hover:bg-[#E06666] dark:hover:border-[#E06666] dark:hover:text-[#141413] whitespace-nowrap"
            >
              <span>Download Résumé (.TXT)</span>
              <Download className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print ink-action inline-flex min-h-[38px] w-full cursor-pointer items-center justify-between border border-[#141413] dark:border-[#F7F5F0]/80 bg-[#F7F5F0] dark:bg-[#141413] px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#141413] dark:text-[#F7F5F0] hover:bg-[#141413] hover:text-[#F7F5F0] dark:hover:bg-[#F7F5F0] dark:hover:text-[#141413] whitespace-nowrap"
            >
              <span>Print Broadsheet Edition</span>
              <Printer className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Ad Box 4: Colophon */}
        <div className="flex flex-col justify-between border-r border-b border-[#141413] dark:border-[#F7F5F0]/75 p-5">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B1E1E] dark:text-[#E06666]">
              BOX 04 · COLOPHON
            </p>
            <h3 className="mt-1.5 font-display text-lg font-bold text-[#141413] dark:text-[#F7F5F0]">
              Typesetting & Edition Specs
            </h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-[#4A4945] dark:text-[#B5B2AA]">
              {CLASSIFIEDS_CONFIG.colophon}
            </p>
          </div>

          <div className="mt-4 border-t border-[#141413]/25 dark:border-[#F7F5F0]/25 pt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-[#4A4945] dark:text-[#B5B2AA]">
            <span>© 2026 KEN CHERIAN</span>
            <span>0PX RADIUS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
