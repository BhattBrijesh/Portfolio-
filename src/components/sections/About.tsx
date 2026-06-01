import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiServer, FiZap, FiLayers, FiUsers } from "react-icons/fi";
import { SectionHeading } from "@/components/ui-extras/SectionHeading";
import { profile } from "@/data/portfolio";

const pillars = [
  { icon: FiCode, title: "Full-Stack Engineering", desc: "React/Next on the front, Node/Express on the back — typed end-to-end." },
  { icon: FiLayers, title: "MERN Stack", desc: "Years building consumer products on MongoDB, Express, React, Node." },
  { icon: FiServer, title: "REST APIs", desc: "Pragmatic, well-versioned APIs with predictable error contracts." },
  { icon: FiDatabase, title: "Database Design", desc: "Schema-first thinking on MySQL and MongoDB, with stored procedures where it counts." },
  { icon: FiZap, title: "Performance", desc: "Cut a real production API from 800ms to 200ms — and kept it there." },
  { icon: FiUsers, title: "Agile Collaboration", desc: "Shipping inside a 20-member cross-functional team across FE/BE/QA." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About"
          title={<>The developer <span className="text-gradient">behind the code</span></>}
          description={profile.summary}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group gradient-border relative p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-purple-accent/20 text-electric ring-1 ring-white/10">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-electric/5 to-purple-accent/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
