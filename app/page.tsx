import PresentationLayout from "./components/presentation/PresentationLayout";
import HeroSection from "./components/presentation/sections/HeroSection";
import AboutSection from "./components/presentation/sections/AboutSection";
import ThermalSection from "./components/presentation/sections/ThermalSection";
import GallerySection from "./components/presentation/sections/GallerySection";
import GallerySection2 from "./components/presentation/sections/GallerySection2";
import GallerySection3 from "./components/presentation/sections/GallerySection3";
import MethodologySection from "./components/presentation/sections/MethodologySection";
import QuestionsSection from "./components/presentation/sections/QuestionsSection";
import ContactSection from "./components/presentation/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <PresentationLayout>
        <HeroSection />
        <AboutSection />
        <ThermalSection />
        <GallerySection />
        <GallerySection2 />
        <GallerySection3 />
        <MethodologySection />
        <QuestionsSection />
        <ContactSection />
      </PresentationLayout>
    </main>
  );
}
// Deployment ready
