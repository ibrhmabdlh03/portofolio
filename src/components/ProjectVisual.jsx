// Ilustrasi abstrak per proyek (bukan tangkapan layar asli, jadi aman untuk proyek confidential).
const W = 640
const H = 360

function Frame({ from, to, children }) {
  const id = `g-${from.slice(1)}-${to.slice(1)}`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${id})`} />
      {children}
    </svg>
  )
}

function Sla() {
  const bars = [62, 80, 71, 92, 85, 96, 88, 99, 94, 97]
  return (
    <Frame from="#0b1a24" to="#12384f">
      <rect x="40" y="36" width="560" height="288" rx="18" fill="#fff" opacity="0.06" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${64 + i * 176} 60)`}>
          <rect width="160" height="72" rx="12" fill="#fff" opacity="0.1" />
          <rect x="16" y="16" width="60" height="8" rx="4" fill="#fff" opacity="0.5" />
          <rect x="16" y="36" width={i === 1 ? 90 : 70} height="20" rx="6" fill={i === 0 ? '#4cd471' : '#5aa9ff'} />
        </g>
      ))}
      <g transform="translate(64 156)">
        <rect width="328" height="144" rx="12" fill="#fff" opacity="0.08" />
        <polyline
          points="16,110 50,96 84,104 118,70 152,78 186,52 220,60 254,34 288,42 312,26"
          fill="none"
          stroke="#5aa9ff"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <line x1="16" y1="40" x2="312" y2="40" stroke="#4cd471" strokeDasharray="6 6" strokeWidth="2" />
      </g>
      <g transform="translate(408 156)">
        <rect width="168" height="144" rx="12" fill="#fff" opacity="0.08" />
        {bars.slice(0, 6).map((b, i) => (
          <rect key={i} x="16" y={16 + i * 21} width={(b / 100) * 136} height="12" rx="6" fill="#5aa9ff" opacity={0.5 + i * 0.08} />
        ))}
      </g>
    </Frame>
  )
}

function Erp() {
  return (
    <Frame from="#e8f5e9" to="#c8e6c9">
      <rect x="40" y="32" width="560" height="296" rx="18" fill="#fff" />
      <rect x="40" y="32" width="120" height="296" rx="18" fill="#1e5631" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="60" y={64 + i * 36} width={i === 1 ? 80 : 64} height="12" rx="6" fill="#fff" opacity={i === 1 ? 0.95 : 0.45} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${184 + i * 136} 56)`}>
          <rect width="120" height="64" rx="12" fill="#f1f8f2" />
          <rect x="14" y="14" width="50" height="8" rx="4" fill="#8bb894" />
          <rect x="14" y="34" width="74" height="16" rx="5" fill="#2e7d32" />
        </g>
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(184 ${140 + i * 36})`}>
          <rect width="392" height="28" rx="8" fill={i % 2 ? '#fff' : '#f6faf6'} />
          <circle cx="18" cy="14" r="7" fill="#a5d6a7" />
          <rect x="36" y="10" width="120" height="8" rx="4" fill="#9db3a1" />
          <rect x="220" y="10" width="60" height="8" rx="4" fill="#c5d6c8" />
          <rect x="318" y="7" width="58" height="14" rx="7" fill={i === 2 ? '#ffe0b2' : '#c8e6c9'} />
        </g>
      ))}
    </Frame>
  )
}

function Iot() {
  const nodes = [
    [140, 250],
    [250, 290],
    [370, 270],
    [490, 290],
  ]
  return (
    <Frame from="#00a86b" to="#0b6e4f">
      <path d="M0 300 Q160 250 320 290 T640 280 V360 H0Z" fill="#fff" opacity="0.12" />
      <g fill="#fff" opacity="0.95">
        <path d="M320 70c-50 0-80 30-80 64 0 4 0 8 1 12h158c1-4 1-8 1-12 0-34-30-64-80-64z" opacity="0.9" />
        <ellipse cx="270" cy="148" rx="46" ry="22" />
        <ellipse cx="372" cy="148" rx="52" ry="24" />
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2="320" y2="168" stroke="#fff" strokeWidth="2" strokeDasharray="5 7" opacity="0.7" />
          <circle cx={x} cy={y} r="18" fill="#fff" />
          <path d={`M${x} ${y + 8}v-14m0 0c-6 0-10-4-10-10 6 0 10 4 10 10zm0 0c6 0 10-4 10-10-6 0-10 4-10 10z`} stroke="#0b6e4f" strokeWidth="2.5" fill="none" />
        </g>
      ))}
    </Frame>
  )
}

function Siem() {
  return (
    <Frame from="#1b2fb8" to="#0b1a24">
      {Array.from({ length: 9 }).map((_, i) => (
        <rect
          key={i}
          x="48"
          y={44 + i * 32}
          width={180 + ((i * 97) % 220)}
          height="12"
          rx="6"
          fill={i === 4 ? '#ff6b6b' : '#fff'}
          opacity={i === 4 ? 0.9 : 0.18}
        />
      ))}
      <path d="M470 70l90 34v66c0 58-40 98-90 116-50-18-90-58-90-116v-66z" fill="#fff" opacity="0.95" />
      <path d="M432 178l26 26 52-56" stroke="#0064e0" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  )
}

function Research() {
  const cars = [
    [110, 110],
    [240, 70],
    [200, 230],
    [340, 160],
    [120, 290],
  ]
  return (
    <Frame from="#5b2be0" to="#0064e0">
      {cars.map(([x, y], i) =>
        cars.slice(i + 1).map(([x2, y2], j) => (
          <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} stroke="#fff" opacity="0.25" strokeWidth="1.5" />
        )),
      )}
      {cars.map(([x, y], i) => (
        <rect key={i} x={x - 18} y={y - 11} width="36" height="22" rx="7" fill="#fff" />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${420 + i * 0} ${70 + i * 82})`}>
          <rect width="150" height="58" rx="12" fill="#fff" opacity="0.95" />
          <rect x="16" y="16" width="70" height="8" rx="4" fill="#5b2be0" opacity="0.6" />
          <rect x="16" y="32" width="110" height="8" rx="4" fill="#0064e0" opacity="0.35" />
          {i < 2 && <line x1="75" y1="58" x2="75" y2="82" stroke="#fff" strokeWidth="4" />}
        </g>
      ))}
    </Frame>
  )
}

function Web3() {
  return (
    <Frame from="#f7b733" to="#fc4a1a">
      <g transform="translate(120 56)">
        <rect width="190" height="248" rx="16" fill="#fff" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x="24" y={36 + i * 26} width={i % 3 === 2 ? 100 : 142} height="10" rx="5" fill="#f3c9a6" />
        ))}
        <circle cx="150" cy="210" r="26" fill="#31a24c" />
        <path d="M138 210l9 9 17-18" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(380 ${76 + i * 76})`}>
          <rect width="120" height="52" rx="12" fill="#fff" opacity="0.9" />
          <text x="60" y="33" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fc4a1a" fontFamily="monospace">
            {['0x9f…a1', '0x3c…7e', '0xb2…04'][i]}
          </text>
          {i < 2 && <line x1="60" y1="52" x2="60" y2="76" stroke="#fff" strokeWidth="4" />}
        </g>
      ))}
    </Frame>
  )
}

function MathSim() {
  return (
    <Frame from="#00b4db" to="#0083b0">
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M0 ${120 + i * 50} Q160 ${90 + i * 50} 320 ${120 + i * 50} T640 ${120 + i * 50}`}
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          opacity="0.25"
        />
      ))}
      <path d="M80 280 C200 260 260 140 400 120 S560 90 600 60" stroke="#fff" strokeWidth="3" strokeDasharray="8 8" fill="none" />
      {[
        [150, 262, -12],
        [300, 168, -30],
        [450, 108, -14],
      ].map(([x, y, r], i) => (
        <path key={i} d="M-22 8 L0 -10 L22 8 Z" fill="#fff" transform={`translate(${x} ${y}) rotate(${r + 90})`} />
      ))}
    </Frame>
  )
}

const visuals = { sla: Sla, erp: Erp, iot: Iot, siem: Siem, research: Research, web3: Web3, math: MathSim }

export default function ProjectVisual({ type }) {
  const Visual = visuals[type] ?? Siem
  return <Visual />
}
