import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { SectionHeading } from "@/components/ui-extras/SectionHeading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Experience"
          title={<>Where I've <span className="text-gradient">shipped</span></>}
          description="Real production work — measurable wins, not just titles."
        />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-electric via-purple-accent to-transparent md:left-1/2" />

          {experiences.map((e, i) => (
            <motion.article
              key={e.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-10 grid grid-cols-1 gap-6 pl-12 md:grid-cols-2 md:pl-0"
            >
              <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-electric ring-4 ring-electric/20 md:left-1/2" />

              <div className={`md:text-right ${i % 2 === 0 ? "" : "md:order-2 md:text-left"}`}>
                <div className="font-display text-2xl font-semibold">{e.company}</div>
                <div className="mt-1 text-sm text-electric">{e.role}</div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground md:justify-end">
                  <span className="inline-flex items-center gap-1"><FiBriefcase className="h-3.5 w-3.5" /> {e.duration}</span>
                  <span className="inline-flex items-center gap-1"><FiMapPin className="h-3.5 w-3.5" /> {e.location}</span>
                </div>
              </div>

              <div className={`gradient-border p-6 ${i % 2 === 0 ? "" : "md:order-1"}`}>
                <ul className="space-y-3">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                      <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
