import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { SectionHeading } from "@/components/ui-extras/SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Things I've <span className="text-gradient">built</span>
            </>
          }
          description="A glimpse at production systems I've helped design, ship, and tune."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-shadow hover:shadow-2xl hover:shadow-electric/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-40 transition-opacity duration-500 group-hover:opacity-70`}
              />
              <div className="absolute inset-0 bg-grid opacity-10" />

              <div className="relative">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0f1f] to-[#1a1030]">
                  <div className="relative flex h-full items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 6, -6, 0] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                      className="font-display text-7xl font-bold text-gradient opacity-30"
                    >
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </motion.div>
                    <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-black/50 p-3 backdrop-blur">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                        <span className="ml-2 truncate text-[10px] text-muted-foreground">
                          {p.name.toLowerCase().replace(/\s+/g, "-")}.app
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-electric">{p.tagline}</p>
                  </div>
                  <FiArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" />
                </div>

                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-purple-accent px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105"
                  >
                    <FiExternalLink className="h-3.5 w-3.5" /> Live demo
                  </a>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-foreground transition-colors hover:bg-white/10"
                    >
                      <FiGithub className="h-3.5 w-3.5" /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
