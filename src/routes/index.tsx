import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PillarSection } from "@/components/PillarSection";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { ScrollChapters } from "@/components/ScrollChapters";
import { useRevealOnScroll } from "@/hooks/use-reveal";

import neuroImg from "@/assets/section-neuro.jpg";
import musicImg from "@/assets/section-music.jpg";
import wellnessImg from "@/assets/section-wellness.jpg";
import programsImg from "@/assets/section-programs.jpg";
import communityImg from "@/assets/section-community.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nexora — The Premier Neuro Wellness Experience" },
      {
        name: "description",
        content:
          "Where neuroscience, sound, and intentional transformation converge. Nexora is a luxury cinematic neuro wellness ecosystem for the elevated mind.",
      },
      { property: "og:title", content: "Nexora — The Premier Neuro Wellness Experience" },
      { property: "og:description", content: "A futuristic luxury wellness universe." },
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

          <ScrollChapters />

          <PillarSection
            id="neuro"
            index="01 / Neuroscience"
            eyebrow="Backed by Science"
            title="Engineered around the"
            italic="architecture of the mind."
            body="Every Nexora experience is sculpted in collaboration with neuroscientists, sound architects and consciousness researchers — translating measurable brain states into deeply felt human moments."
            bullets={[
              "Clinically informed protocols for clarity, focus and rest",
              "Frequency-tuned environments calibrated to the nervous system",
              "Continuous research with leading neuroscience institutes",
            ]}
            image={neuroImg}
            imageAlt="Glowing golden neural network"
            hue="gold"
          />

          <PillarSection
            id="music"
            index="02 / Sound"
            eyebrow="Music Experiences"
            title="Soundscapes that move"
            italic="through you."
            body="An emotional library of cinematic compositions and binaural journeys, designed to dissolve tension, awaken creativity and guide the listener into transformative states of awareness."
            bullets={[
              "Original scores composed for state shifts",
              "Spatial audio mastered for immersive listening",
              "Live ceremonial sound experiences",
            ]}
            image={musicImg}
            imageAlt="Cinematic sound wave in gold light"
            reverse
            hue="amber"
          />

          <VideoShowcase />

          <PillarSection
            id="wellness"
            index="03 / Wellness"
            eyebrow="Emotionally Intelligent"
            title="A premium wellness"
            italic="ecosystem."
            body="Curated rituals, breath, somatic practice and integrative content — woven together into a daily sanctuary for the modern human seeking depth, beauty and meaning."
            bullets={[
              "Daily rituals informed by behavioral science",
              "Editorial library of films, essays and meditations",
              "Personalized journeys that evolve with you",
            ]}
            image={wellnessImg}
            imageAlt="Silhouette in golden light"
            hue="teal"
          />

          <PillarSection
            id="programs"
            index="04 / Programs"
            eyebrow="Guided Transformation"
            title="Luxury programs for the"
            italic="awakened life."
            body="Multi-week immersive arcs guided by world-class teachers, neuroscientists and artists. A choreography of practice, story and stillness designed to relocate you within yourself."
            bullets={[
              "Founders' Circle: an intimate cohort experience",
              "Cinematic chapters released across seasons",
              "Private retreats in extraordinary locations",
            ]}
            image={programsImg}
            imageAlt="Architectural sanctuary lit in gold"
            reverse
            hue="amber"
          />

          <PillarSection
            id="community"
            index="05 / Community"
            eyebrow="Conscious Collective"
            title="An elegant community of"
            italic="elevated minds."
            body="A constellation of artists, founders, scientists and seekers — connected through shared inquiry and a quiet commitment to live, lead and create at a higher resolution."
            bullets={[
              "Curated salons, dinners and gatherings",
              "Private dialogues with thinkers and creators",
              "Initiatives that give back to global wellbeing",
            ]}
            image={communityImg}
            imageAlt="Constellation of golden nodes"
            hue="teal"
          />

          <Waitlist />
        </main>
        <Footer />
      </div>
    </div>
  );
}
