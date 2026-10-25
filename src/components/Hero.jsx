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
            Shift Leader — TAC Core Network at Lintasarta
          </span>
          <h1>
            Ibrahim Abdullah <span className="accent">Azzam</span>
          </h1>
          <p className="hero__lead">
            Shift Leader of the TAC Core Network team at Lintasarta, leading the operations, troubleshooting and
            routing integrity of a Tier-1 ISP backbone. Telecommunication Engineering graduate from ITB with a strong
            interest in cyber security and cloud infrastructure.
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
            width="960"
            height="1200"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
