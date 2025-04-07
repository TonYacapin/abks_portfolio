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
            <div className="p-3 text-center border-b border-[#222222]">
                <h1 className="text-xl font-bold text-white">ABKS</h1>
                <p className="text-xs text-white">Software Developer</p>
            </div>
            <nav className="flex-1 p-3">
                <ul className="space-y-1">
                    <li>
                        <button
                            className={`block w-full text-left px-2 py-1 rounded hover:bg-[#222222] font-medium text-[#333333] ${activeSection === "about" ? "bg-[#222222]" : ""
                                }`}
                            onClick={() => handleNavClick("about")}
                        >
                            <FaUser className="inline-block mr-2" />
                            <span className="align-middle">About Me</span>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`block w-full text-left px-2 py-1 rounded hover:bg-[#222222] font-medium text-[#333333] ${activeSection === "skills" ? "bg-[#222222]" : ""
                                }`}
                            onClick={() => handleNavClick("skills")}
                        >
                            <FaCode className="inline-block mr-2" />
                            <span className="align-middle">Skills</span>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`block w-full text-left px-2 py-1 rounded hover:bg-[#222222] font-medium text-[#333333] ${activeSection === "projects" ? "bg-[#222222]" : ""
                                }`}
                            onClick={() => handleNavClick("projects")}
                        >
                            <FaFolderOpen className="inline-block mr-2" />
                            <span className="align-middle">Projects</span>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`block w-full text-left px-2 py-1 rounded hover:bg-[#222222] font-medium text-[#333333] ${activeSection === "contact" ? "bg-[#222222]" : ""
                                }`}
                            onClick={() => handleNavClick("contact")}
                        >
                            <FaCommentDots className="inline-block mr-2" />
                            <span className="align-middle">Contact</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <footer className="p-3 text-center border-t border-[#222222]">
                <div className="flex justify-center space-x-3">
                    <a
                        href="https://github.com/TonYacapin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#9c9c9c]"
                    >
                        <FaGithub className="h-4 w-4 text-white" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yacapin-angel-hamelton-o-2b8271304/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#9c9c9c]"
                    >
                        <FaLinkedin className="h-4 w-4 text-white" />
                    </a>
                    <a href="mailto:angelhameltonyacapin@example.com" className="hover:text-[#9c9c9c]">
                        <FaEnvelope className="h-4 w-4 text-white" />
                    </a>
                </div>
                <p className="mt-1 text-xs text-white">© 2025 Angel Hamelton O. Yacapin</p>
            </footer>
        </>
    );

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={toggleMobileMenu}
                className="md:hidden fixed top-4 left-4 z-20 bg-[#333333] text-white p-2 rounded-md shadow-md"
            >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Desktop sidebar */}
            <aside className="fixed top-0 left-0 h-screen w-60 bg-[#333333] text-white flex flex-col z-10 hidden md:flex">
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
                    <aside className="fixed top-0 left-0 h-screen w-60 bg-[#333333] text-white flex flex-col z-30 md:hidden">
                        <div className="flex justify-end p-2">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white hover:text-[#9c9c9c]"
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