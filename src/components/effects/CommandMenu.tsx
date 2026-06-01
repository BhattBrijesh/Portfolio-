import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiUser, FiCode, FiBriefcase, FiFolder, FiCommand } from "react-icons/fi";
import { profile, navLinks } from "@/data/portfolio";

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  const sectionIcons: Record<string, typeof FiUser> = {
    About: FiUser, Skills: FiCode, Experience: FiBriefcase, Projects: FiFolder, Contact: FiMail,
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong w-[90vw] max-w-xl overflow-hidden rounded-2xl shadow-2xl"
            >
              <Command label="Command Menu">
                <div className="flex items-center gap-3 border-b border-white/10 px-4">
                  <FiCommand className="h-4 w-4 text-muted-foreground" />
                  <Command.Input
                    placeholder="Type a command or search…"
                    className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
                <Command.List className="max-h-[360px] overflow-y-auto p-2">
                  <Command.Empty className="p-6 text-center text-sm text-muted-foreground">
                    No results found.
                  </Command.Empty>
                  <Command.Group heading="Navigate" className="px-2 py-1 text-xs text-muted-foreground">
                    {navLinks.map((l) => {
                      const Icon = sectionIcons[l.label] ?? FiUser;
                      return (
                        <Command.Item
                          key={l.href}
                          onSelect={() => go(l.href)}
                          className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-white/5"
                        >
                          <Icon className="h-4 w-4 text-electric" /> {l.label}
                        </Command.Item>
                      );
                    })}
                  </Command.Group>
                  <Command.Group heading="Links" className="px-2 py-1 text-xs text-muted-foreground">
                    <Command.Item onSelect={() => go(`mailto:${profile.email}`)} className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-white/5">
                      <FiMail className="h-4 w-4 text-electric" /> Email me
                    </Command.Item>
                    <Command.Item onSelect={() => go(profile.github)} className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-white/5">
                      <FiGithub className="h-4 w-4 text-electric" /> GitHub
                    </Command.Item>
                    <Command.Item onSelect={() => go(profile.linkedin)} className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm aria-selected:bg-white/5">
                      <FiLinkedin className="h-4 w-4 text-electric" /> LinkedIn
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
