import { useState } from "react"
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaCommentDots,
  FaBars,
  FaTimes,
} from "react-icons/fa"

export default function Sidebar({ activeSection, setActiveSection, sectionRefs }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (section) => {
    // Update active section
    setActiveSection(section)

    // Scroll to the section
    const sectionRef = sectionRefs[section]
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 80, // Offset for header
        behavior: "smooth",
      })
    }

    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: "About Me", icon: <FaUser />, section: "about" },
    { label: "Skills", icon: <FaCode />, section: "skills" },
    { label: "Projects", icon: <FaFolderOpen />, section: "projects" },
    { label: "Contact", icon: <FaCommentDots />, section: "contact" },
  ]
  const socialLinks = [
    { href: "https://github.com/TonYacapin", icon: <FaGithub color="white" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/yacapin-angel-hamelton-o-2b8271304/", icon: <FaLinkedin color="white" />, label: "LinkedIn" },
    { href: "mailto:angelhameltonyacapin@example.com", icon: <FaEnvelope color="white" />, label: "Email" },
  ]

  return (
    <header className="bg-[#0F172A] text-[#F8FAFC] py-4 fixed top-0 left-0 w-full z-10 shadow-md border-b border-[#1E293B]">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-4 text-[#3B82F6]">ABAKUS</h1>
          <p className="text-xs text-[#F8FAFC]/80">Software Developer</p>
        </div>

        {/* Mobile menu toggle */}
        <span
          onClick={toggleMobileMenu}
          className="md:hidden text-[#F8FAFC] p-2 cursor-pointer transition-colors"
        >
          {isMobileMenuOpen ? 
            <FaTimes size={20} className="text-[#F8FAFC]" /> : 
            <FaBars size={20} className="text-[#F8FAFC]" />
          }
        </span>
        
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            {navItems.map(({ label, icon, section }) => (
              <li key={section}>
                <span
                  onClick={() => handleNavClick(section)}
                  className={`flex items-center px-4 py-2 font-medium cursor-pointer transition duration-300 
                    ${activeSection === section ? "text-[#3B82F6]" : "text-[#F8FAFC] hover:text-[#3B82F6]"}`}
                >
                  <span className="mr-2">{icon}</span>
                  <span>{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map(({ href, icon, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F8FAFC] hover:text-[#3B82F6] transition duration-300"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F172A] border-t border-[#1E293B] z-20">
          <div className="flex flex-col p-4">
            <nav className="mb-4">
              <ul className="space-y-2">
                {navItems.map(({ label, icon, section }) => (
                  <li key={section}>
                    <span
                      onClick={() => handleNavClick(section)}
                      className={`flex w-full items-center px-4 py-2 font-medium transition duration-300 cursor-pointer
                      ${activeSection === section ? "text-[#3B82F6]" : "text-[#F8FAFC] hover:text-[#3B82F6]"}`}
                    >
                      <span className="mr-2">{icon}</span>
                      <span>{label}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex justify-center space-x-6 pt-3 border-t border-[#1E293B]">
              {socialLinks.map(({ href, icon, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8FAFC] hover:text-[#3B82F6] transition duration-300"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>

            <p className="mt-4 text-xs text-center text-[#F8FAFC]/60">© 2025 Angel Hamelton O. Yacapin</p>
          </div>
        </div>
      )}
    </header>
  )
}