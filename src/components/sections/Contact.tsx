import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { SectionHeading } from "@/components/ui-extras/SectionHeading";
import { profile } from "@/data/portfolio";

function CopyRow({ icon: Icon, label, value, href }: { icon: typeof FiMail; label: string; value: string; href: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };
  return (
    <div className="glass group flex items-center gap-4 rounded-2xl p-4">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric/20 to-purple-accent/20 text-electric ring-1 ring-white/10">
        <Icon className="h-5 w-5" />
      </span>
      <a href={href} className="min-w-0 flex-1">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium transition-colors group-hover:text-electric">{value}</div>
      </a>
      <button
        onClick={copy}
        className="rounded-lg border border-white/10 bg-white/5 p-2 text-muted-foreground transition hover:text-electric"
        aria-label={`Copy ${label}`}
      >
        {copied ? <FiCheck className="h-4 w-4 text-emerald-400" /> : <FiCopy className="h-4 w-4" />}
      </button>
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 600);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-80 max-w-3xl bg-electric/20 opacity-30 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">build something</span></>}
          description="Open to full-time roles, contracts, and interesting collaborations."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <CopyRow icon={FiMail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <CopyRow icon={FiPhone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
            <CopyRow icon={FiGithub} label="GitHub" value="github.com/BhattBrijesh" href={profile.github} />
            <CopyRow icon={FiLinkedin} label="LinkedIn" value="linkedin.com/in/brijesh-bhatt-a811a4215" href={profile.linkedin} />
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border space-y-4 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</span>
                <input name="name" required placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-electric/60 focus:bg-white/[0.05]" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</span>
                <input type="email" name="email" required placeholder="jane@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-electric/60 focus:bg-white/[0.05]" />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</span>
              <textarea name="message" required rows={6} placeholder="Tell me about your project, role, or idea…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-electric/60 focus:bg-white/[0.05]" />
            </label>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-purple-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-electric/30 transition disabled:opacity-60 sm:w-auto"
            >
              <FiSend className="h-4 w-4" />
              {status === "sending" ? "Sending…" : status === "sent" ? "Opening email…" : "Send message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
