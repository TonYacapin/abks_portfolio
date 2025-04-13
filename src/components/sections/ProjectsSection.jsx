import { FaFolderOpen, FaInfoCircle, FaGlobe, FaGithub, FaCode, FaStar } from "react-icons/fa"
import { useState } from "react"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Restaurant App",
      description: "A restaurant application with online ordering capabilities.",
      liveUrl: "https://ipt-restaurant.vercel.app",
      codeUrl: "https://github.com/TonYacapin/IPT_RESTAURANT",
      tags: ["Javascript", "Tailwind", "MERN"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects.",
      liveUrl: "https://abakusportfolio.vercel.app",
      codeUrl: "https://github.com/TonYacapin/abks_portfolio",
      tags: ["Javascript", "Tailwind"],
    },
    {
      id: 3,
      title: "Portable Assistant for Animal Welfare (PAAW)",
      description: "A comprehensive web application with authentication and dynamic content.",
      liveUrl: "https://paaw-eight.vercel.app/login",
      codeUrl: "https://github.com/TonYacapin/PAAW",
      tags: ["MongoDB", "Express", "React", "Node.js", "MERN"],
    },
    {
      id: 4,
      title: "Applicant Tracking System",
      description: "An HR application for tracking job applicants through the hiring process.",
      liveUrl: "https://ats-hr.vercel.app/",
      codeUrl: "https://github.com/jzaragosa06/ats-frontend",
      tags: ["React", "Javascript", "HR", "Tracking"],
    },
    {
      id: 5,
      title: "Barbershop Income Tracker",
      description: "A financial management tool for barbershops to track income and appointments.",
      liveUrl: "https://ngelscut-barbershop.vercel.app/",
      codeUrl: "https://github.com/TonYacapin/barbershop_income_tracker_frontend",
      tags: ["MERN", "Javascript", "Financial", "Fullstack"],
    },
    {
      id: 6,
      title: "SPAZIO",
      description: "A land posting mobile application featuring realtime chat, audit logs, and Google Maps integration.",
      codeUrl: "https://github.com/TonYacapin/SPAZIOO",
      tags: ["React Native", "Expo", "Mobile", "Google Maps", "Realtime Messaging"]
    }
  ]

  return (
    <div className="bg-[#0D1117] p-6 rounded-lg shadow-lg min-h-[calc(100vh-120px)] w-full flex flex-col">
      <h2 className="text-2xl font-bold mb-8 pb-3 border-b border-[#161B22] flex items-center text-[#C9D1D9]">
        <FaFolderOpen className="mr-3 text-[#58A6FF]" />
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-[#161B22] border border-[#30363D] rounded-lg overflow-hidden transition-all duration-300 ${hoveredProject === index
                ? "shadow-[0_0_15px_rgba(88,166,255,0.3)] transform -translate-y-1"
                : "shadow-md"
              }`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="h-1 bg-gradient-to-r from-[#58A6FF] to-[#F85149]"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-xl text-[#C9D1D9]">{project.title}</h3>
                <FaStar className={`text-[#F85149] transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`} />
              </div>
              <p className="text-[#8B949E] mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#0D1117] text-[#58A6FF] text-xs rounded-full flex items-center">
                    <FaCode className="mr-1 text-[10px]" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-center space-y-4 mt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[#58A6FF] text-sm text-[#C9D1D9] hover:bg-[#1A2028] hover:text-[#58A6FF] transition-colors rounded-md"
                >
                  <FaGlobe className="mr-2" color="#C9D1D9" />
                  <span className="text-[#C9D1D9]">View Live</span>
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[#58A6FF] text-sm text-[#C9D1D9] hover:bg-[#1A2028] hover:text-[#58A6FF] transition-colors rounded-md"
                >
                  <FaGithub className="mr-2" color="#C9D1D9" />
                  <span className="text-[#C9D1D9]">View Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note about additional projects */}
      <div className="mt-auto p-5 bg-[#161B22] border border-[#30363D] rounded-md transition-all duration-300 hover:bg-[#1A2028]">
        <p className="flex items-center text-[#8B949E]">
          <FaInfoCircle className="mr-3 flex-shrink-0 text-[#58A6FF]" />
          <span>
            Additional projects are currently being added to this portfolio. Please check back later for more examples
            of my work.
          </span>
        </p>
      </div>
    </div>
  )
}