import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <span className="hero__badge">
            <span className="pulse" />
            Network Engineer — TAC Core at Lintasarta
          </span>
          <h1>
            Keeping networks <span className="accent">up, fast</span> and secure.
          </h1>
          <p className="hero__lead">
            I’m {profile.name}, a {profile.role.toLowerCase()} from ITB. I lead core-backbone operations for a Tier-1
            ISP and build security, cloud and software systems that businesses can rely on.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              See my work <FiArrowRight />
            </a>
            {profile.resume ? (
              <a href={profile.resume} className="btn btn--ghost" download>
                <FiDownload /> Download CV
              </a>
            ) : (
              <a href="#contact" className="btn btn--ghost">
                Get in touch
              </a>
            )}
          </div>
          <div className="hero__social">
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
            <a className="icon-btn" href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <img
            className="hero__photo"
            src="/ibrahim.webp"
            alt={`Portrait of ${profile.name}`}
            width="900"
            height="1200"
            fetchPriority="high"
          />
          <div className="float-card float-card--b">
            <small>Backbone SLA</small>
            <strong>99%</strong>
          </div>
          <div className="float-card float-card--c">
            <span className="status-dot" /> BGP · MPLS · IS-IS
          </div>
          <div className="float-card float-card--a">
            <small>MTTR target</small>
            <strong>≤ 4 hours</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
