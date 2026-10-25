import { FiCheck, FiCloud, FiCode, FiExternalLink, FiLock, FiMail, FiPhone, FiShield } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaTrophy, FaWhatsapp } from 'react-icons/fa'
import { TbAward, TbNetwork } from 'react-icons/tb'
import {
  awards,
  certifications,
  education,
  experience,
  focusAreas,
  organizations,
  profile,
  projects,
  skills,
} from '../data'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'

const focusIcons = { network: TbNetwork, security: FiShield, cloud: FiCloud, build: FiCode }

function SectionHead({ eyebrow, title, children }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  )
}

export function About() {
  return (
    <section className="section section--soft" id="about">
      <div className="container">
        <SectionHead eyebrow="What I do" title="Connecting people, and keeping those connections safe.">
          {profile.summary} {profile.mission}
        </SectionHead>
        <div className="focus-grid">
          {focusAreas.map((f) => {
            const Icon = focusIcons[f.key]
            return (
              <Reveal className="focus-card" key={f.key}>
                <span className="focus-card__icon">
                  <Icon />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <div className="tags">
                  {f.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead eyebrow="Experience" title="From blue team to the ISP backbone.">
          Banking, fintech, reinsurance and a Tier-1 ISP: each role sharpened how I secure, automate and operate
          critical infrastructure.
        </SectionHead>
        <div className="timeline">
          {experience.map((job) => (
            <Reveal className="job" key={job.company + job.role}>
              <div className="job__meta">
                <div className="period">{job.period}</div>
                <div className="mode">{job.mode}</div>
                {job.current && (
                  <span className="job__now">
                    <span className="status-dot" /> Current role
                  </span>
                )}
              </div>
              <div>
                <div className="job__company">{job.company}</div>
                <h3>{job.role}</h3>
                <p className="job__note">{job.companyNote}</p>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const { confidential, featured } = project
  return (
    <Reveal as="article" className={`project${featured ? ' project--featured' : ''}`}>
      <div className={`project__visual${confidential ? ' is-confidential' : ''}`}>
        <ProjectVisual type={project.visual} />
        {confidential && (
          <div className="lock-badge">
            <span>
              <FiLock /> Confidential project
            </span>
          </div>
        )}
      </div>
      <div className="project__body">
        <div className="project__top">
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.category}</span>
          {confidential && (
            <span className="tag-confidential">
              <FiLock size={12} /> Confidential
            </span>
          )}
        </div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        {project.highlights && (
          <ul className="project__highlights">
            {project.highlights.map((h) => (
              <li key={h}>
                <FiCheck />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="project__foot">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        {confidential ? (
          <span className="project__note">
            <FiLock size={14} /> Private repository. Source and screenshots withheld; walkthrough available on request.
          </span>
        ) : (
          project.link && (
            <a className="project__note" href={project.link} target="_blank" rel="noreferrer">
              View project <FiExternalLink size={14} />
            </a>
          )
        )}
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section className="section section--soft" id="projects">
      <div className="container">
        <SectionHead eyebrow="Selected work" title="Projects built for real operations.">
          Internal tools for network operations, systems that run a business day to day, and award-winning research.
          Confidential work is described without client data or source code.
        </SectionHead>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Recognition() {
  return (
    <section className="section" id="recognition">
      <div className="container">
        <SectionHead eyebrow="Recognition" title="Awards and certifications.">
          Competing regionally with Huawei, and certified across networking, security, Linux and cloud.
        </SectionHead>
        <div className="awards">
          {awards.map((a) => (
            <Reveal className="award" key={a.title}>
              <FaTrophy className="award__icon" />
              <strong>{a.place}</strong>
              <h3>{a.title}</h3>
              <span>{a.org}</span>
            </Reveal>
          ))}
        </div>
        <div className="cert-grid">
          {certifications.map((c) => (
            <Reveal className="cert" key={c.group}>
              <h4>
                <TbAward style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} />
                {c.group}
              </h4>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkillsEducation() {
  return (
    <section className="section section--soft" id="skills">
      <div className="container">
        <SectionHead eyebrow="Skills & education" title="The toolkit behind the work." />
        <div className="split">
          <Reveal className="panel">
            <h3>Skills</h3>
            {skills.map((g) => (
              <div key={g.group}>
                <h4 className="edu__label">{g.group}</h4>
                <div className="tags">
                  {g.items.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <div style={{ display: 'grid', gap: 24 }}>
            <Reveal className="panel">
              <h3>{education.school}</h3>
              <p className="edu__school">{education.degree}</p>
              <div className="edu__facts">
                <div>
                  <small>Period</small>
                  <strong>{education.period}</strong>
                </div>
                <div>
                  <small>GPA</small>
                  <strong>{education.gpa}</strong>
                </div>
              </div>
              <p className="edu__label">Final project</p>
              <p style={{ color: 'var(--ink-2)' }}>{education.finalProject}</p>
              <p className="edu__label">Relevant coursework</p>
              <div className="tags">
                {education.coursework.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal className="panel">
              <h3>Organizations</h3>
              <div style={{ marginTop: 16 }}>
                {organizations.map((o) => (
                  <div className="org" key={o.name}>
                    <h4>{o.name}</h4>
                    <div className="org__role">
                      {o.role} · {o.period}
                    </div>
                    <p>{o.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const items = [
    { href: `mailto:${profile.email}`, icon: FiMail, label: profile.email },
    { href: profile.phoneHref, icon: FiPhone, label: profile.phone },
    { href: profile.whatsapp, icon: FaWhatsapp, label: 'Chat on WhatsApp', external: true },
    { href: profile.linkedin, icon: FaLinkedinIn, label: 'LinkedIn', external: true },
    { href: profile.github, icon: FaGithub, label: 'GitHub', external: true },
  ]
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact">
          <div>
            <h2>Let’s build something reliable together.</h2>
            <p>
              Open to conversations about network engineering, security and infrastructure roles, collaborations and
              projects. Based in {profile.location}.
            </p>
          </div>
          <div className="contact__list">
            {items.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                className="contact__item"
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon /> {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
