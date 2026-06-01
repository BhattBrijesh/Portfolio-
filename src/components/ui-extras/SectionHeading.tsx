import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow, title, description,
}: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-electric"
      >
        <span className="h-1 w-1 rounded-full bg-electric" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.05 }}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
