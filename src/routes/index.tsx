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
import { MissionStatement } from "@/components/MissionStatement";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bridge Healing Alliance — Personal Rebuilding Movement" },
      {
        name: "description",
        content:
          "From a life-altering challenge to a proven rebuilding path — Bridge Healing Alliance is a premium movement guiding others to rebuild, rise and lead through lived experience.",
      },
      { property: "og:title", content: "Bridge Healing Alliance — Personal Rebuilding Movement" },
      { property: "og:description", content: "Resilience. Reinvention. A luxury rebuilding path built from lived experience." },
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
          <MissionStatement />
          <EcosystemOverview />
          <ScienceSection />
          <ImmersiveExperience />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </div>
  );
}
