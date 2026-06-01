import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { SectionHeading } from "@/components/ui-extras/SectionHeading";
import { whyHireMe } from "@/data/portfolio";

export function WhyHireMe() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Why Hire Me"
          title={<>The case for <span className="text-gradient">working together</span></>}
          description="What I bring to a team beyond just code commits."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyHireMe.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass relative overflow-hidden rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple-accent text-white shadow-lg shadow-electric/40">
                <FiCheck className="h-4 w-4" />
              </div>
              <h3 className="font-display text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
