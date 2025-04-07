import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FaUser,
  FaCode,
  FaFolderOpen,
  FaCommentDots,
} from "react-icons/fa";

export default function PortfolioDashboard() {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    // Removed fixed height and made the content more flexible
    const contentClasses = "bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-120px)] w-full flex flex-col";
    const headingClasses = "text-xl font-bold mb-4 pb-2 border-b border-gray-200";
    const textClasses = "text-gray-700";

    switch (activeSection) {
      case "about":
        return (
          <div className={contentClasses}>
            <h2 className={headingClasses}>
              <FaUser className="inline-block mr-2" />
              About Me
            </h2>
            <p className={textClasses}>
              Hi, I'm Angel Hamelton O. Yacapin, a software developer from the Philippines. I specialize in building
              modern web applications using the MERN stack, JavaScript, and TypeScript. I am passionate about creating
              efficient and scalable solutions.
            </p>
          </div>
        );
      case "skills":
        return (
          <div className={contentClasses}>
            <h2 className={headingClasses}>
              <FaCode className="inline-block mr-2" />
              Skills
            </h2>
            <ul className={`list-disc list-inside space-y-2 ml-2 ${textClasses}`}>
              <li>MongoDB, Express.js, React.js, Node.js (MERN Stack)</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>RESTful APIs and GraphQL</li>
              <li>Version Control (Git, GitHub)</li>
            </ul>
          </div>
        );
      case "projects":
        return (
          <div className={contentClasses}>
            <h2 className={headingClasses}>
              <FaFolderOpen className="inline-block mr-2" />
              Projects
            </h2>
            <ul className={`space-y-4 ml-2 ${textClasses}`}>
              <li>
                <h3 className="font-medium mb-1">Portfolio Website</h3>
                <p className="text-gray-600">A personal portfolio showcasing my skills and projects.</p>
              </li>
              <li>
                <h3 className="font-medium mb-1">E-commerce Platform</h3>
                <p className="text-gray-600">A full-stack e-commerce application built with the MERN stack.</p>
              </li>
              <li>
                <h3 className="font-medium mb-1">Task Manager</h3>
                <p className="text-gray-600">A task management tool with user authentication and real-time updates.</p>
              </li>
            </ul>
          </div>
        );
      case "contact":
        return (
          <div className={contentClasses}>
            <h2 className={headingClasses}>
              <FaCommentDots className="inline-block mr-2" />
              Contact
            </h2>
            <div className={`${textClasses} space-y-4`}>
              <p>
                Feel free to reach out to me at{' '}
                <a href="mailto:yacapinton@gmailcom" className="text-blue-500 hover:underline">
                  angelhameltonyacapin@example.com
                </a>
              </p>
              <div className="mt-6">
                <h3 className="font-medium mb-2">Connect with me:</h3>
                <p>LinkedIn: <a href="#" className="text-blue-500 hover:underline">linkedin.com/in/angelyacapin</a></p>
                <p>GitHub: <a href="#" className="text-blue-500 hover:underline">github.com/angelyacapin</a></p>
              </div>
            </div>
          </div>
        );
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