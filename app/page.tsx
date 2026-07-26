import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import TrustBar from "../components/home/TrustBar";
import CollectionsPreview from "../components/home/CollectionsPreview";
import AboutSection from "../components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <CollectionsPreview />
      <AboutSection />
    </>
  );
}