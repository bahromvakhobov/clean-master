import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStats from "@/components/TrustStats";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import FloatingTelegramButton  from "@/components/FloatingTelegramButton";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <TrustStats />
    <ServicesSection />
    <BeforeAfterSection />
    <WhyChooseUs />
    <HowItWorks />
    <GallerySection />
    <TestimonialsSection />
    <CTABanner />
    <ContactSection />
    <FloatingTelegramButton />
    <Footer />
  </div>
);

export default Index;
