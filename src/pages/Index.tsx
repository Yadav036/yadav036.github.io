import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollIndicator />
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </div>
  );
};

export default Index;
