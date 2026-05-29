import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { EcosystemSection } from "@/components/EcosystemSection";
import { ScienceSection } from "@/components/ScienceSection";
import { VideoShowcase } from "@/components/VideoShowcase";
import { CommunitySection } from "@/components/CommunitySection";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bridge Healing Alliance — Reset. Restore. Elevate." },
      {
        name: "description",
        content:
          "Bridge Healing Alliance™ — a premium neuro-wellness ecosystem uniting mission, sound (NeuroSmooth Jazz™), and experience (NeuroSmooth Flow™).",
      },
      { property: "og:title", content: "Bridge Healing Alliance — Reset. Restore. Elevate." },
      { property: "og:description", content: "The premier neuro-wellness experience." },
    ],
  }),
});

function Index() {
  useRevealOnScroll();

  return (
    <div className="relative">
      <AmbientBackdrop />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <EcosystemSection />
          <ScienceSection />
          <section id="experience">
            <VideoShowcase />
          </section>
          <CommunitySection />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </div>
  );
}
