import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
} & ComponentProps<typeof motion.a>;

export function MagneticButton({ variant = "primary", children, className, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-gradient-to-r from-electric to-purple-accent text-white shadow-lg shadow-electric/30 hover:shadow-electric/50"
          : "glass text-foreground hover:bg-white/5",
        className,
      )}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </motion.a>
  );
}
