# Samuel Oladele Portfolio — Design Direction

## Three stylistic approaches

### Theme Name: Orbital Editorial
Very light, journal-like composition with deep navy typography, muted blue annotations, and precise orbital linework. The intent is to make the site feel like a contemporary research profile from a space medicine institute.
**Probability:** 0.03

### Theme Name: Clinical Field Notes
Warm white paper tones, graphite rules, restrained data labels, and field-journal rhythm. The intent is to foreground the researcher’s thinking and method through an archival, human-centered editorial system.
**Probability:** 0.08

### Theme Name: Midnight Telemetry
A dark research-console direction using navy-black surfaces, cool telemetry lines, and sparse cyan highlights. The intent is to suggest mission control without drifting into neon or cyberpunk styling.
**Probability:** 0.02

## Selected approach: Orbital Editorial

### Design Movement
Contemporary scientific editorial design: the typographic discipline of a peer-reviewed journal, the spatial restraint of an aerospace institute, and the legibility of a university research center.

### Core Principles
1. **Evidence before ornament:** visual motifs clarify research themes rather than decorate empty space.
2. **Asymmetric intelligence:** offset columns, side annotations, and split compositions create the feeling of an active research dossier.
3. **Quiet authority:** deep navy, clinical white, cool slate, and one muted blue accent establish credibility without corporate gloss.
4. **Human performance at the center:** the interface repeatedly pairs environmental systems with human physiology.

### Color Philosophy
Clinical white is the breathing room; deep space navy is the anchor for moments of conviction; midnight blue gives structure to headings and navigation; cool slate contains metadata; muted blue marks active research threads. The palette should feel measured and trustworthy, with accent color used only where the visitor needs a cue.

### Layout Paradigm
A long-form research dossier with a sticky masthead, oversized hero statement, left-margin section indexes, and content blocks that alternate between wide narrative fields and narrower evidence columns. The page should avoid a uniform centered marketing grid.

### Signature Elements
- Fine orbital ellipses and coordinate ticks around hero and trajectory areas.
- Small uppercase research labels with blue rule marks.
- A recurring “field note” rail containing concise metadata and status cues.

### Interaction Philosophy
Interactions should feel like precise instruments: quick, quiet, and obvious. Navigation anchors scroll smoothly, cards lift by a few pixels on hover, focus states remain visible, and the contact form confirms its current state without pretending to send data.

### Animation
Use short ease-out transitions for links, cards, and menu states. Hero linework can drift almost imperceptibly; section content can reveal with a restrained opacity/translate transition where supported. Respect `prefers-reduced-motion` and never animate scientific content aggressively.

### Typography System
Use IBM Plex Sans for all interface and body text, paired with IBM Plex Serif for the researcher’s name and major editorial statements. Name: large serif with tight leading. Section headings: uppercase sans with tracking. Research titles: medium-weight serif or sans depending on hierarchy. Metadata: compact uppercase sans in slate.

### Brand Essence
An emerging human physiologist mapping a rigorous path from sleep and nociception research toward aerospace medicine and space life sciences. Personality: **precise, curious, resilient**.

### Brand Voice
Headlines are declarative and research-led. CTAs are direct and low-pressure. Microcopy explains status plainly, especially where links or form services are placeholders.

Example lines:
- “Understanding how humans remain capable when environments stop being forgiving.”
- “Follow the research direction.”

### Wordmark & Logo
A compact “SO” monogram built from two intersecting orbital arcs and a central vertical axis, paired with the text wordmark “S. Oladele” in IBM Plex Sans with wide tracking. The mark should be usable independently in the masthead and favicon.

### Signature Brand Color
**Orbital Blue — #5C7FA3**, a muted aerospace blue that signals active research without overpowering the navy-and-white foundation.

## Implementation reminders

- No invented portrait, publications, credentials, affiliations, awards, URLs, ORCID, DOI, or research outcomes.
- CV download remains an explicit placeholder for `/assets/Samuel_Oladele_CV.pdf` until a real file is supplied.
- Contact form is frontend-only and must state where Formspree, Resend, Netlify Forms, or another service can later connect.
- LinkedIn and YouTube remain placeholders; email uses a clearly marked placeholder address only if no supplied address exists.
- Do not fabricate testimonials, reviews, or ratings.
