import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import OnlineTherapySection from "@/components/OnlineTherapySection";
import CertificatesSection from "@/components/CertificatesSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <OnlineTherapySection />
      <CertificatesSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
