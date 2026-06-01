import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";
import { HeroScene } from "@/components/three/HeroScene";
import { MagneticButton } from "@/components/ui-extras/MagneticButton";
import { TypingText } from "@/components/ui-extras/TypingText";
import { profile } from "@/data/portfolio";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-electric/20 blur-[120px] animate-blob" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-purple-accent/20 blur-[120px] animate-blob" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={item} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities · {profile.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Brijesh Bhatt</span>
            <br />
            <span className="text-foreground/90">a </span>
            <TypingText
              words={["Full Stack Developer", "MERN Engineer", "Performance Tuner", "API Architect"]}
              className="text-gradient"
            />
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {profile.experience} of experience building scalable web applications. Currently at{" "}
            <span className="text-foreground">{profile.company}</span> shipping production portals
            in React, Node, and MySQL.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            {profile.specialties.map((s) => (
              <span key={s} className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton
              href="/BrijeshBhatt-Resume.pdf"
              download
              variant="primary"
            >
              <FiDownload /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <FiMail /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex items-center gap-3 text-xs text-muted-foreground">
            <FiArrowDown className="animate-bounce" />
            Scroll to explore
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[420px] w-full lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-3xl">
            <HeroScene />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-electric/10 via-transparent to-purple-accent/10" />
        </motion.div>
      </div>
    </section>
  );
}
