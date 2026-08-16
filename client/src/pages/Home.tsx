import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Linkedin,
  Mail,
  Menu,
  Orbit,
  Play,
  Radio,
  Send,
  X,

} from "lucide-react";

const navItems = [
  ["About", "about"],
  ["Research", "research"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const interests = [
  {
    number: "01",
    title: "Integrative Physiology of Extreme Stress",
    description: "Pain processing, sleep deprivation, environmental stress, and physiological responses to extreme conditions.",
  },
  {
    number: "02",
    title: "Aviation & Aerospace Physiology",
    description: "Human performance, physiological adaptation, operational stress, and countermeasure development.",
  },
  {
    number: "03",
    title: "Space Life Sciences",
    description: "Human health and performance during future crewed spaceflight and long-duration exploration.",
  },
  {
    number: "04",
    title: "Cognitive Performance & Fatigue",
    description: "Sleep loss, cognitive fatigue, human performance, and the mechanisms behind operational impairment.",
  },
  {
    number: "05",
    title: "Analog Research",
    description: "Ground-based approaches for studying physiological and operational challenges in extreme environments.",
  },
  {
    number: "06",
    title: "Computational Biology & Risk Analysis",
    description: "Computational approaches to physiological research, hazard vulnerability, and human-system risk assessment.",
  },
];

const timeline = [
  {
    year: "CURRENT",
    title: "Digital Science Communicator",
    label: "SCIENCE COMMUNICATION",
    description: "Directing an educational digital media platform focused on translating complex physiological concepts, particularly longevity, nutrition, and healthy aging, into accessible, evidence-based educational content.",
  },
  {
    year: "FIELD",
    title: "Clinical Outreach Volunteer & Medical Communicator",
    label: "CLINICAL FIELD OPERATIONS",
    description: "Operating in dynamic, resource-constrained environments to support field medical missions. Assisted clinical teams in delivering foundational healthcare services and translating physiological concepts into accessible community health education.",
  },
  {
    year: "ACADEMIC",
    title: "Academic Biology Tutor",
    label: "ACADEMIC INSTRUCTION",
    description: "Instructing university students in foundational biology, breaking down complex life science and physiological concepts for introductory academic programs.",
  },
];

function SectionKicker({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-kicker">
      <span className="section-kicker__index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="arrow-link" href={href}>
      {children} <ArrowUpRight size={15} strokeWidth={1.7} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject") || "Research collaboration");
    const body = `Name: ${form.get("name") || ""}\nEmail: ${form.get("email") || ""}\n\n${form.get("message") || ""}`;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=samueloladele1415@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Samuel Oladele home">
          <span className="wordmark__mark"><Orbit size={18} strokeWidth={1.5} /></span>
          <span>S. OLADELE</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "desktop-nav--open" : ""}`} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cv" href="/research-details#cv" title="CV details page — upload the CV file later">
            CV <ArrowUpRight size={14} />
          </a>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">Toggle navigation</span>{menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        {/* Aerospace Background Container */}
        <section id="home" className="hero-section">
  {/* Restored Original Grid Background (with custom Aerospace Gold inline styles) */}
  <div className="hero-animation">
    <div className="hero-animation__circle hero-animation__circle--one" aria-hidden="true" style={{ borderColor: 'rgba(212,175,55,0.5)', borderStyle: 'dashed' }}></div>
    <div className="hero-animation__circle hero-animation__circle--two" aria-hidden="true" style={{ borderColor: 'rgba(255,255,255,0.05)' }}></div>
  </div>

  {/* Restored Layout Container */}
  <div className="hero-copy">
    <p className="eyebrow"><span className="eyebrow-dot" /> HUMAN PHYSIOLOGY / SPACE LIFE SCIENCES</p>
    
    <h1 className="hero-title">
      Samuel <br /> Oladele
    </h1>
              <p className="hero-role">Human Physiologist <span>&amp;</span><br /> Aerospace Medicine Researcher</p>
              <p className="hero-statement">Investigating extreme environmental stressors, cognitive fatigue, and human performance for the future of global spaceflight.</p>
              <div className="hero-actions">
                <a className="button button--light" href="#research">View research <ArrowDownRight size={16} /></a>
                <a className="text-action" href="#contact">Contact me <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="hero-figure">
              <div className="hero-figure__image" />
              <div className="hero-figure__caption"><span>FIG. 01</span><span>HUMAN / ENVIRONMENT / PERFORMANCE</span></div>
              <div className="hero-telemetry"><span className="telemetry-dot" /> SIGNAL: EXPLORING <span>///</span> 06.2024</div>
            </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={16} /></a>
        </section>

        <section id="about" className="about-section section-light">
          <div className="container about-layout">
            <aside className="margin-note"><span>01 — PROFILE</span><span className="vertical-rule" /><span>HUMAN PERFORMANCE</span></aside>
            <div className="about-intro"><SectionKicker index="01" >ABOUT THE RESEARCHER</SectionKicker><h2>Bridging terrestrial health <i>&amp;</i> space life sciences.</h2></div>
            <div className="about-body"><p className="lead-copy">I am a human physiologist dedicated to understanding how extreme environmental stressors impact the human body.</p><p>Holding a B.Tech degree in Human Physiology, my foundational research investigates the neurological impacts of sleep loss, with particular focus on how intermittent REM sleep deprivation influences prefrontal cortical neurotransmitter dynamics and nociception.</p><p>As an active member of the Space Generation Advisory Council (SGAC), my long-term objective is to contribute to the development of robust physiological countermeasures for future crewed spaceflight while applying these insights to improve terrestrial public health.</p></div>
            <div className="focus-strip"><div><span>01</span><strong>Human<br />Physiology</strong></div><div><span>02</span><strong>Extreme<br />Environments</strong></div><div><span>03</span><strong>Aerospace<br />Medicine</strong></div><div><span>04</span><strong>Space Life<br />Sciences</strong></div></div>
          </div>
        </section>

        <section id="research" className="research-section section-navy">
          <div className="container">
            <div className="section-heading section-heading--light"><SectionKicker index="02">SELECTED WORK</SectionKicker><h2>Academic research <i>&amp;</i><br /> analog studies.</h2><p>A developing body of work examining the relationship between physiological resilience and demanding environments.</p><a className="section-inline-link" href="/research-details">Open research archive <ArrowUpRight size={15} /></a></div>
            <div className="research-list">
              <article className="research-card"><div className="research-card__number">01</div><div className="research-card__body"><span className="card-label">COMPLETED RESEARCH / B.TECH THESIS</span><h3>Intermittent REM<br />Sleep Deprivation</h3><p className="card-subtitle">Neurological impacts of sleep loss</p><p>Investigated the effects of intermittent REM sleep deprivation on prefrontal cortical neurotransmitter dynamics and nociception in Wistar rats, providing foundational insights into central nervous system responses to sleep-related stress.</p><div className="tag-list">{["Sleep Physiology", "Neurophysiology", "Nociception", "Neurotransmitters", "Animal Models"].map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="research-card__action"><ArrowUpRight size={20} /></div><a className="research-card__detail-link" href="/research-details">Open detail <ArrowUpRight size={14} /></a></article>
              <article className="research-card research-card--proposed"><div className="research-card__number">02</div><div className="research-card__body"><span className="card-label">ONGOING DIRECTION / PROPOSED WORK</span><h3>Ground-Based<br />Analog Studies</h3><p className="card-subtitle">Operational field medicine</p><p>Developing protocols for ground-based analog studies utilizing clinical proxies in resource-constrained environments to investigate physiological responses to extreme environments, cognitive fatigue, and human performance.</p><div className="tag-list">{["Analog Research", "Extreme Environments", "Human Performance", "Cognitive Fatigue", "Operational Physiology"].map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="research-card__action"><ArrowUpRight size={20} /></div><a className="research-card__detail-link" href="/research-details">Open detail <ArrowUpRight size={14} /></a></article>
            </div>
          </div>
        </section>

        <section className="interests-section section-light">
          <div className="container"><div className="section-heading"><SectionKicker index="03">RESEARCH INTERESTS</SectionKicker><h2><a href="/research-details#interests">Questions worth<br /><i>staying with.</i></a></h2></div><div className="interest-grid">{interests.map((interest) => <article className="interest-item" key={interest.number}><span>{interest.number}</span><h3>{interest.title}</h3><p>{interest.description}</p><a className="interest-detail-link" href={`/research-details#interest-${interest.number}`}>More detail <ArrowUpRight size={14} /></a></article>)}</div></div>
        </section>

        <section id="experience" className="experience-section section-paper"><div className="container experience-layout"><div className="section-heading"><SectionKicker index="04">EXPERIENCE &amp; OUTREACH</SectionKicker><h2>Learning from<br /><i>the field.</i></h2><p>Experience across academic instruction, clinical outreach, and science communication.</p></div><div className="timeline">{timeline.map((item) => <article className="timeline-item" key={item.title}><div className="timeline-meta"><span>{item.year}</span><span className="timeline-dot" /></div><div><span className="card-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>

        <section className="trajectory-section section-blue"><div className="container"><div className="trajectory-top"><SectionKicker index="05">RESEARCH TRAJECTORY</SectionKicker><p>My research trajectory is centered on understanding how humans adapt, perform, and remain resilient under conditions that challenge normal physiological limits.</p></div><div className="trajectory-path">{["Human Physiology", "Integrative Physiology", "Extreme-Environment Research", "Aerospace Medicine", "Space Life Sciences"].map((item, index) => <a href={`/research-details#trajectory-${index + 1}`} className="trajectory-step" key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < 4 && <ArrowUpRight size={18} />}</a>)}</div></div></section>

        <section id="contact" className="contact-section section-navy"><div className="container contact-layout"><div className="contact-copy"><SectionKicker index="06">OPEN CHANNEL</SectionKicker><h2>Let's <i>connect.</i></h2><p>I am actively seeking international research collaborations and postgraduate opportunities in integrative physiology and aerospace medicine. Reach out to discuss space life sciences, analog research, human performance, or the African space economy.</p><div className="contact-links"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=samueloladele1415@gmail.com" target="_blank" rel="noreferrer"><Mail size={17} /> samueloladele1415@gmail.com <ExternalLink size={13} /></a><a href="https://www.linkedin.com/in/samuel-oladele-physiology" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a></div></div><form className="contact-form" onSubmit={handleSubmit} noValidate>{sent ? <div className="form-success"><Check size={28} /><h3>Message prepared.</h3><p>Your message details have been prepared in a new Gmail compose window for review and sending.</p><button className="button button--outline" type="button" onClick={() => setSent(false)}>Send another</button></div> : <><label htmlFor="name">Name<input id="name" name="name" required placeholder="Your name" /></label><label htmlFor="email">Email<input id="email" name="email" type="email" required placeholder="you@example.com" /></label><label htmlFor="subject">Subject<input id="subject" name="subject" required placeholder="Research collaboration" /></label><label htmlFor="message">Message<textarea id="message" name="message" required rows={4} placeholder="What would you like to discuss?" /></label><button className="button button--light button--submit" type="submit">Send message <Send size={15} /></button><p className="form-note">Opens Gmail with your message details pre-filled for review and sending.</p></>}</form></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div><a className="wordmark wordmark--footer" href="#home"><span className="wordmark__mark"><Orbit size={18} strokeWidth={1.5} /></span><span>S. OLADELE</span></a><p>Exploring human performance, physiological resilience,<br /> and the future of space life sciences.</p></div><div className="footer-nav">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}<a href="/research-details#cv">CV details</a></div><ArrowUpRight className="footer-arrow" size={32} strokeWidth={1} /></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Samuel Oladele</span><span>HUMAN PHYSIOLOGIST / AEROSPACE MEDICINE RESEARCHER</span><span>BUILT FOR THE LONG VIEW</span></div></footer>
    </div>
  );
}
