import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, useScroll, AnimatePresence } from "framer-motion";
import { FiCommand, FiX, FiMenu, FiDownload, FiMail, FiArrowDown, FiCode, FiLayers, FiServer, FiDatabase, FiZap, FiUsers, FiBriefcase, FiMapPin, FiCheckCircle, FiArrowUpRight, FiExternalLink, FiGithub, FiCheck, FiPhone, FiLinkedin, FiSend, FiCopy, FiArrowUp, FiFolder, FiUser } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiReactquery, SiMui, SiNodedotjs, SiExpress, SiJsonwebtokens, SiFirebase, SiMongodb, SiMysql, SiGit, SiGithub, SiGitlab, SiPostman, SiVercel } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Lenis from "lenis";
import { Command } from "cmdk";
const profile = {
  name: "Brijesh Bhatt",
  experience: "3 Years",
  company: "MethodHub",
  location: "Mohali, India",
  email: "brijeshbhatt5699@gmail.com",
  phone: "+91 9569599163",
  github: "https://github.com/BhattBrijesh",
  linkedin: "https://www.linkedin.com/in/brijesh-bhatt-a811a4215/",
  summary: "MERN Stack Developer with 3 years of experience, currently at MethodHub. I architect scalable web platforms end-to-end — from snappy React/Next.js front-ends to performant Node.js APIs and well-tuned MySQL/MongoDB schemas.",
  specialties: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "MySQL"]
};
const skillGroups = [
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
      { name: "Material UI", icon: SiMui, level: 82, color: "#007FFF" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: 90, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 90, color: "#ffffff" },
      { name: "REST APIs", icon: SiNodedotjs, level: 92, color: "#10B981" },
      { name: "JWT Auth", icon: SiJsonwebtokens, level: 86, color: "#FB015B" },
      { name: "Firebase", icon: SiFirebase, level: 78, color: "#FFCA28" }
    ]
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 88, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, level: 90, color: "#4479A1" }
    ]
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git", icon: SiGit, level: 92, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: 92, color: "#ffffff" },
      { name: "GitLab", icon: SiGitlab, level: 85, color: "#FC6D26" },
      { name: "Postman", icon: SiPostman, level: 90, color: "#FF6C37" },
      { name: "AWS", icon: FaAws, level: 72, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, level: 88, color: "#ffffff" }
    ]
  }
];
const experiences = [
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
      "Collaborated inside a 20-member cross-functional agile team across frontend, backend, and QA to ship features on schedule."
    ]
  }
];
const projects = [
  {
    name: "OnPoint Warranty",
    tagline: "Enterprise warranty platform with 4 role-based portals.",
    description: "Contributed to the OnPoint Warranty platform — building Consumer, Dealer, Admin, and Servicer portals on a microservices architecture. React + TypeScript on the front, Node.js + Express + MySQL on the back, with a strong focus on performance and clean role separation.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Microservices"],
    live: "https://www.onpointwarranty.com/",
    // github: "https://github.com/BhattBrijesh",
    accent: "from-sky-500/30 via-blue-500/20 to-indigo-500/30"
  },
  {
    name: "OmAstro Solutions",
    tagline: "Real-time astrologer consultation platform.",
    description: "Built an astrologer marketplace where users discover, message, and consult astrologers in real time. Includes a Hindu calendar, rituals catalogue, and a content layer optimized with React Query caching. Backend powered by Express + MongoDB with structured procedures for fast lookups.",
    tech: ["React.js", "React Query", "Node.js", "Express.js", "MongoDB"],
    live: "https://www.omastrosolutions.com/",
    github: "https://github.com/BhattBrijesh",
    accent: "from-fuchsia-500/30 via-purple-500/20 to-indigo-500/30"
  }
];
const achievements = [
  { value: 2.8, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "MySQL Stored Procedures" },
  { value: 3, suffix: "+", label: "Enterprise Portals Shipped" },
  { value: 20, suffix: "+", label: "Agile Teammates" }
];
const whyHireMe = [
  {
    title: "Full-Stack Expertise",
    desc: "End-to-end ownership across React, Node, and SQL/NoSQL databases."
  },
  {
    title: "Strong Problem Solver",
    desc: "Comfortable in messy production code — debugging, profiling, untangling."
  },
  {
    title: "Performance Optimization",
    desc: "Brought API latency from 800ms down to 200ms in real production traffic."
  },
  {
    title: "Clean Architecture",
    desc: "Modular services, typed contracts, and code reviewers actually enjoy reading."
  },
  {
    title: "Production Experience",
    desc: "Shipped portals serving consumers, dealers, and internal admins at scale."
  },
  {
    title: "Agile Collaboration",
    desc: "Years of shipping inside a 20-member cross-functional team on tight cycles."
  }
];
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      className: `fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${scrolled ? "glass-strong" : "glass"}`, children: [
          /* @__PURE__ */ jsxs("a", { href: "#", className: "group flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-electric to-purple-accent font-display text-sm font-bold text-white", children: "BB" }),
            /* @__PURE__ */ jsxs("span", { className: "hidden font-display text-sm font-semibold tracking-tight sm:block", children: [
              profile.name.split(" ")[0],
              /* @__PURE__ */ jsx("span", { className: "text-electric", children: "." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 md:flex", children: navLinks.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  const ev = new KeyboardEvent("keydown", { key: "k", metaKey: true });
                  document.dispatchEvent(ev);
                },
                className: "hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground transition hover:text-foreground sm:flex",
                "aria-label": "Open command menu",
                children: [
                  /* @__PURE__ */ jsx(FiCommand, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ jsx("span", { children: "⌘K" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "md:hidden",
                onClick: () => setOpen((o) => !o),
                "aria-label": "Toggle menu",
                children: open ? /* @__PURE__ */ jsx(FiX, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(FiMenu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            className: "glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden",
            children: navLinks.map((l) => /* @__PURE__ */ jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
                children: l.label
              },
              l.href
            ))
          }
        )
      ] })
    }
  );
}
function HeroScene() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotX = useTransform(sy, [-1, 1], [12, -12]);
  const rotY = useTransform(sx, [-1, 1], [-15, 15]);
  const blobX = useTransform(sx, [-1, 1], [-40, 40]);
  const blobY = useTransform(sy, [-1, 1], [-40, 40]);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      mx.set(x * 2 - 1);
      my.set(y * 2 - 1);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);
  const badges = [
    { label: "React", x: "8%", y: "12%", delay: 0 },
    { label: "Node.js", x: "78%", y: "8%", delay: 0.15 },
    { label: "TypeScript", x: "82%", y: "70%", delay: 0.3 },
    { label: "MongoDB", x: "4%", y: "62%", delay: 0.45 },
    { label: "MySQL", x: "46%", y: "88%", delay: 0.6 },
    { label: "Next.js", x: "60%", y: "4%", delay: 0.75 }
  ];
  return /* @__PURE__ */ jsxs("div", { ref, className: "relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0f24] via-[#0b1230] to-[#120a2a]", style: { perspective: 1200 }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-70", children: Array.from({ length: 60 }).map((_, i) => /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "absolute rounded-full bg-white",
        style: {
          top: `${i * 53 % 100}%`,
          left: `${i * 97 % 100}%`,
          width: i % 7 === 0 ? 2 : 1,
          height: i % 7 === 0 ? 2 : 1
        },
        animate: { opacity: [0.2, 1, 0.2] },
        transition: { duration: 2 + i % 5, repeat: Infinity, delay: i % 10 * 0.2 }
      },
      i
    )) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.12]",
        style: {
          backgroundImage: "linear-gradient(rgba(124,140,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,140,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { x: blobX, y: blobY },
        className: "pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-electric/40 via-purple-accent/30 to-electric/20 blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        style: { rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" },
        className: "absolute inset-0 flex items-center justify-center",
        children: [
          [180, 260, 340].map((size, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "absolute rounded-full border border-white/15",
              style: { width: size, height: size },
              animate: { rotate: i % 2 === 0 ? 360 : -360 },
              transition: { duration: 18 + i * 6, repeat: Infinity, ease: "linear" },
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "absolute h-3 w-3 rounded-full bg-electric shadow-[0_0_20px_4px_rgba(124,140,255,0.7)]",
                    style: { top: -6, left: "50%", transform: "translateX(-50%)" }
                  }
                ),
                i === 1 && /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "absolute h-2 w-2 rounded-full bg-purple-accent shadow-[0_0_16px_4px_rgba(168,85,247,0.7)]",
                    style: { bottom: -4, left: "50%", transform: "translateX(-50%)" }
                  }
                )
              ]
            },
            size
          )),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-[#0b1230]/80 backdrop-blur-xl",
              animate: { scale: [1, 1.05, 1] },
              transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-tr from-electric/40 to-purple-accent/40 opacity-60 blur-xl" }),
                /* @__PURE__ */ jsx("span", { className: "relative font-display text-3xl font-bold text-gradient", children: "BB" })
              ]
            }
          )
        ]
      }
    ),
    badges.map((b) => /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute select-none rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md",
        style: { left: b.x, top: b.y },
        initial: { opacity: 0, y: 10, scale: 0.8 },
        animate: {
          opacity: 1,
          scale: 1,
          y: [0, -8, 0]
        },
        transition: {
          opacity: { duration: 0.6, delay: b.delay },
          scale: { duration: 0.6, delay: b.delay },
          y: { duration: 4 + b.delay * 2, repeat: Infinity, ease: "easeInOut", delay: b.delay }
        },
        whileHover: { scale: 1.15, borderColor: "rgba(124,140,255,0.6)" },
        children: b.label
      },
      b.label
    )),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-electric/60" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-purple-accent/60" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-purple-accent/60" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-electric/60" })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function MagneticButton({ variant = "primary", children, className, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxs(
    motion.a,
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: { x: sx, y: sy },
      className: cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium transition-colors",
        variant === "primary" ? "bg-gradient-to-r from-electric to-purple-accent text-white shadow-lg shadow-electric/30 hover:shadow-electric/50" : "glass text-foreground hover:bg-white/5",
        className
      ),
      ...rest,
      children: [
        /* @__PURE__ */ jsx("span", { className: "relative z-10 flex items-center gap-2", children }),
        variant === "primary" && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" })
      ]
    }
  );
}
function TypingText({
  words,
  className = "",
  speed = 80,
  pause = 1600
}) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[idx % words.length];
    if (!del && sub === w) {
      const t2 = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t2);
    }
    if (del && sub === "") {
      setDel(false);
      setIdx((i) => i + 1);
      return;
    }
    const t = setTimeout(() => {
      setSub(del ? w.slice(0, sub.length - 1) : w.slice(0, sub.length + 1));
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [sub, del, idx, words, speed, pause]);
  return /* @__PURE__ */ jsxs("span", { className, children: [
    sub,
    /* @__PURE__ */ jsx("span", { className: "ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-electric" })
  ] });
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative flex min-h-screen items-center overflow-hidden pt-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid mask-fade-b opacity-30", "aria-hidden": true }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-electric/20 blur-[120px] animate-blob", "aria-hidden": true }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-purple-accent/20 blur-[120px] animate-blob", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center", children: [
      /* @__PURE__ */ jsxs(motion.div, { variants: stagger, initial: "hidden", animate: "show", children: [
        /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })
          ] }),
          "Available for opportunities · ",
          profile.location
        ] }),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            variants: item,
            className: "font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
            children: [
              "Hi, I'm",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Brijesh Bhatt" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-foreground/90", children: "a " }),
              /* @__PURE__ */ jsx(
                TypingText,
                {
                  words: ["Full Stack Developer", "MERN Engineer", "Performance Tuner", "API Architect"],
                  className: "text-gradient"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(motion.p, { variants: item, className: "mt-6 max-w-xl text-base text-muted-foreground sm:text-lg", children: [
          profile.experience,
          " of experience building scalable web applications. Currently at",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: profile.company }),
          " shipping production portals in React, Node, and MySQL."
        ] }),
        /* @__PURE__ */ jsx(motion.div, { variants: item, className: "mt-6 flex flex-wrap gap-2", children: profile.specialties.map((s) => /* @__PURE__ */ jsx("span", { className: "glass rounded-full px-3 py-1 text-xs text-muted-foreground", children: s }, s)) }),
        /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            MagneticButton,
            {
              href: "/BrijeshBhatt-Resume.pdf",
              download: true,
              variant: "primary",
              children: [
                /* @__PURE__ */ jsx(FiDownload, {}),
                " Download Resume"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(MagneticButton, { href: "#contact", variant: "ghost", children: [
            /* @__PURE__ */ jsx(FiMail, {}),
            " Contact Me"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "mt-12 flex items-center gap-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx(FiArrowDown, { className: "animate-bounce" }),
          "Scroll to explore"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, delay: 0.4 },
          className: "relative h-[420px] w-full lg:h-[560px]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-3xl", children: /* @__PURE__ */ jsx(HeroScene, {}) }),
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-electric/10 via-transparent to-purple-accent/10" })
          ]
        }
      )
    ] })
  ] });
}
function SectionHeading({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-16 max-w-2xl text-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        className: "glass mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-electric",
        children: [
          /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-electric" }),
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { delay: 0.05 },
        className: "font-display text-4xl font-bold tracking-tight sm:text-5xl",
        children: title
      }
    ),
    description && /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { delay: 0.1 },
        className: "mt-4 text-base text-muted-foreground",
        children: description
      }
    )
  ] });
}
const pillars = [
  { icon: FiCode, title: "Full-Stack Engineering", desc: "React/Next on the front, Node/Express on the back — typed end-to-end." },
  { icon: FiLayers, title: "MERN Stack", desc: "Years building consumer products on MongoDB, Express, React, Node." },
  { icon: FiServer, title: "REST APIs", desc: "Pragmatic, well-versioned APIs with predictable error contracts." },
  { icon: FiDatabase, title: "Database Design", desc: "Schema-first thinking on MySQL and MongoDB, with stored procedures where it counts." },
  { icon: FiZap, title: "Performance", desc: "Cut a real production API from 800ms to 200ms — and kept it there." },
  { icon: FiUsers, title: "Agile Collaboration", desc: "Shipping inside a 20-member cross-functional team across FE/BE/QA." }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "About",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "The developer ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "behind the code" })
        ] }),
        description: profile.summary
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: pillars.map((p, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        whileHover: { y: -6 },
        className: "group gradient-border relative p-6",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-purple-accent/20 text-electric ring-1 ring-white/10", children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc }),
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-[inherit] bg-gradient-to-br from-electric/5 to-purple-accent/5" }) })
        ]
      },
      p.title
    )) })
  ] }) });
}
function Skills() {
  return /* @__PURE__ */ jsxs("section", { id: "skills", className: "relative py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-dot opacity-30", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "Skills",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Tools I ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "ship with" })
          ] }),
          description: "A pragmatic, production-tested stack honed across enterprise portals."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:grid-cols-2", children: skillGroups.map((group, gi) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { delay: gi * 0.08, duration: 0.6 },
          className: "glass rounded-2xl p-6",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: group.title }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
                group.items.length,
                " tools"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: group.items.map((s, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: gi * 0.08 + i * 0.04 },
                whileHover: { scale: 1.02 },
                className: "group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-electric/30",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "grid h-9 w-9 place-items-center rounded-lg bg-white/5 transition-transform group-hover:scale-110",
                          style: { color: s.color },
                          children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" })
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: s.name })
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "text-[10px] tabular-nums text-muted-foreground", children: [
                      s.level,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-3 h-1 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      whileInView: { width: `${s.level}%` },
                      viewport: { once: true },
                      transition: { duration: 1.2, delay: 0.2 + i * 0.03, ease: [0.16, 1, 0.3, 1] },
                      className: "h-full rounded-full bg-gradient-to-r from-electric to-purple-accent"
                    }
                  ) })
                ]
              },
              s.name
            )) })
          ]
        },
        group.title
      )) })
    ] })
  ] });
}
function Experience() {
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Experience",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Where I've ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "shipped" })
        ] }),
        description: "Real production work — measurable wins, not just titles."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-electric via-purple-accent to-transparent md:left-1/2" }),
      experiences.map((e, i) => /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          className: "relative mb-10 grid grid-cols-1 gap-6 pl-12 md:grid-cols-2 md:pl-0",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-electric ring-4 ring-electric/20 md:left-1/2" }),
            /* @__PURE__ */ jsxs("div", { className: `md:text-right ${i % 2 === 0 ? "" : "md:order-2 md:text-left"}`, children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-semibold", children: e.company }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-electric", children: e.role }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground md:justify-end", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(FiBriefcase, { className: "h-3.5 w-3.5" }),
                  " ",
                  e.duration
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(FiMapPin, { className: "h-3.5 w-3.5" }),
                  " ",
                  e.location
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: `gradient-border p-6 ${i % 2 === 0 ? "" : "md:order-1"}`, children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: e.highlights.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(FiCheckCircle, { className: "mt-0.5 h-4 w-4 shrink-0 text-electric" }),
              /* @__PURE__ */ jsx("span", { className: "leading-relaxed", children: h })
            ] }, h)) }) })
          ]
        },
        e.company
      ))
    ] })
  ] }) });
}
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Selected Work",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Things I've ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "built" })
        ] }),
        description: "A glimpse at production systems I've helped design, ship, and tune."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 lg:grid-cols-2", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        whileHover: { y: -8 },
        className: "group relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-shadow hover:shadow-2xl hover:shadow-electric/20",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute inset-0 bg-gradient-to-br ${p.accent} opacity-40 transition-opacity duration-500 group-hover:opacity-70`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-10" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0f1f] to-[#1a1030]", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-full items-center justify-center", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { rotate: [0, 6, -6, 0] },
                  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                  className: "font-display text-7xl font-bold text-gradient opacity-30",
                  children: p.name.split(" ").map((w) => w[0]).join("")
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-black/50 p-3 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/70" }),
                /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/70" }),
                /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-400/70" }),
                /* @__PURE__ */ jsxs("span", { className: "ml-2 truncate text-[10px] text-muted-foreground", children: [
                  p.name.toLowerCase().replace(/\s+/g, "-"),
                  ".app"
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-semibold", children: p.name }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-electric", children: p.tagline })
              ] }),
              /* @__PURE__ */ jsx(FiArrowUpRight, { className: "h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: p.description }),
            /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.tech.map((t) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground",
                children: t
              },
              t
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: p.live,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-purple-accent px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105",
                  children: [
                    /* @__PURE__ */ jsx(FiExternalLink, { className: "h-3.5 w-3.5" }),
                    " Live demo"
                  ]
                }
              ),
              p.github && /* @__PURE__ */ jsxs(
                "a",
                {
                  href: p.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-foreground transition-colors hover:bg-white/10",
                  children: [
                    /* @__PURE__ */ jsx(FiGithub, { className: "h-3.5 w-3.5" }),
                    " Source"
                  ]
                }
              )
            ] })
          ] })
        ]
      },
      p.name
    )) })
  ] }) });
}
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) => {
    const isInt = Number.isInteger(value);
    return isInt ? Math.round(v).toString() : v.toFixed(1);
  });
  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);
  return /* @__PURE__ */ jsxs("span", { ref, className: "font-display text-5xl font-bold text-gradient sm:text-6xl", children: [
    /* @__PURE__ */ jsx(motion.span, { children: display }),
    suffix
  ] });
}
function Achievements() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "gradient-border relative overflow-hidden p-8 sm:p-12", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-20" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -left-20 top-0 h-60 w-60 rounded-full bg-electric/20 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-purple-accent/20 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "relative grid grid-cols-2 gap-8 lg:grid-cols-4", children: achievements.map((a, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1, duration: 0.6 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(Counter, { value: a.value, suffix: a.suffix }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm", children: a.label })
        ]
      },
      a.label
    )) })
  ] }) }) });
}
function WhyHireMe() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Why Hire Me",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "The case for ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "working together" })
        ] }),
        description: "What I bring to a team beyond just code commits."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: whyHireMe.map((w, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { delay: i * 0.06, duration: 0.6 },
        whileHover: { y: -4 },
        className: "glass relative overflow-hidden rounded-2xl p-6",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple-accent text-white shadow-lg shadow-electric/40", children: /* @__PURE__ */ jsx(FiCheck, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: w.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: w.desc })
        ]
      },
      w.title
    )) })
  ] }) });
}
function CopyRow({ icon: Icon, label, value, href }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "glass group flex items-center gap-4 rounded-2xl p-4", children: [
    /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric/20 to-purple-accent/20 text-electric ring-1 ring-white/10", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxs("a", { href, className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("div", { className: "truncate text-sm font-medium transition-colors group-hover:text-electric", children: value })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: copy,
        className: "rounded-lg border border-white/10 bg-white/5 p-2 text-muted-foreground transition hover:text-electric",
        "aria-label": `Copy ${label}`,
        children: copied ? /* @__PURE__ */ jsx(FiCheck, { className: "h-4 w-4 text-emerald-400" }) : /* @__PURE__ */ jsx(FiCopy, { className: "h-4 w-4" })
      }
    )
  ] });
}
function Contact() {
  const [status, setStatus] = useState("idle");
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(`${fd.get("message")}

— ${fd.get("name")} (${fd.get("email")})`);
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 600);
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 mx-auto h-80 max-w-3xl bg-electric/20 opacity-30 blur-[120px]", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "Contact",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Let's ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "build something" })
          ] }),
          description: "Open to full-time roles, contracts, and interesting collaborations."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-[0.9fr_1.1fr]", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx(CopyRow, { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` }),
          /* @__PURE__ */ jsx(CopyRow, { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }),
          /* @__PURE__ */ jsx(CopyRow, { icon: FiGithub, label: "GitHub", value: "github.com/BhattBrijesh", href: profile.github }),
          /* @__PURE__ */ jsx(CopyRow, { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/brijesh-bhatt-a811a4215", href: profile.linkedin })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.form,
          {
            onSubmit,
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "gradient-border space-y-4 p-6",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxs("label", { className: "block", children: [
                  /* @__PURE__ */ jsx("span", { className: "mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      name: "name",
                      required: true,
                      placeholder: "Jane Doe",
                      className: "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-electric/60 focus:bg-white/[0.05]"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("label", { className: "block", children: [
                  /* @__PURE__ */ jsx("span", { className: "mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      required: true,
                      placeholder: "jane@company.com",
                      className: "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-electric/60 focus:bg-white/[0.05]"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsx("span", { className: "mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "message",
                    required: true,
                    rows: 6,
                    placeholder: "Tell me about your project, role, or idea…",
                    className: "w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-electric/60 focus:bg-white/[0.05]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  type: "submit",
                  disabled: status === "sending",
                  className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-purple-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-electric/30 transition disabled:opacity-60 sm:w-auto",
                  children: [
                    /* @__PURE__ */ jsx(FiSend, { className: "h-4 w-4" }),
                    status === "sending" ? "Sending…" : status === "sent" ? "Opening email…" : "Send message"
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-white/5 py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      profile.name,
      ". Crafted with care in ",
      profile.location,
      "."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: profile.github,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "GitHub",
          className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-electric/40 hover:text-electric",
          children: /* @__PURE__ */ jsx(FiGithub, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: profile.linkedin,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "LinkedIn",
          className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-electric/40 hover:text-electric",
          children: /* @__PURE__ */ jsx(FiLinkedin, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `mailto:${profile.email}`,
          "aria-label": "Email",
          className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-electric/40 hover:text-electric",
          children: /* @__PURE__ */ jsx(FiMail, { className: "h-4 w-4" })
        }
      )
    ] })
  ] }) });
}
function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let raf = 0;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { scaleX },
      className: "fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-electric via-purple-accent to-electric"
    }
  );
}
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const t = e.target;
      setHovering(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { x: sx, y: sy },
        className: "pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2 mix-blend-difference",
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { scale: hovering ? 2.2 : 1 },
            transition: { type: "spring", stiffness: 300, damping: 25 },
            className: "h-3 w-3 rounded-full bg-white"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { x, y },
        className: "pointer-events-none fixed left-0 top-0 z-[199] -translate-x-1/2 -translate-y-1/2",
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { scale: hovering ? 1.4 : 1, opacity: hovering ? 0.4 : 0.6 },
            className: "h-10 w-10 rounded-full border border-electric/40"
          }
        )
      }
    )
  ] });
}
function MouseGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { x: sx, y: sy },
      className: "pointer-events-none fixed left-0 top-0 z-[1] -translate-x-1/2 -translate-y-1/2",
      "aria-hidden": true,
      children: /* @__PURE__ */ jsx("div", { className: "h-[480px] w-[480px] rounded-full bg-electric/15 blur-[120px]" })
    }
  );
}
function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, y: "-100%" },
      transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
      className: "fixed inset-0 z-[300] flex items-center justify-center bg-[#030712]",
      children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scale: 0.6, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.5 },
            className: "font-display text-5xl font-bold text-gradient sm:text-7xl",
            children: "BB"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: "100%" },
            transition: { duration: 1, ease: "easeInOut" },
            className: "mt-4 h-[2px] bg-gradient-to-r from-electric to-purple-accent"
          }
        )
      ] })
    }
  ) });
}
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.6, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.6, y: 20 },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.92 },
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      className: "glass-strong glow-electric fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full text-electric",
      "aria-label": "Back to top",
      children: /* @__PURE__ */ jsx(FiArrowUp, { className: "h-5 w-5" })
    }
  ) });
}
function CommandMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const go = (href) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };
  const sectionIcons = {
    About: FiUser,
    Skills: FiCode,
    Experience: FiBriefcase,
    Projects: FiFolder,
    Contact: FiMail
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[250] flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm",
      onClick: () => setOpen(false),
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { y: -20, opacity: 0, scale: 0.96 },
          animate: { y: 0, opacity: 1, scale: 1 },
          exit: { y: -10, opacity: 0, scale: 0.97 },
          transition: { duration: 0.2 },
          onClick: (e) => e.stopPropagation(),
          className: "glass-strong w-[90vw] max-w-xl overflow-hidden rounded-2xl shadow-2xl",
          children: /* @__PURE__ */ jsxs(Command, { label: "Command Menu", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-white/10 px-4", children: [
              /* @__PURE__ */ jsx(FiCommand, { className: "h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsx(
                Command.Input,
                {
                  placeholder: "Type a command or search…",
                  className: "h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Command.List, { className: "max-h-[360px] overflow-y-auto p-2", children: [
              /* @__PURE__ */ jsx(Command.Empty, { className: "p-6 text-center text-sm text-muted-foreground", children: "No results found." }),
              /* @__PURE__ */ jsx(Command.Group, { heading: "Navigate", className: "px-2 py-1 text-xs text-muted-foreground", children: navLinks.map((l) => {
                const Icon = sectionIcons[l.label] ?? FiUser;
                return /* @__PURE__ */ jsxs(
                  Command.Item,
                  {
                    onSelect: () => go(l.href),
                    className: "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-white/5",
                    children: [
                      /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-electric" }),
                      " ",
                      l.label
                    ]
                  },
                  l.href
                );
              }) }),
              /* @__PURE__ */ jsxs(Command.Group, { heading: "Links", className: "px-2 py-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxs(Command.Item, { onSelect: () => go(`mailto:${profile.email}`), className: "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-white/5", children: [
                  /* @__PURE__ */ jsx(FiMail, { className: "h-4 w-4 text-electric" }),
                  " Email me"
                ] }),
                /* @__PURE__ */ jsxs(Command.Item, { onSelect: () => go(profile.github), className: "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-white/5", children: [
                  /* @__PURE__ */ jsx(FiGithub, { className: "h-4 w-4 text-electric" }),
                  " GitHub"
                ] }),
                /* @__PURE__ */ jsxs(Command.Item, { onSelect: () => go(profile.linkedin), className: "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-white/5", children: [
                  /* @__PURE__ */ jsx(FiLinkedin, { className: "h-4 w-4 text-electric" }),
                  " LinkedIn"
                ] })
              ] })
            ] })
          ] })
        }
      )
    }
  ) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen bg-[#030712] text-foreground antialiased dark", children: [
    /* @__PURE__ */ jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(CustomCursor, {}),
    /* @__PURE__ */ jsx(MouseGlow, {}),
    /* @__PURE__ */ jsx(CommandMenu, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Achievements, {}),
      /* @__PURE__ */ jsx(WhyHireMe, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(BackToTop, {})
  ] });
}
export {
  Index as component
};
