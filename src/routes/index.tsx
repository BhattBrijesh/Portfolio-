import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { BackToTop } from "@/components/effects/BackToTop";
import { CommandMenu } from "@/components/effects/CommandMenu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brijesh Bhatt — Full Stack Developer" },
      {
        name: "description",
        content:
          "Brijesh Bhatt — Full Stack Developer with 3 years building scalable web apps in React, Node.js, TypeScript, MongoDB and MySQL.",
      },
      { property: "og:title", content: "Brijesh Bhatt — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Building scalable full-stack applications with React, Node.js, TypeScript, MongoDB and MySQL.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#030712" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Brijesh Bhatt",
          jobTitle: "Full Stack Developer",
          worksFor: { "@type": "Organization", name: "MethodHub" },
          email: "mailto:brijeshbhatt5699@gmail.com",
          telephone: "+91 9569599163",
          address: { "@type": "PostalAddress", addressLocality: "Mohali", addressCountry: "IN" },
          url: "/",
          sameAs: ["https://github.com/BhattBrijesh"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-foreground antialiased dark">
      <LoadingScreen />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <MouseGlow />
      <CommandMenu />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
