import { ArrowLeft, ArrowUpRight, Orbit } from "lucide-react";

/* Orbital Editorial: the detail page reads as a scientific field dossier—quiet, precise, and ready to grow. */
const research = [
  { number: "01", status: "COMPLETED RESEARCH / B.TECH THESIS", title: "Intermittent REM Sleep Deprivation", subtitle: "Neurological Impacts of Sleep Loss", description: "Investigated the effects of intermittent REM sleep deprivation on prefrontal cortical neurotransmitter dynamics and nociception in Wistar rats, providing foundational insights into central nervous system responses to sleep-related stress." },
  { number: "02", status: "ONGOING DIRECTION / PROPOSED WORK", title: "Ground-Based Analog Studies", subtitle: "Operational Field Medicine", description: "Developing protocols for ground-based analog studies utilizing clinical proxies in resource-constrained environments to investigate physiological responses to extreme environments, cognitive fatigue, and human performance." },
];

const interestItems = [
  ["01", "Integrative Physiology of Extreme Stress", "Pain processing, sleep deprivation, environmental stress, and physiological responses to extreme conditions."],
  ["02", "Aviation & Aerospace Physiology", "Human performance, physiological adaptation, operational stress, and countermeasure development."],
  ["03", "Space Life Sciences", "Human health and performance during future crewed spaceflight and long-duration exploration."],
  ["04", "Cognitive Performance & Fatigue", "Sleep loss, cognitive fatigue, human performance, and the mechanisms behind operational impairment."],
  ["05", "Analog Research", "Ground-based approaches for studying physiological and operational challenges associated with extreme environments."],
  ["06", "Computational Biology & Risk Analysis", "Computational approaches to physiological research, hazard vulnerability analysis, and human-system risk assessment."],
];

const trajectory = ["Human Physiology", "Integrative Physiology", "Extreme-Environment Research", "Aerospace Medicine", "Space Life Sciences"];

export default function ResearchDetails() {
  return (
    <div className="detail-page">
      <header className="detail-header">
        <a className="wordmark" href="/"><span className="wordmark__mark"><Orbit size={18} strokeWidth={1.5} /></span><span>S. OLADELE</span></a>
        <a className="detail-back" href="/"><ArrowLeft size={15} /> Back to portfolio</a>
      </header>
      <main>
        <section id="cv" className="detail-hero section-navy"><div className="container detail-hero__inner"><div><p className="eyebrow"><span className="eyebrow-dot" /> RESEARCH ARCHIVE / 01</p><h1>Research <i>details.</i></h1><p>Selected work, developing interests, and the trajectory connecting human physiology to aerospace medicine and space life sciences.</p></div><div className="detail-hero__code">S.O / ARCHIVE<br />STATUS: DEVELOPING<br />REV. 01 / 2026</div></div></section>
        <section className="detail-section section-light"><div className="container"><div className="detail-section-head"><span className="section-kicker__index">01</span><div><p className="detail-label">SELECTED WORK</p><h2>Academic research <i>&amp;</i><br />analog studies.</h2></div></div><div className="detail-research-list">{research.map((item) => <article className="detail-research-card" key={item.number}><div className="detail-number">{item.number}</div><div><p className="detail-label">{item.status}</p><h3>{item.title}</h3><p className="detail-subtitle">{item.subtitle}</p><p>{item.description}</p><a className="arrow-link" href={`#interest-${item.number}`}>Detailed information coming soon <ArrowUpRight size={15} /></a></div></article>)}</div></div></section>
        <section className="detail-section detail-section--paper section-paper" id="interests"><div className="container"><div className="detail-section-head"><span className="section-kicker__index">02</span><div><p className="detail-label">RESEARCH INTERESTS</p><h2>Questions worth<br /><i>staying with.</i></h2></div></div><div className="detail-interest-grid">{interestItems.map(([number, title, description]) => <article id={`interest-${number}`} className="detail-interest-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><a href="#future-details" className="detail-future-link">More detail later <ArrowUpRight size={14} /></a></article>)}</div></div></section>
        <section className="detail-section section-blue" id="trajectory"><div className="container"><div className="detail-section-head"><span className="section-kicker__index">03</span><div><p className="detail-label">RESEARCH TRAJECTORY</p><h2>From terrestrial<br /><i>to orbital.</i></h2></div></div><p className="detail-trajectory-intro">My research trajectory is centered on understanding how humans adapt, perform, and remain resilient under conditions that challenge normal physiological limits.</p><div className="detail-trajectory">{trajectory.map((item, index) => <div id={`trajectory-${index + 1}`} key={item} className="detail-trajectory-step"><span>0{index + 1}</span><strong>{item}</strong>{index < trajectory.length - 1 && <ArrowUpRight size={17} />}</div>)}</div></div></section>
        <section className="detail-cta section-navy" id="future-details"><div className="container"><p className="detail-label">NEXT REVISION</p><h2>This archive will grow<br /><i>with the work.</i></h2><a className="button button--light" href="https://mail.google.com/mail/?view=cm&fs=1&to=samueloladele1415@gmail.com" target="_blank" rel="noreferrer">Ask about the research <ArrowUpRight size={15} /></a></div></section>
      </main>
      <footer className="detail-footer"><div className="container"><span>© 2026 Samuel Oladele</span><span>HUMAN PHYSIOLOGIST / AEROSPACE MEDICINE RESEARCHER</span></div></footer>
    </div>
  );
}
