import { useState } from 'react';

interface ArchitecturalPlateProps {
  caption: string;
}

type NodeKey = 'ingress' | 'core' | 'durability' | 'response';

const NODE_DETAILS: Record<NodeKey, { title: string; metric: string; note: string }> = {
  ingress: {
    title: '01. Telemetry Ingestion Engine',
    metric: '18,400 events/sec',
    note: 'Normalizes endpoint and perimeter security logs with GeoIP, asset tags, and contextual enrichments.',
  },
  core: {
    title: '02. MITRE ATT&CK Correlator',
    metric: '0.62 ms rule eval',
    note: 'Evaluates real-time threat correlation rules mapped directly to MITRE ATT&CK tactics and techniques.',
  },
  durability: {
    title: '03. Immutable Audit & Alert Store',
    metric: 'Zero-Drop Queue',
    note: 'Indexes structured security events and prioritized incident trails for deterministic forensic replay.',
  },
  response: {
    title: '04. SOAR Webhook Orchestrator',
    metric: '< 140 ms dispatch',
    note: 'Triggers automated containment playbooks and outbound incident webhooks for rapid triage.',
  },
};

export function ArchitecturalPlate({ caption }: ArchitecturalPlateProps) {
  const [selectedNode, setSelectedNode] = useState<NodeKey>('core');

  return (
    <figure className="editorial-plate group">
      <div className="border border-[#141413] dark:border-[#F7F5F0]/75 bg-[#EFECE6] dark:bg-[#1E1D1B] p-4 sm:p-6">
        {/* Plate Header Bar */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#141413]/25 dark:border-[#F7F5F0]/25 pb-2">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#4A4945] dark:text-[#B5B2AA]">
            TECHNICAL SCHEMATIC · AEGIS SIEM-SOAR ORCHESTRATION PIPELINE
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8B1E1E] dark:text-[#E06666]">
            SELECT NODE TO INSPECT
          </span>
        </div>

        {/* High-Contrast Architectural SVG Diagram (Monochrome -> Crimson Accent on Hover/Active) */}
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 820 260"
            role="img"
            aria-label="Aegis SIEM-SOAR threat monitoring and alert orchestration pipeline diagram"
            className="h-auto w-full min-w-[560px] select-none"
          >
            <defs>
              <pattern
                id="broadsheet-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  className="stroke-[#141413]/8 dark:stroke-[#F7F5F0]/8"
                  strokeWidth="1"
                />
              </pattern>
              <marker
                id="arrow-ink"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-[#141413] dark:fill-[#F7F5F0]" />
              </marker>
              <marker
                id="arrow-crimson"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" className="fill-[#8B1E1E] dark:fill-[#E06666]" />
              </marker>
            </defs>

            <rect width="820" height="260" fill="url(#broadsheet-grid)" />

            {/* Connecting Flow Lines */}
            <line
              x1="194"
              y1="120"
              x2="255"
              y2="120"
              strokeWidth="1.5"
              markerEnd="url(#arrow-ink)"
              className="stroke-[#141413] dark:stroke-[#F7F5F0]"
            />
            <line
              x1="444"
              y1="100"
              x2="505"
              y2="68"
              strokeWidth="1.5"
              markerEnd="url(#arrow-crimson)"
              className="stroke-[#141413] group-hover:stroke-[#8B1E1E] dark:stroke-[#F7F5F0] dark:group-hover:stroke-[#E06666] transition-colors duration-300"
            />
            <line
              x1="444"
              y1="140"
              x2="505"
              y2="178"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrow-ink)"
              className="stroke-[#141413] dark:stroke-[#F7F5F0]"
            />

            {/* Node 1: Telemetry Ingestion Engine */}
            <g
              onClick={() => setSelectedNode('ingress')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedNode('ingress');
                }
              }}
            >
              <rect
                x="20"
                y="62"
                width="174"
                height="116"
                strokeWidth={selectedNode === 'ingress' ? 2 : 1}
                className={`transition-colors duration-200 ${
                  selectedNode === 'ingress'
                    ? 'fill-[#F7F5F0] stroke-[#8B1E1E] dark:fill-[#141413] dark:stroke-[#E06666]'
                    : 'fill-[#F7F5F0] stroke-[#141413] dark:fill-[#141413] dark:stroke-[#F7F5F0]/80'
                }`}
              />
              <text
                x="34"
                y="84"
                className="fill-[#8B1E1E] dark:fill-[#E06666] font-mono text-[9px] font-bold tracking-[0.14em]"
              >
                01 · INGRESS
              </text>
              <text
                x="34"
                y="110"
                className="fill-[#141413] dark:fill-[#F7F5F0] font-serif text-[13.5px] font-semibold"
              >
                Telemetry Ingestion
              </text>
              <text
                x="34"
                y="130"
                className="fill-[#4A4945] dark:fill-[#B5B2AA] font-mono text-[10px]"
              >
                Endpoint &amp; Perimeter Logs
              </text>
              <text
                x="34"
                y="158"
                className="fill-[#141413] dark:fill-[#F7F5F0] font-mono text-[10px] font-medium"
              >
                Contextual Enrichment
              </text>
            </g>

            {/* Node 2: MITRE ATT&CK Correlator */}
            <g
              onClick={() => setSelectedNode('core')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedNode('core');
                }
              }}
            >
              <rect
                x="258"
                y="52"
                width="186"
                height="136"
                strokeWidth={selectedNode === 'core' ? 2 : 1}
                className={`transition-colors duration-200 ${
                  selectedNode === 'core'
                    ? 'fill-[#F7F5F0] stroke-[#8B1E1E] dark:fill-[#141413] dark:stroke-[#E06666]'
                    : 'fill-[#F7F5F0] stroke-[#141413] dark:fill-[#141413] dark:stroke-[#F7F5F0]/80'
                }`}
              />
              <text
                x="272"
                y="76"
                className="fill-[#8B1E1E] dark:fill-[#E06666] font-mono text-[9px] font-bold tracking-[0.14em]"
              >
                02 · CORE ENGINE
              </text>
              <text
                x="272"
                y="104"
                className="fill-[#141413] dark:fill-[#F7F5F0] font-serif text-[13.5px] font-semibold"
              >
                MITRE ATT&amp;CK Correlator
              </text>
              <text
                x="272"
                y="124"
                className="fill-[#4A4945] dark:fill-[#B5B2AA] font-mono text-[10px]"
              >
                Rule-Based Threat Scoring
              </text>
              <line
                x1="272"
                y1="142"
                x2="430"
                y2="142"
                className="stroke-[#141413]/25 dark:stroke-[#F7F5F0]/25"
              />
              <text
                x="272"
                y="164"
                className="fill-[#141413] dark:fill-[#F7F5F0] font-mono text-[10px] font-medium"
              >
                REAL-TIME STREAM
              </text>
            </g>

            {/* Node 3: Immutable Audit & Alert Store */}
            <g
              onClick={() => setSelectedNode('durability')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedNode('durability');
                }
              }}
            >
              <rect
                x="508"
                y="24"
                width="292"
                height="92"
                strokeWidth={selectedNode === 'durability' ? 2 : 1}
                className={`transition-colors duration-200 ${
                  selectedNode === 'durability'
                    ? 'fill-[#F7F5F0] stroke-[#8B1E1E] dark:fill-[#141413] dark:stroke-[#E06666]'
                    : 'fill-[#F7F5F0] stroke-[#141413] dark:fill-[#141413] dark:stroke-[#F7F5F0]/80'
                }`}
              />
              <text
                x="524"
                y="46"
                className="fill-[#8B1E1E] dark:fill-[#E06666] font-mono text-[9px] font-bold tracking-[0.14em]"
              >
                03 · DURABILITY
              </text>
              <text
                x="524"
                y="70"
                className="fill-[#141413] dark:fill-[#F7F5F0] font-serif text-[14px] font-semibold"
              >
                Immutable Audit &amp; Alert Store
              </text>
              <text
                x="524"
                y="94"
                className="fill-[#4A4945] dark:fill-[#B5B2AA] font-mono text-[10px]"
              >
                Structured Event Indexing · Zero-Drop Queue
              </text>
            </g>

            {/* Node 4: SOAR Webhook Orchestrator */}
            <g
              onClick={() => setSelectedNode('response')}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedNode('response');
                }
              }}
            >
              <rect
                x="508"
                y="138"
                width="292"
                height="96"
                strokeWidth={selectedNode === 'response' ? 2 : 1}
                className={`transition-colors duration-200 ${
                  selectedNode === 'response'
                    ? 'fill-[#F7F5F0] stroke-[#8B1E1E] dark:fill-[#141413] dark:stroke-[#E06666]'
                    : 'fill-[#F7F5F0] stroke-[#141413] dark:fill-[#141413] dark:stroke-[#F7F5F0]/80'
                }`}
              />
              <text
                x="524"
                y="160"
                className="fill-[#8B1E1E] dark:fill-[#E06666] font-mono text-[9px] font-bold tracking-[0.14em]"
              >
                04 · RESPONSE
              </text>
              <text
                x="524"
                y="184"
                className="fill-[#141413] dark:fill-[#F7F5F0] font-serif text-[14px] font-semibold"
              >
                SOAR Webhook Orchestrator
              </text>
              <text
                x="524"
                y="208"
                className="fill-[#4A4945] dark:fill-[#B5B2AA] font-mono text-[10px]"
              >
                Automated Playbooks · Rapid Containment
              </text>
            </g>
          </svg>
        </div>

        {/* Interactive Selected Node Callout Strip */}
        <div className="mt-4 flex flex-col justify-between gap-2 border-t border-[#141413]/25 dark:border-[#F7F5F0]/25 pt-3 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#141413] dark:text-[#F7F5F0]">
              {NODE_DETAILS[selectedNode].title}
            </span>
            <p className="mt-0.5 font-serif text-sm text-[#4A4945] dark:text-[#B5B2AA]">
              {NODE_DETAILS[selectedNode].note}
            </p>
          </div>
          <span className="shrink-0 border border-[#141413] dark:border-[#F7F5F0]/75 bg-[#F7F5F0] dark:bg-[#141413] px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] tabular-nums text-[#8B1E1E] dark:text-[#E06666]">
            {NODE_DETAILS[selectedNode].metric}
          </span>
        </div>
      </div>

      <figcaption className="mt-2 font-serif text-xs italic leading-snug text-[#4A4945] dark:text-[#B5B2AA]">
        {caption}
      </figcaption>
    </figure>
  );
}
