import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-extras/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 bg-dot opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title={<>Tools I <span className="text-gradient">ship with</span></>}
          description="A pragmatic, production-tested stack honed across enterprise portals."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: gi * 0.08, duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <span className="text-xs text-muted-foreground">{group.items.length} tools</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {group.items.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.08 + i * 0.04 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-electric/30"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 transition-transform group-hover:scale-110"
                          style={{ color: s.color }}
                        >
                          <s.icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-medium">{s.name}</span>
                      </div>
                      <span className="text-[10px] tabular-nums text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-electric to-purple-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
