import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with care in {profile.location}.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-electric/40 hover:text-electric"
          >
            <FiGithub className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-electric/40 hover:text-electric"
          >
            <FiLinkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition hover:border-electric/40 hover:text-electric"
          >
            <FiMail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
