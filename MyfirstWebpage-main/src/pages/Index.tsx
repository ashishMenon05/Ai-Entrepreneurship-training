import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyAISection } from "@/components/WhyAISection";
import { EmpathyMapSection } from "@/components/EmpathyMapSection";
import { FiveWhysSection } from "@/components/FiveWhysSection";
import { LearningSection } from "@/components/LearningSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyAISection />
      <EmpathyMapSection />
      <FiveWhysSection />
      <LearningSection />
      <Footer />
    </div>
  );
};

export default Index;
