# Portfolio redesign plan

Research date: 30 September 2026. This is a plan and content audit, not another UI implementation. The current PR remains unchanged by this document until a design is implemented.

## Direction

Keep the black/charcoal background, blue accent, monospace identity, personal writing, and netcat portfolio. Add visual depth through real project screenshots, diagrams, and properly contextualized results. The first revision overused marketing slogans and decorative terminal UI; the second removed too much hierarchy and visual interest. The next revision should feel like a software engineer's carefully designed portfolio.

References inspected in a browser:
- https://supermemory.ai — desktop side navigation, editorial hierarchy, thin dividers, blue technical visuals, system diagrams, compact evidence tables, and research-oriented content. Adapt its structured navigation and explanation through diagrams to the existing dark theme.
- https://www.instacloud.com — dark grid background, layered dashboard preview, clearly separated panels, restrained accent, CLI command panel, and infrastructure diagrams. Adapt its use of actual product UI and purposeful motion; use the existing blue rather than its mint.

Do not copy company sales language, pricing sections, testimonials, synthetic monitoring data, or a product-company identity. Any illustrative animation must describe a real system and be labeled as a demonstration.

## One visual system for every route

Current issue: Home and Projects use custom styles; About, Experience, Blog, article, and Contact still use older layouts and components.

Define shared page and section components before implementing route-specific layouts:
- A desktop navigation rail with name/photo, route links, GitHub, resume, and terminal entry; collapse to a keyboard-accessible mobile header/menu.
- One content container, approximately 1040px wide, with the same outer gutters on all pages. Use a 680–720px inner reading column for articles and forms; keep outer page alignment consistent.
- A common page heading: title, short personal introduction, and optional utility action. No oversized generic slogans.
- Typography: monospace headings/navigation/technical labels; legible 14–16px body copy and generous line height. Establish a single scale rather than page-specific sizes.
- Shared charcoal surfaces, subtle neutral borders, blue focus/links, section spacing, buttons, tags, tables, and empty/error states.
- Grid texture restricted to one or two visual regions, not behind every paragraph. No gratuitous glow, tilt, lift-on-every-card, custom pointer, or automatic marketing popup.
- Reusable project preview, result, experience, disclosure, and writing rows. Retire superseded CSS instead of layering another override system.

Route application:
- Home: introduction, selected work with visuals, results, experience summary, contributions/security, writing, small terminal module, contact links.
- Projects: same page header and shell; keep search/filters; larger previews for selected projects and a compact searchable archive beneath.
- Project detail pages: problem, my role/team, outcome, screenshot/demo, system diagram, technical decisions, repository/live links, dates/status. Distinguish team work from personal contributions.
- Experience: same shell, detailed role panels with contextualized metrics; May–July 2025 for Sykes & Rays, confirmed by the user.
- About: same shell, fuller bio, education, grouped skills, interests and social links.
- Writing and article: same shell and header treatment, reading column, properly styled code blocks and accessible copy controls.
- Contact: same shell, clear email link, compact form and existing delivery fallback.
- Resume: keep working PDF download; correct the resume's Sykes dates separately if requested.

## Homepage composition

1. Intro: name, photo, concise first-person bio, actual role and institution. A modest technical diagram alongside it can show one documented project; no fake terminal autobiography.
2. Selected projects: one wide IntelliAnnounce panel with a genuine preview or pipeline illustration, followed by unequal but aligned OpenQuant and code-judge panels. OnTrack provides a mobile-app contrast. Other projects stay in the archive.
3. Work results: contextualized IkiQuant results next to the role description. Show baseline/change labels only where known; do not invent timings or measurements.
4. Experience and open source: role summaries, OpenAlgo contribution with recognition link, and published Dart package. Security gets its own small section with responsible-disclosure summaries if suitable for publication.
5. Hackathons: compact event/project/result list. Winners, runners-up, sponsor prizes, and finalist placements must be separate categories.
6. Writing and terminal: a post preview and the real copyable netcat command; optional restrained ASCII in this module.
7. Contact/footer: simple personal links, no sales pitch.

Motion: one small diagram can reveal data flow on hover/focus or explicit play; avoid scroll hijacking. Screenshot tabs and expandable technical details provide useful interaction. All functionality works by keyboard/touch and with reduced motion.

## Resume audit

Source: public/Manan_Gandhi_Resume.pdf. Statements below are resume claims, not independently benchmarked results. The PDF link exists on the site; 'missing' means missing from normal page content.

| Item | Current website | Proposed placement |
| --- | --- | --- |
| IkiQuant: US Index Options specialization | Generic internship title only | Experience role subtitle |
| Real-time risk management and exposure monitoring | Missing | Experience detail |
| 15× reduction in strategy execution latency | Missing | Role result with context |
| 3× optimization of market-data/Options Greeks pipelines | Missing | Role result with context |
| Live monitoring, research, charting and market-data dashboards | Missing | Experience detail; only public/nonconfidential visuals |
| Sykes: 90% reduction in manual post-market work | Automation described without metric | Experience result |
| OpenAlgo maintainer recognition | Connector fix mentioned; recognition omitted | Contribution row linked to public acknowledgment |
| Online code judge: 200+ users | Missing | Featured project result |
| Code judge: async execution, Docker isolation, Redis Pub/Sub, resource limits, hidden tests, telemetry | Mostly tech list and language support | Project case study |
| IntelliAnnounce: Redis hot path, nightly persistence to PostgreSQL | Missing | Pipeline diagram and case study |
| IntelliAnnounce: watchlists, filtering, real-time alerts | Incomplete | Case study |
| Adeon: Top 35 globally among 1,500+ Buildathon projects | Missing | Achievement row/case study, with evidence link if available |
| Security disclosures: Matiks, Unstop, iicpc.com | General interest only | Disclosure summaries; distinguish documented and publicly acknowledged claims |
| Education: qualification and 2022–2028 period | Institution mentioned, qualification/dates omitted | About; clarify whether period includes an integrated programme |
| Technical skills: ClickHouse, Spark, Linux, Bash, Django, React Native, etc. | Incomplete and scattered through project tags | Grouped skills linked to actual use |

Confirmed discrepancy: website says Sykes May–July 2025; resume says December 2025–January 2026. User confirms May–July is correct. Do not change website dates to match the PDF.

## Linked profile and repository audit

- OpenQuant: website points to Neurotechh/CodeForge; the resume links to https://github.com/Neurotechh/OpenQuant. The OpenQuant repository exists and has dashboard/strategy screenshots and a detailed README. Use that direct project repository. Its options analytics, Greeks, volatility surface, anomaly detection, payoff construction and backtesting are underexplained on the website.
- FormBar: website lists forms/realtime collaboration/WhatsApp. Indexed LinkedIn posts also describe UPI payment collection and a second-place Full Stack result at ReCode 2026. Add feature/context with source attribution; don't inflate to an overall event winner.
- Terminal portfolio repository: https://github.com/MananGandhi1810/terminal-portfolio is absent from project data despite the command and article being present. Add a source link/project entry.
- apictl: https://github.com/apictl/apictl-server is pinned on the personal profile but absent from the website project list. Confirm role before giving a personal-authorship claim.
- ManPost and CodeSpar are public personal repositories absent from project data. Candidate archive entries; inspect maturity, role and status before featuring. Do not add every repository simply to increase project count.
- A LinkedIn-indexed teammate post names Manan in Team Rocketeers for an ISRO Bhartiya Antriksh Hackathon exoplanet-detection pipeline. Candidate project/story, with personal contribution and final outcome needing confirmation.
- Published cloudflare_ai package is already listed, but it is buried among projects rather than presented as a maintained/published open-source package.
- Existing OnTrack 1,500+ downloads and Save Birds 30+ cases/day are already in project descriptions. These are underused proof, not newly discovered omissions. Reconfirm current counts and date them before making headline metrics.
- Seven hackathon wins already appears in About/GitHub, but there is no consolidated event/project/result list. Resume and project descriptions mix wins and runner-up results; preserve the distinction.

Sources:
- https://github.com/MananGandhi1810
- https://in.linkedin.com/in/manangandhi1810 (indexed public posts; direct profile access restricted)
- https://github.com/Neurotechh/OpenQuant
- https://github.com/MananGandhi1810/online-ide
- https://github.com/MananGandhi1810/Adeon
- https://github.com/MananGandhi1810/manpost
- https://github.com/MananGandhi1810/codespar
- https://github.com/apictl/apictl-server
- https://pub.dev/packages/cloudflare_ai
- https://www.linkedin.com/feed/update/urn:li:activity:7344713017122521090/
- https://x.com/marketcallsHQ/status/1937931875592667598 (resume evidence link; direct content unavailable)

Limits: LinkedIn was partially available through indexed public content. X, Chess.com and Matiks pages were not readable through the research tool. Instagram was not inspected in this audit. A liked/reposted post is not evidence of personal authorship or an award. No missing certifications, employment or roles inferred from inaccessible profiles.

## Execution and review gates

1. Normalize content into shared typed data, with source, role/team, outcome, status and date fields. Correct the OpenQuant link and incorporate confirmed resume facts; hold uncertain dates/claims explicitly.
2. Build the shared shell and visual primitives. Apply to Home, Projects, Experience, About, Writing/article and Contact together.
3. Produce a desktop/mobile preview of the homepage and one secondary page to assess the richer direction before expanding project detail content. This is a design-review checkpoint, not a request to approve routine code changes.
4. Add genuine project previews and project-specific diagrams. Use repository screenshots when available; do not fabricate product screens or live activity.
5. Finish all routes, refresh screenshot/docs, and update the existing PR when implementation is requested.
6. Verify consistency at 1440, 1024, 768, 390 and 320px; tab navigation, mobile menu/Escape, focus, reduced motion, contrast, search/filter/reset, clipboard, downloads, forms and unavailable-service states. Run build/lint and check browser errors.

Completion means all normal pages share the same system, the work has stronger visual evidence, factual content has source/context, and the site retains a personal voice. A polished homepage alone does not meet the requirement.

## Implementation status

Implemented a shared navigation rail, page shell, heading component, responsive panels, project archive and five project detail routes. Home, About, Experience, Writing/article, Projects/details and Contact use the same visual system. Added resume-backed results and skills, education, security summaries, selected hackathon results, Terminal Portfolio, ManPost and CodeSpar archive entries, and the direct OpenQuant repository link. Added an actual OpenQuant screenshot and labeled project architecture sketches.

The website retains the user-confirmed May–July 2025 Sykes dates. The user has handled the resume correction. No apictl ownership or ISRO project role was inferred; these await clearer attribution before inclusion. The screenshot source is recorded in README.md. The mobile-app screenshot proposed above is deferred until an appropriate first-party asset is available; existing mobile projects remain in the searchable archive.
