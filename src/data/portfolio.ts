import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

export const profile = {
  name: "Brijesh Bhatt",
  role: "Full Stack Developer",
  experience: "3 Years",
  company: "MethodHub",
  location: "Mohali, India",
  email: "brijeshbhatt5699@gmail.com",
  phone: "+91 9569599163",
  github: "https://github.com/BhattBrijesh",
  linkedin: "https://www.linkedin.com/in/brijesh-bhatt-a811a4215/",
  resume: "/BrijeshBhatt-Resume.pdf",
  tagline:
    "Building scalable full-stack applications with React, Node.js, TypeScript, MongoDB and MySQL.",
  summary:
    "MERN Stack Developer with 3 years of experience, currently at MethodHub. I architect scalable web platforms end-to-end — from snappy React/Next.js front-ends to performant Node.js APIs and well-tuned MySQL/MongoDB schemas.",
  specialties: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "MySQL"],
};

export type Skill = { name: string; icon: IconType; level: number; color: string };
export type SkillGroup = { title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: 88, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, level: 90, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, level: 95, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "#38BDF8" },
      { name: "Redux", icon: SiRedux, level: 85, color: "#764ABC" },
      { name: "React Query", icon: SiReactquery, level: 88, color: "#FF4154" },
      { name: "Material UI", icon: SiMui, level: 82, color: "#007FFF" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: 90, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 90, color: "#ffffff" },
      { name: "REST APIs", icon: SiNodedotjs, level: 92, color: "#10B981" },
      { name: "JWT Auth", icon: SiJsonwebtokens, level: 86, color: "#FB015B" },
      { name: "Firebase", icon: SiFirebase, level: 78, color: "#FFCA28" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 88, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, level: 90, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git", icon: SiGit, level: 92, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: 92, color: "#ffffff" },
      { name: "GitLab", icon: SiGitlab, level: 85, color: "#FC6D26" },
      { name: "Postman", icon: SiPostman, level: 90, color: "#FF6C37" },
      { name: "AWS", icon: FaAws, level: 72, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, level: 88, color: "#ffffff" },
    ],
  },
];

export const experiences = [
  {
    company: "MethodHub",
    role: "Full Stack Developer",
    location: "Mohali, India",
    duration: "Oct 2023 — Present",
    highlights: [
      "Built 3 production-grade full-stack portals (Consumer, Dealer, Admin) with React.js, Node.js, and MySQL — reducing dealer onboarding time by 30%.",
      "Designed and shipped 15+ MySQL stored procedures and tuned slow queries, cutting median API response time from 800ms to 200ms.",
      "Architected responsive, accessible React interfaces with measurable performance improvements on Lighthouse and Core Web Vitals.",
      "Owned multi-environment configuration (Dev / UAT / Prod) with environment-specific CORS, Helmet.js security headers, and modular service boundaries.",
      "Collaborated inside a 20-member cross-functional agile team across frontend, backend, and QA to ship features on schedule.",
    ],
  },
];

export const projects = [
  {
    name: "OnPoint Warranty",
    tagline: "Enterprise warranty platform with 4 role-based portals.",
    description:
      "Contributed to the OnPoint Warranty platform — building Consumer, Dealer, Admin, and Servicer portals on a microservices architecture. React + TypeScript on the front, Node.js + Express + MySQL on the back, with a strong focus on performance and clean role separation.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Microservices"],
    live: "https://www.onpointwarranty.com/",
    // github: "https://github.com/BhattBrijesh",
    accent: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    name: "OmAstro Solutions",
    tagline: "Real-time astrologer consultation platform.",
    description:
      "Built an astrologer marketplace where users discover, message, and consult astrologers in real time. Includes a Hindu calendar, rituals catalogue, and a content layer optimized with React Query caching. Backend powered by Express + MongoDB with structured procedures for fast lookups.",
    tech: ["React.js", "React Query", "Node.js", "Express.js", "MongoDB"],
    live: "https://www.omastrosolutions.com/",
    github: "https://github.com/BhattBrijesh",
    accent: "from-fuchsia-500/30 via-purple-500/20 to-indigo-500/30",
  },
];

export const achievements = [
  { value: 2.8, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "MySQL Stored Procedures" },
  { value: 3, suffix: "+", label: "Enterprise Portals Shipped" },
  { value: 20, suffix: "+", label: "Agile Teammates" },
];

export const whyHireMe = [
  {
    title: "Full-Stack Expertise",
    desc: "End-to-end ownership across React, Node, and SQL/NoSQL databases.",
  },
  {
    title: "Strong Problem Solver",
    desc: "Comfortable in messy production code — debugging, profiling, untangling.",
  },
  {
    title: "Performance Optimization",
    desc: "Brought API latency from 800ms down to 200ms in real production traffic.",
  },
  {
    title: "Clean Architecture",
    desc: "Modular services, typed contracts, and code reviewers actually enjoy reading.",
  },
  {
    title: "Production Experience",
    desc: "Shipped portals serving consumers, dealers, and internal admins at scale.",
  },
  {
    title: "Agile Collaboration",
    desc: "Years of shipping inside a 20-member cross-functional team on tight cycles.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
