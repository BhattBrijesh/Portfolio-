import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { achievements } from "@/data/portfolio";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
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
  return (
    <span ref={ref} className="font-display text-5xl font-bold text-gradient sm:text-6xl">
      <motion.span>{display}</motion.span>{suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="gradient-border relative overflow-hidden p-8 sm:p-12">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-electric/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-purple-accent/20 blur-3xl" />

          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <Counter value={a.value} suffix={a.suffix} />
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                  {a.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
