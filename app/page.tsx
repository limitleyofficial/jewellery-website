import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import TrustBar from "../components/home/TrustBar";
import CollectionsPreview from "../components/home/CollectionsPreview";
import AboutSection from "../components/home/AboutSection";
import ShowroomsSection from "../components/home/ShowroomsSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <CollectionsPreview />
      <AboutSection />
      <ShowroomsSection />
      <ContactSection />
      <Footer />
    </>
  );
}