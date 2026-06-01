import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Interactive hero visual — replaces the previous 3D torus knot.
 * Features:
 *  - Mouse-reactive parallax orbits
 *  - Animated gradient blob that follows cursor
 *  - Floating tech badges with stagger
 *  - Animated grid + starfield
 *  - Pulsing center avatar ring
 */
export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
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
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      mx.set(x * 2 - 1);
      my.set(y * 2 - 1);
    };
    const onLeave = () => { mx.set(0); my.set(0); };
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
    { label: "Next.js", x: "60%", y: "4%", delay: 0.75 },
  ];

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0f24] via-[#0b1230] to-[#120a2a]" style={{ perspective: 1200 }}>
      {/* starfield */}
      <div className="absolute inset-0 opacity-70">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 97) % 100}%`,
              width: i % 7 === 0 ? 2 : 1,
              height: i % 7 === 0 ? 2 : 1,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2 + (i % 5), repeat: Infinity, delay: (i % 10) * 0.2 }}
          />
        ))}
      </div>

      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,140,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,140,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
        }}
      />

      {/* cursor-following blob */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-electric/40 via-purple-accent/30 to-electric/20 blur-3xl"
      />

      {/* center orbit system */}
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* orbit rings */}
        {[180, 260, 340].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-white/15"
            style={{ width: size, height: size }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 18 + i * 6, repeat: Infinity, ease: "linear" }}
          >
            <span
              className="absolute h-3 w-3 rounded-full bg-electric shadow-[0_0_20px_4px_rgba(124,140,255,0.7)]"
              style={{ top: -6, left: "50%", transform: "translateX(-50%)" }}
            />
            {i === 1 && (
              <span
                className="absolute h-2 w-2 rounded-full bg-purple-accent shadow-[0_0_16px_4px_rgba(168,85,247,0.7)]"
                style={{ bottom: -4, left: "50%", transform: "translateX(-50%)" }}
              />
            )}
          </motion.div>
        ))}

        {/* center monogram */}
        <motion.div
          className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-[#0b1230]/80 backdrop-blur-xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric/40 to-purple-accent/40 opacity-60 blur-xl" />
          <span className="relative font-display text-3xl font-bold text-gradient">BB</span>
        </motion.div>
      </motion.div>

      {/* floating tech badges */}
      {badges.map((b) => (
        <motion.div
          key={b.label}
          className="absolute select-none rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md"
          style={{ left: b.x, top: b.y }}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: b.delay },
            scale: { duration: 0.6, delay: b.delay },
            y: { duration: 4 + (b.delay * 2), repeat: Infinity, ease: "easeInOut", delay: b.delay },
          }}
          whileHover={{ scale: 1.15, borderColor: "rgba(124,140,255,0.6)" }}
        >
          {b.label}
        </motion.div>
      ))}

      {/* corner accents */}
      <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-electric/60" />
      <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-purple-accent/60" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-purple-accent/60" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-electric/60" />
    </div>
  );
}
