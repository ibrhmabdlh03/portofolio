// src/data.js

// Impor ikon-ikon yang Anda butuhkan
// src/data.js

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaAws } from 'react-icons/fa'; // <-- TAMBAHKAN FaAws DI SINI
import { SiCisco, SiPython, SiDocker, SiLinux, SiGit } from 'react-icons/si'; // <-- HAPUS SiAmazonaws DARI SINI

// Informasi Personal & Kontak
export const personalInfo = {
  name: "Ibrahim Abdullah Azzam", // Ganti dengan nama Anda
  title: "Telecommunication Engineering Graduate", // Ganti dengan titel Anda
  summary: "Lulusan Teknik Telekomunikasi dengan gairah pada rekayasa jaringan, infrastruktur cloud, dan keamanan siber. Berpengalaman dalam proyek akademik dan magang industri, serta memiliki keinginan kuat untuk belajar dan berkontribusi di dunia teknologi.",
  contact: {
    email: "ibrahimadblh23@gmail.com",
    phone: "+62 812 3456 7890",
    linkedin: "https://linkedin.com/in/ibrhmabdlh",
    github: "https://github.com/mansurgeming",
  },
  cv: "/IbrahimAbdullahAzzamResume.pdf" // Path ke CV Anda di folder `public`
};

// Pengalaman Kerja/Magang
export const experiences = [
  {
    role: "Network Engineer Intern",
    company: "PT Telkom Indonesia",
    period: "Juni 2024 - Agu 2024",
    description: [
      "Membantu memonitor performa jaringan menggunakan tools seperti PRTG dan Zabbix.",
      "Berpartisipasi dalam konfigurasi dasar router dan switch Cisco di bawah supervisi.",
      "Melakukan dokumentasi topologi dan perubahan konfigurasi jaringan."
    ]
  },
  // Tambahkan pengalaman lain di sini jika ada
  // {
  //   role: "Posisi Lain",
  //   company: "Perusahaan Lain",
  //   period: "Bulan Tahun - Bulan Tahun",
  //   description: ["Tugas 1", "Tugas 2"]
  // }
];

// Proyek
export const projects = [
  {
    title: "Analisis Keamanan Jaringan Server",
    description: "Mengidentifikasi celah keamanan pada server virtual lab menggunakan Nmap dan Wireshark, serta memberikan rekomendasi perbaikan.",
    tags: ["Cyber Security", "Networking", "Linux", "Nmap"],
    link: "" // Tautan ke GitHub/Demo
  },
  {
    title: "Sistem Monitoring Suhu & Kelembaban Berbasis IoT",
    description: "Membangun perangkat IoT menggunakan ESP32 dan sensor DHT11 untuk memonitor suhu secara real-time melalui dashboard online Grafana.",
    tags: ["IoT", "ESP32", "MQTT", "Grafana"],
    link: "" // Kosongkan jika tidak ada tautan
  },
  {
    title: "Deployment Aplikasi Web di AWS Cloud",
    description: "Menerapkan arsitektur cloud sederhana di AWS menggunakan EC2 untuk hosting, S3 untuk storage, dan VPC untuk isolasi jaringan.",
    tags: ["Cloud", "AWS", "EC2", "S3", "VPC"],
    link: ""
  }
];

// Keahlian Teknis
export const skills = {
  networking: ["TCP/IP", "OSPF", "BGP", "VLANs", "Subnetting", "Cisco IOS", "Mikrotik"],
  cloud: ["AWS (EC2, S3, VPC, IAM)", "Google Cloud (Compute Engine)"],
  security: ["Nmap", "Wireshark", "Metasploit", "Firewall Concepts"],
  programming_tools: ["Python", "Bash Scripting", "Git", "Docker", "Linux"]
};


// Kursus & Sertifikasi
export const courses = [
  {
    title: "CCNA: Introduction to Networks",
    institution: "Cisco Networking Academy"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services"
  },
  {
    title: "Google Cybersecurity Certificate",
    institution: "Coursera / Google"
  }
];