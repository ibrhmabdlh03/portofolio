// Semua isi website ada di file ini. Ubah teks di sini, komponen tidak perlu disentuh.

export const profile = {
  name: 'Ibrahim Abdullah Azzam',
  shortName: 'Ibrahim Azzam',
  role: 'Shift Leader — TAC Core Network',
  location: 'Jakarta, Indonesia',
  email: 'ibrahimabdlh23@gmail.com',
  phone: '+62 812-4994-6129',
  phoneHref: 'tel:+6281249946129',
  whatsapp: 'https://wa.me/6281249946129',
  linkedin: 'https://www.linkedin.com/in/ibrhmabdlh',
  github: 'https://github.com/ibrhmabdlh03',
  // Isi dengan '/nama-file.pdf' (taruh di folder public/) untuk menampilkan tombol "Download CV".
  resume: '',
  summary:
    'Telecommunication Engineering graduate from ITB focused on Cyber Security, Network Engineering and Cloud Infrastructure. Experienced in defensive operations, security assurance and offensive security labs, with hands-on work in network automation, SIEM implementation and cloud technologies.',
  mission: 'I want to be beneficial to my surroundings.',
}

export const focusAreas = [
  {
    key: 'network',
    title: 'Network Engineering',
    text: 'Operating Tier-1 ISP core backbone: BGP, MPLS, OSPF and IS-IS routing policy, traffic engineering, RCA and software upgrades at scale.',
    tags: ['BGP', 'MPLS', 'IS-IS', 'OSPF', 'CCNA'],
  },
  {
    key: 'security',
    title: 'Cyber Security',
    text: 'Blue-team monitoring and incident response, SIEM tuning, system hardening, vulnerability management and SAST/DAST for applications.',
    tags: ['QRadar', 'Wazuh', 'pfSense', 'Burp Suite', 'CyberOps'],
  },
  {
    key: 'cloud',
    title: 'Cloud & Automation',
    text: 'Containers, Kubernetes/OpenShift, AWS and Huawei Cloud, plus automation and machine learning to forecast anomalies before they become outages.',
    tags: ['AWS', 'OpenShift', 'Docker', 'Python', 'Elastic'],
  },
  {
    key: 'build',
    title: 'Full-Stack Engineering',
    text: 'Designing databases, back ends and front ends that turn business processes into reliable systems, from requirements to deployment and CI/CD.',
    tags: ['Node.js', 'React', 'TypeScript', 'PHP', 'SQL'],
  },
]

export const experience = [
  {
    company: 'Lintasarta',
    companyNote: 'National ICT total-solution provider and Tier-1 ISP serving 2,400+ corporate clients.',
    role: 'Network Engineer — TAC Core (Shift Leader)',
    period: 'May 2026 — Present',
    mode: 'On-site',
    current: true,
    points: [
      'Lead a shift team responsible for the stability, routing integrity and high availability of the ISP core backbone.',
      'Drive advanced troubleshooting and Root Cause Analysis for critical core disruptions, keeping MTTR within the 4-hour target and SLA at 99%.',
      'Supervise large-scale core operations: traffic-engineering adjustments, routing policy updates (BGP, MPLS, OSPF, IS-IS) and critical software upgrades.',
    ],
  },
  {
    company: 'CIMB Niaga',
    companyNote: 'One of the largest private banks in Southeast Asia.',
    role: 'Security Assurance Intern',
    period: 'Dec 2025 — May 2026',
    mode: 'On-site',
    points: [
      'Executed system hardening and vulnerability management to identify and mitigate infrastructure security risks.',
      'Ran SAST/DAST scans on internal monitoring tools and automation scripts, securing 10+ applications before production.',
      'Analyzed and optimized security toolsets while handling both vulnerability management and process re-engineering.',
    ],
  },
  {
    company: 'Alto Network (Djarum Group)',
    companyNote: 'Fintech providing banking and payment solutions such as ATM switching and QRIS.',
    role: 'IT Automation Intern',
    period: 'Oct 2025 — Dec 2025',
    mode: 'Hybrid',
    points: [
      'Built a Proof of Concept using Metricbeat and Machine Learning to forecast system anomalies.',
      'Benchmarked algorithms against external solutions and presented technical evaluations to stakeholders.',
    ],
  },
  {
    company: 'Confidential',
    companyNote: 'Organization name withheld at the client’s request.',
    role: 'Full Stack Engineer',
    period: 'Jun 2024 — Oct 2025',
    mode: 'Remote',
    points: [
      'Developed 4 full-stack web applications from database modeling to front-end deployment, and maintained 5 existing platforms.',
      'Worked with stakeholders to streamline business processes and translate requirements into technical systems.',
      'Designed and implemented database schemas for scalable, efficient application performance.',
    ],
  },
  {
    company: 'PT Reasuransi Indonesia Utama (Persero)',
    companyNote: 'State-owned national reinsurer.',
    role: 'Security Engineer Intern (Blue Team)',
    period: 'Apr 2024 — Jun 2024',
    mode: 'On-site',
    points: [
      'Monitored SIEM alerts and performed incident response while tuning IBM QRadar policies for better detection and correlation accuracy.',
      'Benchmarked security tools with the Head of IT and senior engineers, providing data-driven input for enterprise adoption.',
      'Provided technical support for network-related security issues for 250+ users.',
    ],
  },
]

// featured: true → kartu lebar. confidential: true → tanpa tautan, tanpa nama klien, pratinjau diburamkan.
export const projects = [
  {
    title: 'SLA Dashboard',
    year: '2026',
    category: 'Network Operations · Internal tool',
    confidential: true,
    featured: true,
    visual: 'sla',
    text: 'Internal dashboard that calculates partner and backbone SLA and MTTR from closed trouble tickets, with trend charts, per-segment breakdowns and report export for operations review.',
    highlights: ['Read-only access to ticketing data', 'Directory (LDAP) sign-in', 'Containerized with automated CI/CD'],
    stack: ['React', 'Django', 'MySQL', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Benih App — Business Operations Platform',
    year: '2026',
    category: 'Full-stack · Business system',
    confidential: true,
    featured: true,
    visual: 'erp',
    text: 'End-to-end operations system for a seed company: tiered product catalog, multi-warehouse inventory, point of sale, consignment to retail stores, farmer production contracts and an integrated online store with company profile.',
    highlights: [
      'Anti-fraud controls: QR-signed documents, GPS + photo evidence, audit log',
      'Payments: cash, transfer, QRIS and payment-gateway webhooks',
      'Role-based access, daily cash closing, bilingual site with dark mode',
    ],
    stack: ['Node.js', 'Express', 'SQLite', 'EJS', 'GitHub Actions'],
  },
  {
    title: 'Growvanta',
    year: '2025',
    category: 'IoT · Cloud · Award-winning',
    featured: true,
    visual: 'iot',
    text: 'Smart IoT-enabled sustainable farming solution. Built the web monitoring platform and designed the integration architecture between IoT devices, the web interface and Huawei Cloud services.',
    highlights: ['3rd place, Asia-Pacific Huawei AI & IoT Competition 2025'],
    stack: ['IoT', 'Huawei Cloud', 'Web platform'],
  },
  {
    title: 'SIEM Integration — Wazuh & pfSense',
    year: '2024',
    category: 'Cyber Security',
    visual: 'siem',
    text: 'Integrated Wazuh SIEM with a pfSense firewall on on-premises servers to monitor and detect network threats. End-to-end setup from scratch to enable log analysis and proactive threat management.',
    stack: ['Wazuh', 'pfSense', 'Linux'],
  },
  {
    title: 'ML + Blockchain DDoS Defense for Vehicular Networks',
    year: '2025',
    category: 'Final project · Research',
    visual: 'research',
    text: 'Security framework combining Machine Learning with a simple blockchain to minimize DDoS false positives in vehicular networks (VANET).',
    stack: ['Python', 'Machine Learning', 'Blockchain'],
  },
  {
    title: 'Web3 Document Authenticity Checker',
    year: '2024',
    category: 'Blockchain',
    visual: 'web3',
    text: 'Web application prototype that uses blockchain to verify the integrity and authenticity of digital documents.',
    stack: ['Next.js', 'Ethers.js', 'Web3 wallet'],
  },
  {
    title: 'Group Maneuvering Simulation',
    year: '2023',
    category: 'Mathematical modeling',
    visual: 'math',
    text: 'Mathematical models and simulations to represent and analyze ship movements across operational scenarios.',
    stack: ['Modeling', 'Simulation'],
  },
]

export const awards = [
  { place: '3rd Place', title: 'Asia-Pacific AI & IoT Competition 2025', org: 'Huawei · Malaysia' },
  { place: '1st Place', title: 'National AI & IoT Competition 2024', org: 'Huawei · Indonesia' },
]

export const certifications = [
  {
    group: 'Network',
    items: ['CCNA — Enterprise Networking, Security & Automation', 'CCNA — Switching, Routing & Wireless Essentials'],
  },
  { group: 'Security', items: ['Cisco CyberOps Associate', 'ISC2'] },
  {
    group: 'Cloud & Administration',
    items: [
      'Red Hat System Administration I & II',
      'Red Hat OpenShift Administration I (Containers & Kubernetes)',
      'AWS Academy — Cloud Foundations',
      'AWS Academy — Architecting on AWS',
    ],
  },
  { group: 'Data Science', items: ['Kaggle — Data Analyst', 'Kaggle — Machine Learning'] },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'Bash', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Haskell'] },
  {
    group: 'Network & Security',
    items: ['BGP', 'MPLS', 'OSPF', 'IS-IS', 'IBM QRadar', 'Wazuh', 'pfSense', 'Burp Suite', 'Cisco Packet Tracer', 'eNSP'],
  },
  { group: 'Cloud & Platform', items: ['AWS', 'Huawei Cloud', 'Docker', 'OpenShift', 'Elastic', 'MySQL', 'Git'] },
  {
    group: 'Soft skills',
    items: ['Team Leadership', 'Public Speaking', 'Communication', 'Collaboration', 'Problem Solving', 'Growth Mindset'],
  },
  { group: 'Languages', items: ['Indonesian', 'English'] },
]

export const education = {
  school: 'Bandung Institute of Technology (ITB)',
  degree: 'Bachelor of Telecommunication Engineering',
  period: '2021 — 2025',
  gpa: '3.35 / 4.00',
  coursework: [
    'Cybersecurity',
    'Network Engineering',
    'Machine Learning',
    'Cloud Computing',
    'Information System Management',
    'Project Management',
    'Database Management & Modeling',
  ],
  finalProject:
    'Security framework integrating Machine Learning and a simple blockchain to minimize DDoS false positives in vehicular networks.',
}

export const organizations = [
  {
    name: 'Senate of IMT "Signum" ITB',
    role: 'Head of Research and Student Division',
    period: 'Feb 2024 — Dec 2024',
    text: 'Critically reviewed policies proposed by the ITB Student Executive Board and built alliances with student associations to strengthen the senate’s voice in campus policy.',
  },
  {
    name: 'Bengkel Radio IMT "Signum" ITB',
    role: 'Staff, Network and Security Division',
    period: 'Feb 2024 — Dec 2024',
    text: 'Structured learning modules and labs in cyber security, cloud infrastructure and network engineering, plus hands-on Web, Cloud and Security explorations.',
  },
]
