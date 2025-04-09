import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

export default function PortfolioDashboard() {
  const [activeSection, setActiveSection] = useState("about");
  
  // Create refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Function to check which section is currently in view
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100; // Adding offset for the header
    
    // Get positions of each section
    const aboutPosition = aboutRef.current?.offsetTop || 0;
    const skillsPosition = skillsRef.current?.offsetTop || 0;
    const projectsPosition = projectsRef.current?.offsetTop || 0;
    const contactPosition = contactRef.current?.offsetTop || 0;
    
    // Determine which section is currently in view
    if (scrollPosition >= contactPosition) {
      setActiveSection("contact");
    } else if (scrollPosition >= projectsPosition) {
      setActiveSection("projects");
    } else if (scrollPosition >= skillsPosition) {
      setActiveSection("skills");
    } else {
      setActiveSection("about");
    }
  };
  
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Map section names to their refs for the Sidebar component
  const sectionRefs = {
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef
  };

  return (
    <div className="">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        sectionRefs={sectionRefs}
      />
  
      {/* Main Content with improved spacing */}
      <main className="pt-20"> {/* Increased top padding to prevent sidebar overlap */}
        <div className="space-y-24"> {/* Added vertical spacing between sections */}
          <section ref={aboutRef} id="about" className="scroll-mt-20">
            <AboutSection />
          </section>
          
          <section ref={skillsRef} id="skills" className="scroll-mt-20">
            <SkillsSection />
          </section>
          
          <section ref={projectsRef} id="projects" className="scroll-mt-20">
            <ProjectsSection />
          </section>
          
          <section ref={contactRef} id="contact" className="scroll-mt-20">
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
}