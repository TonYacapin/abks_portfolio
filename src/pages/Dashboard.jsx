import { useState } from "react";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

export default function PortfolioDashboard() {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
  
      {/* Main Content */}
      <main className="md:ml-60 p-6 flex-grow">
        <div className="max-w-4xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}