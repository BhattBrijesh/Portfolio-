import { useEffect, useState } from "react";

export function TypingText({
  words,
  className = "",
  speed = 80,
  pause = 1600,
}: {
  words: string[];
  className?: string;
  speed?: number;
  pause?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[idx % words.length];
    if (!del && sub === w) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && sub === "") {
      setDel(false);
      setIdx((i) => i + 1);
      return;
    }
    const t = setTimeout(() => {
      setSub(del ? w.slice(0, sub.length - 1) : w.slice(0, sub.length + 1));
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [sub, del, idx, words, speed, pause]);

  return (
    <span className={className}>
      {sub}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-electric" />
    </span>
  );
}
