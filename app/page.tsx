const headshots = [
  { src: "/images/pat-famous-beige-jacket.jpg", alt: "Pat Famous in a light neutral jacket", label: "Warm · Approachable" },
  { src: "/images/pat-famous-charcoal-suit.jpg", alt: "Pat Famous in a charcoal suit", label: "Polished · Direct" },
  { src: "/images/pat-famous-tuxedo.jpg", alt: "Pat Famous in a black tuxedo", label: "Formal · Composed" },
  { src: "/images/pat-famous-navy-suit.jpg", alt: "Pat Famous in a navy suit outdoors", label: "Natural · Grounded" },
];

const gallery = [
  { src: "/images/pat-famous-zion.jpg", alt: "Pat Famous outdoors in Zion National Park", caption: "Adventure-ready" },
  { src: "/images/pat-famous-grand-canyon.jpg", alt: "Pat Famous at the Grand Canyon", caption: "Real-world presence" },
  { src: "/images/pat-famous-with-dog.jpg", alt: "Pat Famous relaxing with a dog", caption: "Easygoing energy" },
];

const sceneStudies = [
  {
    src: "/images/pat-famous-baseball-character.jpg",
    alt: "Pat Famous in a vintage Boston baseball uniform",
    genre: "Period · Sports",
    role: "The veteran ballplayer",
  },
  {
    src: "/images/pat-famous-casino-character.jpg",
    alt: "Pat Famous in a cinematic underground card-game scene",
    genre: "Crime · Noir",
    role: "The connected outsider",
  },
  {
    src: "/images/pat-famous-space-character.jpg",
    alt: "Pat Famous as an astronaut working inside a spacecraft",
    genre: "Science fiction",
    role: "The mission specialist",
    wide: true,
  },
];

const skills = [
  "Karate",
  "Stunt Dummy",
  "Karaoke Champ",
  "High Score Recipient",
  "Award for Full-Baller-Status",
  "Acoustic Guitar Hater",
  "Police Horse Whisper",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pat Famous home">
          <span className="brand-mark">PF</span><span className="brand-name">Pat Famous</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#headshots">Headshots</a><a href="#contact" className="nav-cta">Book Pat</a>
        </nav>
      </header>

      <section className="skills-marquee" aria-label={`Additional skills: ${skills.join(", ")}`}>
        <div className="skills-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="skills-set" key={copy}>
              {skills.map((skill) => <span key={`${copy}-${skill}`}><i>◆</i>{skill}</span>)}
            </div>
          ))}
        </div>
      </section>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Actor · Voice · Commercial · Background</p>
          <h1>A real face.<span>A memorable presence.</span></h1>
          <p className="hero-intro">Pat Famous is an emerging performer bringing lived-in authenticity, sharp character energy, and a ready-to-work attitude to every set, session, and story.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Start a casting conversation</a>
            <a className="button button-secondary" href="#headshots">View headshots</a>
          </div>
          <ul className="quick-facts" aria-label="Work categories"><li>On camera</li><li>Voice work</li><li>Background</li></ul>
        </div>
        <div className="hero-visual" aria-label="Portrait of Pat Famous">
          <div className="hero-frame"><img src="/images/pat-famous-hero-cowboy.jpg" alt="Pat Famous in a weathered cowboy hat and leather coat" width="1122" height="1402" /></div>
          <p className="hero-note">Available for castings &amp; collaborations</p><span className="frame-number" aria-hidden="true">01</span>
        </div>
      </section>

      <section className="ticker" aria-label="Available work"><span>Film</span><i>◆</i><span>Television</span><i>◆</i><span>Voiceover</span><i>◆</i><span>Commercial</span><i>◆</i><span>Background</span></section>

      <section className="about section" id="about">
        <div className="section-kicker"><span>02</span><p>Meet Pat</p></div>
        <div className="about-main">
          <h2>The kind of presence casting remembers.</h2>
          <div className="about-grid">
            <p>Some roles need polish. Others need a person who feels instantly believable. Pat brings both—a grounded, adaptable screen presence with the life experience to make the moment feel real.</p>
            <p>From featured background and commercial work to character parts and voice sessions, Pat is building a reel one strong opportunity at a time.</p>
          </div>
          <div className="range-grid" aria-label="Casting range">
            <article><span>01</span><h3>Grounded authority</h3><p>Foreman, coach, neighbor, first responder.</p></article>
            <article><span>02</span><h3>Everyday character</h3><p>Dad, traveler, fan, friend, local regular.</p></article>
            <article><span>03</span><h3>Polished presence</h3><p>Executive, host, spokesperson, special event.</p></article>
            <article><span>04</span><h3>Voice-ready range</h3><p>Conversational, confident, warm, and direct.</p></article>
          </div>
        </div>
      </section>

      <section className="character-study">
        <div className="character-image">
          <img src="/images/pat-famous-character-range.jpg" alt="Four character looks for Pat Famous including western, sports fan, street character, and diner regular" loading="lazy" />
        </div>
        <div className="character-copy">
          <div className="section-kicker"><span>03</span><p>Character range</p></div>
          <p className="character-quote">“Give the audience someone they already feel like they know.”</p>
          <p>Distinct looks. Believable energy. A face that can move from everyday realism to a fully drawn character without losing the person underneath.</p>
          <a className="text-link" href="#contact">Discuss a role <span>↗</span></a>
        </div>
      </section>

      <section className="scene-studies section" id="scenes">
        <div className="scene-heading">
          <div className="section-kicker"><span>04</span><p>Scene studies</p></div>
          <div>
            <h2>Put him in the story.</h2>
            <p>From period pieces to grounded crime drama and science fiction, Pat can step into a world and immediately feel like he belongs there.</p>
          </div>
        </div>
        <div className="scene-grid">
          {sceneStudies.map((scene, index) => (
            <figure key={scene.src} className={`scene-card${scene.wide ? " scene-card-wide" : ""}`}>
              <img src={scene.src} alt={scene.alt} loading="lazy" />
              <figcaption>
                <span className="scene-number">{String(index + 1).padStart(2, "0")}</span>
                <span><small>{scene.genre}</small><strong>{scene.role}</strong></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="headshots section" id="headshots">
        <div className="section-heading">
          <div className="section-kicker light"><span>05</span><p>Headshots</p></div><h2>Ready for the role.</h2><p>A versatile set of looks for casting, commercial, and character work.</p>
        </div>
        <div className="headshot-grid">
          {headshots.map((shot, index) => (
            <figure key={shot.src} className={`headshot-card headshot-${index + 1}`}>
              <img src={shot.src} alt={shot.alt} loading={index > 1 ? "lazy" : "eager"} />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="life section">
        <div className="section-kicker"><span>06</span><p>Beyond the headshot</p></div>
        <div className="life-intro"><h2>Natural in the frame.</h2><p>Relaxed, recognizable, and ready to step into the world of the story.</p></div>
        <div className="life-grid">
          {gallery.map((photo) => <figure key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption>{photo.caption}</figcaption></figure>)}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <div className="section-kicker light"><span>07</span><p>Casting inquiries</p></div><h2>Put Pat in the room.</h2>
          <p>Share the project, role, dates, and location. Pat will follow up with availability and any additional casting materials you need.</p>
          <div className="direct-contact" aria-label="Direct contact information">
            <a href="mailto:faymous1225@gmail.com"><span>Email</span><strong>faymous1225@gmail.com</strong></a>
            <a href="tel:+17606228463"><span>Phone</span><strong>760-622-8463</strong></a>
          </div>
          <div className="contact-tags" aria-label="Open to"><span>Acting</span><span>Voice</span><span>Extra work</span><span>Commercial</span></div>
        </div>
        <form className="contact-form" name="casting-inquiry" method="POST" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="casting-inquiry" />
          <p className="hidden-field"><label>Do not fill this out: <input name="bot-field" /></label></p>
          <div className="field-row">
            <label>Your name<input name="name" type="text" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label>Project type<select name="project-type" defaultValue=""><option value="" disabled>Select one</option><option>Acting / speaking role</option><option>Voice work</option><option>Commercial</option><option>Background / extra work</option><option>Other</option></select></label>
          <label>Project details<textarea name="details" rows={5} placeholder="Role, production, dates, location…" required /></label>
          <button className="button button-gold" type="submit">Send casting inquiry</button>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">PF</span><span className="brand-name">Pat Famous</span></a>
        <p>Actor · Voice · Commercial · Background</p><a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
