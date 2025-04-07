import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaCommentDots,
  FaBars,
  FaTimes
} from "react-icons/fa";
  
export default function Sidebar({ activeSection, setActiveSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close menu after selection on mobile
  };
  
  const sidebarContent = (
    <>
      <div className="p-3 text-center border-b border-gray-700">
        <h1 className="text-xl font-bold">ABKS</h1>
        <p className="text-xs">Software Developer</p>
      </div>
      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          <li>
            <button
              className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${
                activeSection === "about" ? "bg-gray-700 text-white" : "text-gray-300"
              }`}
              onClick={() => handleNavClick("about")}
            >
              <FaUser className="inline-block mr-2" />
              About Me
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${
                activeSection === "skills" ? "bg-gray-700 text-white" : "text-gray-300"
              }`}
              onClick={() => handleNavClick("skills")}
            >
              <FaCode className="inline-block mr-2" />
              Skills
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${
                activeSection === "projects" ? "bg-gray-700 text-white" : "text-gray-300"
              }`}
              onClick={() => handleNavClick("projects")}
            >
              <FaFolderOpen className="inline-block mr-2" />
              Projects
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${
                activeSection === "contact" ? "bg-gray-700 text-white" : "text-gray-300"
              }`}
              onClick={() => handleNavClick("contact")}
            >
              <FaCommentDots className="inline-block mr-2" />
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <footer className="p-3 text-center border-t border-gray-700">
        <div className="flex justify-center space-x-3">
          <a
            href="https://github.com/TonYacapin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/yacapin-angel-hamelton-o-2b8271304/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a href="mailto:angelhameltonyacapin@example.com" className="hover:text-gray-300">
            <FaEnvelope className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-1 text-xs text-gray-400">© 2025 Angel Hamelton O. Yacapin</p>
      </footer>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-20 bg-gray-800 text-white p-2 rounded-md shadow-md"
      >
        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      
      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-60 bg-gray-800 text-white flex flex-col z-10 hidden md:flex">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop - closes the menu when clicked */}
          <div 
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile sidebar content */}
          <aside className="fixed top-0 left-0 h-screen w-60 bg-gray-800 text-white flex flex-col z-30 md:hidden">
            <div className="flex justify-end p-2">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white"
              >
                <FaTimes size={20} />
              </button>
            </div>
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}