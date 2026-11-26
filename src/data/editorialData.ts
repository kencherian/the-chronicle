/**
 * ============================================================================
 * BROADSHEET PORTFOLIO DATA — KEN CHERIAN
 * ============================================================================
 * Centralized editorial content for The Cherian Chronicle.
 * ============================================================================
 */

export type ProjectDomain =
  | 'Cybersecurity'
  | 'Full-Stack'
  | 'Machine-Learning'
  | 'Data-Visualization';

export interface ProjectBenchmark {
  label: string;
  value: string;
  delta: string;
}

export interface ProjectStory {
  id: string;
  tier: 'primary' | 'secondary';
  domain: ProjectDomain;
  kicker: string;
  headline: string;
  subhead: string;
  byline: string;
  techStack: string[];
  image?: string;
  imageAlt?: string;
  caption: string;
  problem: string;
  solution: string;
  fullDispatch: string[];
  codeExcerptTitle: string;
  codeExcerpt: string;
  benchmarks: ProjectBenchmark[];
  liveSimulationNote: string;
  sourceUrl: string;
  demoUrl: string;
}

export interface TechnicalIndexEntry {
  symbol: string;
  name: string;
  category: 'Systems' | 'Interface' | 'Data';
  experience: string;
  tier: string;
}

export interface AppointmentEntry {
  period: string;
  role: string;
  institution: string;
  location: string;
  summary: string;
}

export interface NewsBrief {
  id: string;
  kicker: string;
  date: string;
  headline: string;
  excerpt: string;
  fullText: string[];
  publication: string;
  url?: string;
  urlLabel?: string;
}

export const MASTHEAD_CONFIG = {
  publicationName: 'The Cherian Chronicle',
  subBanner: 'SOFTWARE ENGINEERING  ·  FULL-STACK DEVELOPMENT  ·  CYBERSECURITY RESEARCH',
  availabilityTitle: 'AVAILABLE FOR OPPORTUNITIES',
  availabilitySubtitle: 'SVPCET Computer Engineering',
  editionLabel: 'NAGPUR EDITION',
  volume: 'VOL. IV',
  issueNumber: 'NO. 26',
  location: 'NAGPUR, MAHARASHTRA',
  datePublished: 'TUESDAY, NOVEMBER 24, 2026',
  roleTitle: 'SOFTWARE ENGINEER & SECURITY RESEARCHER',
  priceTag: 'PRICE: OPEN SOURCE',
};

export const LEAD_STORY = {
  kicker: 'SPECIAL REPORT',
  headline: 'Software Engineer, Full-Stack Developer & Cybersecurity Researcher',
  deck: 'Driven by a passion for creating impactful, high-performance software—specializing in full-stack web development, zero-trust cybersecurity operations, and practical machine learning integrations.',
  byline: 'BY KEN CHERIAN  ·  COMPUTER ENGINEERING @ SVPCET, NAGPUR  ·  3 MIN READ',
  readTime: '3 Min Read',
  portraitImage: '/src/assets/images/author_editorial_portrait_1795516490590.jpg',
  portraitAlt: 'Editorial portrait of Ken Cherian, Software Engineer and Cybersecurity Researcher',
  portraitCaption: 'Fig. 1 — Ken Cherian, B.Tech Computer Engineering (2023–2028), SVPCET Nagpur.',
  paragraphs: [
    'Hello People, my name is Ken Cherian! I am a Computer Engineering student at St. Vincent Pallotti College of Engineering & Technology (SVPCET) in Nagpur, Maharashtra. Driven by a passion for creating impactful, high-performance software, I specialize in full-stack web development, cybersecurity operations, and practical machine learning integrations.',
    'My core technical toolkit includes React, Next.js, TypeScript, Node.js, Python, and cloud services. Through hands-on projects, I have built systems ranging from zero-trust network monitoring tools and automated SIEM threat-detection platforms to dynamic web applications.',
    'Alongside my technical work, I actively contribute to our student community. I serve as a technical team member for the ACM student chapter and as a Coordinator for Aster, the soft-skills club under our department\'s Zenith Forum. Under Aster club, I have hosted sessions on public speaking, debates, and professional development, helping fellow students bridge the gap between technical expertise and effective communication.',
    'When I am not writing code or analyzing security telemetry, I am an avid reader and history enthusiast. I spend much of my free time reading non-fiction books focused on historical paradigms, societal evolution, and human systems. Studying the past gives me a broader perspective that directly enriches my analytical approach to modern software architecture and problem-solving.',
  ],
  pullQuote:
    '"Studying the past gives me a broader perspective that directly enriches my analytical approach to modern software architecture and problem-solving."',
};

export const FEATURED_PROJECTS: ProjectStory[] = [
  {
    id: 'aegis-siem-soar',
    tier: 'primary',
    domain: 'Cybersecurity',
    kicker: 'LEAD DISPATCH  ·  CYBERSECURITY & AUTOMATION',
    headline: 'Aegis-SIEM-SOAR: Centralized Threat Monitoring & Automated Alert Orchestration',
    subhead:
      'Centralized security monitoring platform with automated alert orchestration, telemetry ingestion pipelines, and MITRE ATT&CK triage runbooks.',
    byline: 'SECURITY MONOGRAPH  ·  PYTHON  ·  SIEM  ·  SOAR  ·  MITRE ATT&CK',
    techStack: ['PYTHON', 'SIEM', 'SOAR', 'MITRE ATT&CK', 'THREAT DETECTION', 'AUTOMATION'],
    caption:
      'Plate I — Aegis SIEM-SOAR orchestration topology depicting contextual log ingestion, MITRE ATT&CK correlation, immutable audit indexing, and automated playbook dispatch.',
    problem:
      'Security analysts face alert fatigue from high-volume, unenriched endpoint and perimeter logs, slowing down incident triage and manual containment across distributed infrastructure.',
    solution:
      'Aegis-SIEM-SOAR automates telemetry ingestion with contextual enrichments, evaluates custom threat correlation rules mapped directly to MITRE ATT&CK, and fires orchestration webhooks for rapid containment.',
    fullDispatch: [
      'High-noise security operations centers frequently drown analysts in raw Syslog, firewall, and endpoint telemetry devoid of asset context. When an attacker pivots laterally, critical seconds are lost manually correlating IP addresses against host inventories.',
      'Aegis-SIEM-SOAR establishes a deterministic pipeline: incoming events are normalized, tagged with GeoIP and asset criticality scores, and evaluated against structured MITRE ATT&CK detection rules in sub-millisecond streaming passes.',
      'Once a multi-stage pattern crosses the severity threshold, the platform persists an immutable audit record and invokes SOAR containment webhooks—isolating compromised endpoints or revoking active sessions automatically.',
    ],
    codeExcerptTitle: 'aegis_correlator.py',
    codeExcerpt: `from datetime import datetime, timezone

def evaluate_mitre_rule(event: dict, mitre_rules: list[dict], dispatch_webhook) -> dict | None:
    for rule in mitre_rules:
        if event.get("event_type") == rule["signature"] and event.get("risk_score", 0) >= rule["threshold"]:
            incident = {
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "mitre_tactic": rule["tactic_id"],
                "source_ip": event["src_ip"],
                "severity": rule["severity"],
                "playbook": rule["soar_playbook"],
            }
            dispatch_webhook(rule["webhook_url"], incident)
            return incident
    return None`,
    benchmarks: [
      { label: 'Telemetry Ingestion Rate', value: '18,400/s', delta: 'Normalized JSON events' },
      { label: 'MITRE Rule Eval Latency', value: '0.62 ms', delta: 'Per correlated stream' },
      { label: 'SOAR Webhook Trigger', value: '< 140 ms', delta: 'Automated containment' },
      { label: 'False-Positive Reduction', value: '-68.4%', delta: 'Contextual enrichment' },
    ],
    liveSimulationNote:
      'Interactive MITRE ATT&CK Rule Evaluation & SOAR Containment Webhook Trace.',
    sourceUrl: 'https://github.com/kencherian/Aegis-SIEM-SOAR-Automation',
    demoUrl: '#aegis-inspector',
  },
  {
    id: 'distributed-soc-telemetry',
    tier: 'secondary',
    domain: 'Cybersecurity',
    kicker: 'CYBERSECURITY  ·  DISTRIBUTED TELEMETRY',
    headline: 'Distributed-SOC-Telemetry: Decentralized Threat Aggregation Engine',
    subhead:
      'High-throughput network threat telemetry engine designed for decentralized log aggregation, real-time anomaly scoring on network packet metadata, and resilient backpressure handling.',
    byline: 'SYSTEMS SECURITY  ·  TELEMETRY  ·  KAFKA  ·  PYTHON',
    techStack: ['TELEMETRY', 'DISTRIBUTED SYSTEMS', 'PYTHON', 'KAFKA', 'NETWORK DEFENSE'],
    image: '/src/assets/images/project_compiler_engine_1795516490253.jpg',
    imageAlt:
      'High-contrast telemetry waveform profiling monitor and mechanical workstation on a dark wood desk',
    caption:
      'Fig. 2 — Real-time packet metadata waveform monitoring and distributed telemetry queue profiling.',
    problem:
      'Single-node log collectors drop critical packet metadata under sudden volumetric DDoS or port-scan bursts, creating blind spots during active network intrusions.',
    solution:
      'Decentralizes ingestion across partitioned Kafka topics with bounded backpressure queues and streaming anomaly scoring over network flow metadata.',
    fullDispatch: [
      'Network visibility fails precisely when traffic volume peaks. Centralized collectors without explicit backpressure handling either exhaust memory or silently discard packet headers during volumetric bursts.',
      'Distributed-SOC-Telemetry partitions flow metadata across resilient Kafka consumer groups, computing rolling z-scores for SYN-to-ACK ratios, DNS entropy, and lateral port sweeps before persisting alerts.',
      'Built-in consumer lag telemetry guarantees graceful degradation under spike conditions so high-priority anomaly alerts always reach analysts first.',
    ],
    codeExcerptTitle: 'flow_anomaly_worker.py',
    codeExcerpt: `def score_flow_window(flows: list[dict], syn_threshold: float = 0.82) -> list[dict]:
    flagged = []
    for flow in flows:
        ratio = flow["syn_count"] / max(flow["total_packets"], 1)
        if ratio >= syn_threshold and flow["dst_ports"] > 24:
            flagged.append({"src": flow["src_ip"], "anomaly": round(ratio, 3), "type": "PORT_SCAN"})
    return flagged`,
    benchmarks: [
      { label: 'Packet Flow Throughput', value: '42,000/s', delta: 'Kafka partitioned stream' },
      { label: 'Anomaly Scoring Latency', value: '0.74 ms', delta: 'Per micro-batch' },
      { label: 'Backpressure Drop Rate', value: '0.00%', delta: 'Bounded ring buffer' },
    ],
    liveSimulationNote: 'Kafka Partition Lag & Network Packet Anomaly Scoring Inspector.',
    sourceUrl: 'https://github.com/kencherian/distributed-soc-telemetry-pipeline',
    demoUrl: '#soc-telemetry-inspector',
  },
  {
    id: 'aetherguard-enterprise',
    tier: 'secondary',
    domain: 'Cybersecurity',
    kicker: 'CYBERSECURITY  ·  ZERO-TRUST ARCHITECTURE',
    headline: 'Aetherguard-Enterprise: Zero-Trust Micro-Endpoint Verification',
    subhead:
      'Enterprise-level security infrastructure providing zero-trust verification barriers across micro-endpoints, granular role-based token delegation with adaptive threat scoring, and audit log immutability.',
    byline: 'ZERO-TRUST INFRASTRUCTURE  ·  AUTH  ·  POLICY ENFORCEMENT',
    techStack: ['ZERO-TRUST', 'ENTERPRISE SECURITY', 'AUTH', 'POLICY ENFORCEMENT'],
    image: '/src/assets/images/project_spatial_typography_1795516491240.jpg',
    imageAlt:
      'Structured architectural policy schematics and access verification layout blueprints',
    caption:
      'Fig. 3 — Zero-trust policy enforcement grid and immutable audit verification schema.',
    problem:
      'Perimeter-only authentication leaves internal microservices vulnerable to lateral movement once a single service credential or session token is compromised.',
    solution:
      'Enforces continuous per-request verification across micro-endpoints using short-lived delegated tokens, adaptive session risk scoring, and append-only audit logs.',
    fullDispatch: [
      'Traditional network perimeters assume internal traffic is trustworthy. Aetherguard-Enterprise rejects implicit trust by placing a deterministic policy enforcement barrier in front of every microservice route.',
      'Each request undergoes signature verification, role-scope inspection, and dynamic risk evaluation before token delegation proceeds—revoking access immediately if behavioral anomalies appear.',
      'All authorization grants and denials write to an immutable, hash-chained audit ledger ready for compliance and incident forensics.',
    ],
    codeExcerptTitle: 'policy_gate.ts',
    codeExcerpt: `export function verifyZeroTrustBarrier(tokenClaims: Claims, requiredScope: string, riskScore: number) {
  if (riskScore > 0.75 || !tokenClaims.scopes.includes(requiredScope)) {
    return { allow: false, reason: 'ADAPTIVE_POLICY_DENY' } as const;
  }
  return { allow: true, delegatedTtlSec: 120 } as const;
}`,
    benchmarks: [
      { label: 'Policy Barrier Latency', value: '0.51 ms', delta: 'Inline token verification' },
      { label: 'Token Delegation TTL', value: '120 sec', delta: 'Short-lived rotation' },
      { label: 'Audit Chain Integrity', value: '100%', delta: 'SHA-256 hash-linked' },
    ],
    liveSimulationNote: 'Adaptive Zero-Trust Policy Gate & Token Scope Evaluator.',
    sourceUrl: 'https://github.com/kencherian/aetherguard-enterprise',
    demoUrl: '#aetherguard-inspector',
  },
  {
    id: 'omnivault-storage',
    tier: 'secondary',
    domain: 'Full-Stack',
    kicker: 'FULL-STACK  ·  ENCRYPTED CLOUD STORAGE',
    headline: 'OmniVault: Encrypted Cloud Storage & Chunked Stream Suite',
    subhead:
      'Secure cloud storage management suite with encrypted client-side chunked upload streams (pause/resume), dynamic folder trees, permission sharing, and multi-format previewers.',
    byline: 'FULL-STACK ARCHITECTURE  ·  REACT  ·  NEXT.JS  ·  TYPESCRIPT',
    techStack: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'CLOUD STORAGE', 'TAILWIND CSS'],
    caption:
      'OmniVault client-side chunked upload and hierarchical permission architecture.',
    problem:
      'Browser file uploads fail unpredictably on large media archives and expose plaintext payloads prior to server-side encryption.',
    solution:
      'Implements resumable client-side encrypted chunked streams paired with a recursive folder tree, granular share links, and in-browser file previews.',
    fullDispatch: [
      'OmniVault splits large files into deterministic chunks in the browser, encrypting each slice before transmission so interrupted connections resume cleanly from the last acknowledged byte offset.',
      'Users navigate deep directory hierarchies via an optimistic folder tree, inspect PDFs, images, and source files directly in-app, and issue time-bounded permission grants.',
    ],
    codeExcerptTitle: 'chunkUploader.ts',
    codeExcerpt: `export async function* streamFileChunks(file: File, chunkSize = 1024 * 1024) {
  let offset = 0;
  while (offset < file.size) {
    const slice = file.slice(offset, offset + chunkSize);
    yield { index: offset / chunkSize, buffer: await slice.arrayBuffer() };
    offset += chunkSize;
  }
}`,
    benchmarks: [
      { label: 'Chunk Resume Overhead', value: '0.90 ms', delta: 'Per 1 MB slice' },
      { label: 'Client Encryption Speed', value: '310 MB/s', delta: 'WebCrypto AES-GCM' },
      { label: 'Tree Render Budget', value: '60 fps', delta: 'Virtualized directories' },
    ],
    liveSimulationNote: 'Resumable Chunk Stream & Permission Sharing Matrix.',
    sourceUrl: 'https://github.com/kencherian/OmniVault',
    demoUrl: '#omnivault-inspector',
  },
  {
    id: 'cineflow-discovery',
    tier: 'secondary',
    domain: 'Full-Stack',
    kicker: 'FULL-STACK  ·  MEDIA DISCOVERY ENGINE',
    headline: 'CineFlow: Interactive Film Discovery & Watchlist Platform',
    subhead:
      'Interactive movie discovery web application featuring infinite scroll, filtering by release window/ratings/genre tags, and curated watchlists.',
    byline: 'FRONTEND ENGINEERING  ·  REACT  ·  TYPESCRIPT  ·  TMDB API',
    techStack: ['REACT', 'TYPESCRIPT', 'TMDB API', 'TAILWIND CSS', 'FRAMER MOTION'],
    caption: 'CineFlow multi-facet discovery pipeline and infinite-scroll catalog engine.',
    problem:
      'Catalog browsers often lag during rapid multi-tag filtering and lose user scroll context when inspecting title details.',
    solution:
      'Combines debounced TMDB query caching, intersection-observed infinite pagination, and local persistent watchlists in TypeScript.',
    fullDispatch: [
      'CineFlow synchronizes release-window sliders, minimum rating thresholds, and multi-genre filters directly with paginated TMDB endpoints without redundant network waterfalls.',
      'Smooth compositor-driven card transitions and persistent personal watchlists keep browsing responsive across desktop and mobile viewports.',
    ],
    codeExcerptTitle: 'useMovieCatalog.ts',
    codeExcerpt: `export function buildDiscoveryQuery(filters: MovieFilters, page: number): string {
  const params = new URLSearchParams({
    page: String(page),
    'vote_average.gte': String(filters.minRating),
    with_genres: filters.genres.join(','),
  });
  return \`/discover/movie?\${params.toString()}\`;
}`,
    benchmarks: [
      { label: 'Filter Query Debounce', value: '180 ms', delta: 'Zero duplicate requests' },
      { label: 'Pagination Frame Rate', value: '60 fps', delta: 'IntersectionObserver' },
      { label: 'Watchlist Persistence', value: '0.35 ms', delta: 'Indexed local sync' },
    ],
    liveSimulationNote: 'Multi-Genre Filter & Paginated Discovery Query Builder.',
    sourceUrl: 'https://github.com/kencherian/CineFlow',
    demoUrl: '#cineflow-inspector',
  },
  {
    id: 'employee-management-system',
    tier: 'secondary',
    domain: 'Full-Stack',
    kicker: 'FULL-STACK  ·  WORKFORCE OPERATIONS',
    headline: 'Employee-Management: Role-Governed Organizational Dashboard',
    subhead:
      'Comprehensive organizational dashboard for employee records, role-governed administrative controls, salary/department transfers, attendance ledgering, and optimistic updates.',
    byline: 'ENTERPRISE CRUD  ·  REACT  ·  NODE.JS  ·  STATE MANAGEMENT',
    techStack: ['REACT', 'NODE.JS', 'FULL-STACK', 'CRUD DASHBOARD', 'STATE MANAGEMENT'],
    caption: 'Role-governed employee ledger and optimistic administrative workflow.',
    problem:
      'Internal HR tools often conflate employee self-service views with privileged payroll and department mutation endpoints.',
    solution:
      'Separates administrative and staff capabilities via strict role guards while delivering instant optimistic UI updates backed by Node.js persistence.',
    fullDispatch: [
      'Employee-Management centralizes onboarding records, attendance ledgering, and departmental transfers into a crisp, auditable administrative console.',
      'Optimistic mutations roll back gracefully on validation failure, ensuring personnel ledgers remain consistent under concurrent edits.',
    ],
    codeExcerptTitle: 'departmentTransfer.js',
    codeExcerpt: `export async function transferEmployee(req, res) {
  const { employeeId, targetDept, effectiveDate } = req.body;
  if (!req.user?.isAdmin) return res.status(403).json({ error: 'Admin role required' });
  const updated = await EmployeeModel.findByIdAndUpdate(
    employeeId,
    { department: targetDept, transferredAt: effectiveDate },
    { new: true }
  );
  return res.json(updated);
}`,
    benchmarks: [
      { label: 'Optimistic Ledger Commit', value: '0.45 ms', delta: 'Immediate UI reconcile' },
      { label: 'RBAC Guard Overhead', value: '0.52 ms', delta: 'Route-level middleware' },
      { label: 'Directory Search Latency', value: '18 ms', delta: 'Indexed staff lookup' },
    ],
    liveSimulationNote: 'Role-Based Staff Transfer & Attendance Ledger Trace.',
    sourceUrl: 'https://github.com/kencherian/Employee-Management-System',
    demoUrl: '#ems-inspector',
  },
  {
    id: 'tomato-food-delivery',
    tier: 'secondary',
    domain: 'Full-Stack',
    kicker: 'FULL-STACK  ·  COMMERCE & CHECKOUT',
    headline: 'Tomato: Full-Stack Food Ordering & Reactive Cart Platform',
    subhead:
      'Modern food delivery e-commerce application featuring live menu discovery, real-time reactive cart state with tax/promo/delivery estimates, dietary filters, and multi-stage order tracking.',
    byline: 'E-COMMERCE STACK  ·  REACT  ·  STRIPE INTEGRATION  ·  TAILWIND CSS',
    techStack: ['REACT', 'CART ENGINE', 'STRIPE INTEGRATION', 'TAILWIND CSS'],
    caption: 'Reactive cart calculation engine and multi-stage fulfillment pipeline.',
    problem:
      'Checkout flows frequently desynchronize promo discounts, regional taxes, and delivery fees between client cart state and payment intents.',
    solution:
      'Encapsulates cart pricing in a deterministic reducer synchronized with Stripe checkout verification and live multi-stage order status tracking.',
    fullDispatch: [
      'Tomato delivers instant dietary and cuisine filtering alongside a reactive cart drawer that recalculates subtotals, promo codes, and delivery fees deterministically.',
      'After Stripe payment confirmation, customers track order progression from kitchen preparation through courier handoff in real time.',
    ],
    codeExcerptTitle: 'cartTotals.ts',
    codeExcerpt: `export function calculateCartTotals(items: CartItem[], promoRate = 0, deliveryFee = 40) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = Math.round(subtotal * promoRate);
  const tax = Math.round((subtotal - discount) * 0.05);
  return { subtotal, discount, tax, deliveryFee, total: subtotal - discount + tax + deliveryFee };
}`,
    benchmarks: [
      { label: 'Cart State Recompute', value: '0.18 ms', delta: 'Deterministic reducer' },
      { label: 'Checkout Session Init', value: '110 ms', delta: 'Stripe PaymentIntent' },
      { label: 'Order Stage Poll', value: '32 ms', delta: 'Status state machine' },
    ],
    liveSimulationNote: 'Deterministic Cart Pricing & Multi-Stage Order Tracker.',
    sourceUrl: 'https://github.com/kencherian/Food-Delivery-Website',
    demoUrl: '#tomato-inspector',
  },
  {
    id: 'gnn-gene-disease-prediction',
    tier: 'secondary',
    domain: 'Machine-Learning',
    kicker: 'MACHINE LEARNING  ·  GRAPH BIOINFORMATICS',
    headline: 'GNN Gene Disease Prediction: Biomedical Knowledge Graph Reasoning',
    subhead:
      'Graph Neural Network architecture predicting complex gene-disease associations through heterogeneous biomedical knowledge graphs, Graph Convolutional/Attention layers, and biomarker embedding visualizations.',
    byline: 'DEEP LEARNING  ·  PYTORCH GEOMETRIC  ·  GRAPH NEURAL NETWORKS',
    techStack: ['PYTORCH GEOMETRIC', 'GRAPH NEURAL NETWORKS', 'BIOINFORMATICS', 'PYTHON'],
    caption: 'Heterogeneous gene-disease message-passing layers and biomarker embeddings.',
    problem:
      'Tabular machine learning models overlook multi-hop topological relationships across protein interactions, pathways, and disease phenotypes.',
    solution:
      'Constructs a heterogeneous biomedical graph trained with Graph Convolutional and Attention (GCN/GAT) layers to surface high-confidence gene-disease links.',
    fullDispatch: [
      'By modeling genes, pathways, and clinical phenotypes as typed nodes in a unified knowledge graph, message-passing layers aggregate neighborhood evidence across multi-hop biological interactions.',
      'Attention weights highlight which pathway connections contributed most strongly to a predicted association, making biomarker rankings interpretable for downstream validation.',
    ],
    codeExcerptTitle: 'hetero_gat_model.py',
    codeExcerpt: `import torch.nn as nn
from torch_geometric.nn import GATConv

class GeneDiseaseGAT(nn.Module):
    def __init__(self, in_dim: int, hidden_dim: int):
        super().__init__()
        self.conv1 = GATConv(in_dim, hidden_dim, heads=4, concat=True)
        self.conv2 = GATConv(hidden_dim * 4, hidden_dim, heads=1, concat=False)

    def forward(self, x, edge_index):
        h = self.conv1(x, edge_index).relu()
        return self.conv2(h, edge_index)`,
    benchmarks: [
      { label: 'Link Prediction AUROC', value: '0.934', delta: '5-fold cross-validation' },
      { label: 'Graph Forward Pass', value: '0.89 ms', delta: 'Batched subgraph' },
      { label: 'Top-10 Biomarker Hits', value: '88.5%', delta: 'Validated gene pairs' },
    ],
    liveSimulationNote: 'Heterogeneous Biomedical Graph Attention Weight Explorer.',
    sourceUrl: 'https://github.com/kencherian/gnn-gene-disease-prediction',
    demoUrl: '#gnn-inspector',
  },
  {
    id: 'driver-specific-plot-styling',
    tier: 'secondary',
    domain: 'Machine-Learning',
    kicker: 'MACHINE LEARNING & ANALYTICS  ·  MOTORSPORT TELEMETRY',
    headline: 'Driver-Specific-Plot-Styling: F1 Telemetry & Livery Visualization',
    subhead:
      'F1 motorsport telemetry data visualization toolkit with custom Matplotlib driver livery color palettes, braking/throttle/apex telemetry delta overlays, and high-resolution vector chart exports.',
    byline: 'DATA SCIENCE  ·  PYTHON  ·  FASTF1  ·  MATPLOTLIB',
    techStack: ['PYTHON', 'FASTF1', 'MATPLOTLIB', 'DATA SCIENCE', 'MOTORSPORT ANALYTICS'],
    caption: 'FastF1 lap-delta telemetry trace styled with constructor livery palettes.',
    problem:
      'Raw Formula 1 lap telemetry plots often default to indistinguishable colors and cluttered axes that obscure subtle braking and apex speed deltas.',
    solution:
      'Provides reusable Matplotlib style sheets keyed to official driver and constructor palettes alongside automated corner-by-corner delta overlays and SVG/PDF export.',
    fullDispatch: [
      'Driver-Specific-Plot-Styling wraps FastF1 session telemetry extraction in a clean styling engine that maps each driver to high-contrast constructor colorways and consistent dash patterns.',
      'Engineers and analysts overlay throttle, brake pressure, and gear traces across qualifying laps and export publication-grade vector graphics in one call.',
    ],
    codeExcerptTitle: 'livery_palette.py',
    codeExcerpt: `def apply_driver_style(ax, driver_code: str, palette_map: dict[str, dict]):
    style = palette_map.get(driver_code, {"color": "#141413", "linestyle": "-"})
    ax.grid(True, linestyle=":", linewidth=0.6, alpha=0.5)
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    return style["color"], style["linestyle"]`,
    benchmarks: [
      { label: 'Lap Telemetry Parse', value: '0.68 ms', delta: 'Cached FastF1 frame' },
      { label: 'Vector Export DPI', value: '600 DPI', delta: 'Lossless SVG / PDF' },
      { label: 'Driver Palettes Indexed', value: '20', delta: 'WCAG contrast tuned' },
    ],
    liveSimulationNote: 'Qualifying Lap Braking & Apex Telemetry Delta Comparison.',
    sourceUrl: 'https://github.com/kencherian/Driver-specific-plot-styling',
    demoUrl: '#f1-inspector',
  },
  {
    id: 'global-market-terminal',
    tier: 'secondary',
    domain: 'Data-Visualization',
    kicker: 'DATA VISUALIZATION  ·  FINANCIAL TERMINAL',
    headline: 'Global-Market-Terminal: Multi-Pane Macro & Candlestick Visualizer',
    subhead:
      'Bloomberg-inspired financial data visualizer rendering multi-pane candlestick/volume charts, FX/indices/commodities macro dashboards, and a retro-futuristic terminal command bar with hotkey navigation.',
    byline: 'DATA VISUALIZATION  ·  TYPESCRIPT  ·  FINANCIAL CHARTS',
    techStack: ['TYPESCRIPT', 'FINANCIAL CHARTS', 'DATA VIZ', 'LIVE TICKERS'],
    caption: 'Multi-pane candlestick terminal with keyboard command bar and macro feeds.',
    problem:
      'Retail market dashboards scatter FX, commodities, and equity charts across slow web tabs without keyboard-first navigation.',
    solution:
      'Delivers a dense, hotkey-driven multi-pane market terminal in TypeScript featuring synchronized candlestick/volume panes and instant ticker command switching.',
    fullDispatch: [
      'Global-Market-Terminal brings keyboard-first terminal ergonomics to browser-based financial visualization—letting operators jump between equity indices, FX crosses, and commodities with slash commands.',
      'Multi-pane OHLC candlestick and volume series align cleanly across shared time cursors with tabular numeric alignment to prevent visual jitter during live ticker updates.',
    ],
    codeExcerptTitle: 'terminalCommandParser.ts',
    codeExcerpt: `export function parseTerminalCommand(input: string) {
  const [ticker = 'SPX', view = 'CHART'] = input.trim().toUpperCase().split(/\\s+/);
  return { ticker, view, isValid: /^[A-Z0-9.\\-]{1,10}$/.test(ticker) };
}`,
    benchmarks: [
      { label: 'Candlestick Pan/Zoom', value: '60 fps', delta: '10,000+ OHLC bars' },
      { label: 'Command Bar Dispatch', value: '0.24 ms', delta: 'Keyboard shortcut' },
      { label: 'Macro Watchlist Feeds', value: '24', delta: 'FX, Indices, Commodities' },
    ],
    liveSimulationNote: 'Terminal Hotkey Command Bar & OHLC Candlestick Viewport.',
    sourceUrl: 'https://github.com/kencherian/Global-Market-Terminal',
    demoUrl: '#terminal-inspector',
  },
];

export const TECHNICAL_INDEX: TechnicalIndexEntry[] = [
  { symbol: 'TSX', name: 'TypeScript / JavaScript (ES6+)', category: 'Interface', experience: '3+ YRS', tier: 'CORE' },
  { symbol: 'PY3', name: 'Python / C / C++', category: 'Systems', experience: '3+ YRS', tier: 'CORE' },
  { symbol: 'RCT', name: 'React / Next.js / Tailwind CSS', category: 'Interface', experience: '2+ YRS', tier: 'CORE' },
  { symbol: 'NOD', name: 'Node.js / Express / FastAPI', category: 'Systems', experience: '2+ YRS', tier: 'PROD' },
  { symbol: 'SOC', name: 'SIEM, SOAR & SOC Telemetry', category: 'Systems', experience: 'INTERN', tier: 'LEAD' },
  { symbol: 'VMD', name: 'Qualys VMDR & Zero-Trust', category: 'Systems', experience: 'CERT', tier: 'LEAD' },
  { symbol: 'NET', name: 'Wireshark / Splunk / Linux Bash', category: 'Systems', experience: 'LABS', tier: 'PROD' },
  { symbol: 'SQL', name: 'PostgreSQL / MongoDB / Redis', category: 'Data', experience: '2+ YRS', tier: 'CORE' },
  { symbol: 'CLD', name: 'AWS / Docker / Git & GitHub', category: 'Data', experience: '2+ YRS', tier: 'PROD' },
];

export const APPOINTMENTS: AppointmentEntry[] = [
  {
    period: '2023 — 2028',
    role: 'B.Tech in Computer Engineering',
    institution: 'St. Vincent Pallotti College of Engineering & Technology',
    location: 'SVPCET, Nagpur',
    summary: 'Pursuing with honors focus in Distributed Systems & Cyber Defense.',
  },
  {
    period: 'JUN 2026',
    role: 'Cybersecurity Intern',
    institution: 'Secuerium Technologies',
    location: 'Nagpur, India',
    summary:
      'Completed cybersecurity internship focused on vulnerability assessment, security controls, and threat monitoring.',
  },
  {
    period: '2026 — PRESENT',
    role: 'Technical Team Member & Coordinator',
    institution: 'ACM Student Chapter & Aster Club (Zenith Forum)',
    location: 'SVPCET, Nagpur',
    summary:
      'Orchestrating technical workshops and competitive coding events for ACM; leading speech sessions, debates, and professional development cohorts for Aster Club.',
  },
  {
    period: '2026',
    role: 'VMDR – Qualys Certified Specialist',
    institution: 'Vulnerability Management, Detection & Response',
    location: 'Issuer: Qualys',
    summary:
      'Certified in enterprise vulnerability scanning, asset tagging, threat prioritization, and remediation workflows.',
  },
  {
    period: '2025',
    role: 'Google Cybersecurity Professional',
    institution: 'Network Defense, SIEM, Incident Response & Python',
    location: 'Issuer: Google',
    summary:
      'Completed end-to-end training in network security, Linux/SQL auditing, SIEM log analysis, and Python security automation.',
  },
];

export const NEWS_IN_BRIEF: NewsBrief[] = [
  {
    id: 'brief-ijraset-themis',
    kicker: 'PUBLICATION',
    date: 'JUL 2026',
    headline: 'Explainable AI-Based Legal Research Assistant Published in IJRASET',
    publication: 'IJRASET · Research Publication',
    excerpt:
      'Co-authored with Krish Gokhale, Tanvi, and Anugraha on precedent analysis and judicial outcome prediction using dense retrieval and transformer models.',
    fullText: [
      'Published in the International Journal for Research in Applied Science & Engineering Technology (IJRASET), this paper presents Themis AI—an explainable legal research assistant built to accelerate statutory and precedent discovery.',
      'Co-authored with Krish Gokhale, Tanvi, and Anugraha, the architecture combines dense semantic vector retrieval with transformer-based judicial outcome prediction and an interactive adversarial debate simulator for junior legal practitioners.',
    ],
    url: 'https://github.com/kencherian/Themis_AI',
    urlLabel: 'Open Themis AI Repository',
  },
  {
    id: 'brief-spring4shell-lab',
    kicker: 'SECURITY LAB',
    date: 'OCT 2026',
    headline: 'CVE-2022-22965 (Spring4Shell) Exploit & Log Telemetry Lab',
    publication: 'Cybersecurity Operations & Telemetry Notes',
    excerpt:
      'Virtualized vulnerability lab reproducing Spring4Shell exploitation mechanics and analyzing server-side telemetry indicators.',
    fullText: [
      'This virtualized vulnerability lab reproduces CVE-2022-22965 (Spring4Shell) class-loader manipulation in a controlled container environment to document end-to-end attack mechanics.',
      'Server-side HTTP access logs, Tomcat anomaly signatures, and filesystem telemetry indicators were captured and translated into repeatable detection rules for SIEM triage.',
    ],
  },
  {
    id: 'brief-win98-web-os',
    kicker: 'INTERACTIVE OS',
    date: '2026',
    headline: 'Launch Windows 98 Web OS Portfolio Edition',
    publication: 'AI Studio Interactive Release',
    excerpt:
      'Interactive retro desktop portfolio environment deployed on AI Studio featuring draggable windows and system utilities.',
    fullText: [
      'The Windows 98 Web OS Portfolio Edition reimagines software engineering showcases as an interactive browser-based desktop environment complete with draggable windows, taskbars, and classic UI chrome.',
      'Deployed directly on AI Studio alongside Ken Cherian’s security and full-stack repositories.',
    ],
    url: 'https://retro-windows-98-web-os-portfolio-ken-cherian.ai.studio',
    urlLabel: 'Launch Windows 98 Web OS',
  },
];

export const CLASSIFIEDS_CONFIG = {
  email: 'kencherian16@gmail.com',
  locationNote: 'NAGPUR, MAHARASHTRA  ·  SVPCET',
  responseSla:
    'Replies within 1 business day for software engineering, full-stack, AI, and cybersecurity opportunities.',
  wires: [
    { label: 'GITHUB', handle: '@kencherian', url: 'https://github.com/kencherian' },
    {
      label: 'LINKEDIN',
      handle: 'in/ken-cherian',
      url: 'https://www.linkedin.com/in/ken-cherian/',
    },
    {
      label: 'WINDOWS 98 OS',
      handle: 'Launch Retro Desktop',
      url: 'https://retro-windows-98-web-os-portfolio-ken-cherian.ai.studio',
    },
    {
      label: 'THEMIS AI REPO',
      handle: 'IJRASET Legal Research',
      url: 'https://github.com/kencherian/Themis_AI',
    },
  ],
  colophon:
    'Set in Playfair Display, Newsreader & JetBrains Mono. Built on a strict 12-column hairline grid with 0px border-radius for Ken Cherian.',
};
