import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data'

// Topologi backbone sederhana: titik = router, garis putus-putus = trafik yang mengalir.
const nodes = [
  [90, 110],
  [250, 70],
  [420, 120],
  [160, 260],
  [330, 240],
  [470, 300],
  [110, 420],
  [280, 400],
  [440, 450],
]
const links = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 4],
  [4, 5],
  [3, 6],
  [3, 7],
  [4, 7],
  [5, 8],
  [7, 8],
  [6, 7],
]
const flows = [
  [0, 1],
  [1, 4],
  [4, 5],
  [3, 7],
  [7, 8],
]

function Topology() {
  return (
    <svg className="net" viewBox="0 0 560 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} className="link" x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
      ))}
      {flows.map(([a, b]) => (
        <line key={`f${a}-${b}`} className="flow" x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle className="node-ring" cx={x} cy={y} r="16" />
          <circle className="node" cx={x} cy={y} r="7" />
        </g>
      ))}
    </svg>
  )
}

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
          <Topology />
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
