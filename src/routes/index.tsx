import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { EcosystemOverview } from "@/components/EcosystemOverview";
import { ScienceSection } from "@/components/ScienceSection";
import { ImmersiveExperience } from "@/components/ImmersiveExperience";
import { CommunitySection } from "@/components/CommunitySection";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bridge Healing Alliance — The Premier Neuro Wellness Experience" },
      {
        name: "description",
        content:
          "Bridge Healing Alliance, NeuroSmooth Jazz and NeuroSmooth Flow — a premium cinematic neuro wellness ecosystem for the elevated mind.",
      },
      { property: "og:title", content: "Bridge Healing Alliance — The Premier Neuro Wellness Experience" },
      { property: "og:description", content: "A premium cinematic neuro wellness universe." },
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
          <EcosystemOverview />
          <ImmersiveExperience />
          <ScienceSection />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </div>
  );
}
