import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FocusSection } from "@/components/FocusSection";
import { TimelineSection } from "@/components/TimelineSection";
import { JudgesSection } from "@/components/JudgesSection";
import { GallerySection } from "@/components/GallerySection";
import { OrganizersSection } from "@/components/OrganizersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { RegistrationModal } from "@/components/RegistrationModal";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onRegisterClick={() => setIsRegistrationOpen(true)} />
      <HeroSection onRegisterClick={() => setIsRegistrationOpen(true)} />
      <FocusSection />
      <TimelineSection />
      <JudgesSection />
      <GallerySection />
      <OrganizersSection />
      <TestimonialsSection />
      <CTASection onRegisterClick={() => setIsRegistrationOpen(true)} />
      <Footer />
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  );
};

export default Index;
