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
    setActiveSection(section)

    const sectionRef = sectionRefs[section]
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 80,
        behavior: "smooth",
      })
    }

    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: "About Me", icon: <FaUser />, section: "about" },
    { label: "Skills", icon: <FaCode />, section: "skills" },
    { label: "Projects", icon: <FaFolderOpen />, section: "projects" },
    { label: "Contact", icon: <FaCommentDots />, section: "contact" },
  ]

  const socialLinks = [
    { href: "https://github.com/TonYacapin", icon: <FaGithub className="text-[#EF4444] hover:text-[#DC2626] transition-colors" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/angel-hamelton-yacapin-2b8271304/", icon: <FaLinkedin className="text-[#EF4444] hover:text-[#DC2626] transition-colors" />, label: "LinkedIn" },
    { href: "mailto:angelhameltonyacapin@example.com", icon: <FaEnvelope className="text-[#EF4444] hover:text-[#DC2626] transition-colors" />, label: "Email" },
  ]
  return (
    <header className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#F8FAFC] py-4 fixed top-0 left-0 w-full z-10 shadow-lg border-b border-[#EF4444]/40">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Brand */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-4 text-[#EF4444] drop-shadow-lg">ABAKUS</h1>
          <p className="text-xs text-[#F8FAFC]/80">Software Developer</p>
        </div>

        {/* Mobile menu toggle */}
        <span
          onClick={toggleMobileMenu}
          className="md:hidden text-[#F8FAFC] p-2 cursor-pointer transition-colors hover:text-[#EF4444]"
        >
          {isMobileMenuOpen ? (
            <FaTimes size={22} className="text-[#F8FAFC]" />
          ) : (
            <FaBars size={22} className="text-[#F8FAFC]" />
          )}
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            {navItems.map(({ label, icon, section }) => (
              <li key={section}>
                <span
                  onClick={() => handleNavClick(section)}
                  className={`flex items-center px-4 py-2 font-medium cursor-pointer rounded-lg transition duration-300
                    ${
                      activeSection === section
                        ? "bg-[#EF4444]/20 text-[#EF4444] shadow-md"
                        : "text-[#F8FAFC] hover:text-[#EF4444] hover:bg-[#EF4444]/10"
                    }`}
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
              className="text-[#F8FAFC] hover:text-[#EF4444] transition duration-300 transform hover:scale-110"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0F172A] to-[#1E293B] border-t border-[#EF4444]/40 z-20">
          <div className="flex flex-col p-4">
            <nav className="mb-4">
              <ul className="space-y-2">
                {navItems.map(({ label, icon, section }) => (
                  <li key={section}>
                    <span
                      onClick={() => handleNavClick(section)}
                      className={`flex w-full items-center px-4 py-2 font-medium transition duration-300 cursor-pointer rounded-lg
                        ${
                          activeSection === section
                            ? "bg-[#EF4444]/20 text-[#EF4444] shadow-md"
                            : "text-[#F8FAFC] hover:text-[#EF4444] hover:bg-[#EF4444]/10"
                        }`}
                    >
                      <span className="mr-2">{icon}</span>
                      <span>{label}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-6 pt-3 border-t border-[#EF4444]/40">
              {socialLinks.map(({ href, icon, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8FAFC] hover:text-[#EF4444] transition duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>

            <p className="mt-4 text-xs text-center text-[#F8FAFC]/60">
              © 2025 Angel Hamelton O. Yacapin
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
