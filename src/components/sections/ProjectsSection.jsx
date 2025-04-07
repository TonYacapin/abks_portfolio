import { FaFolderOpen, FaInfoCircle, FaGlobe, FaGithub } from "react-icons/fa"
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
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-120px)] w-full flex flex-col">
      <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 flex items-center">
        <FaFolderOpen className="mr-2 text-gray-700" />
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`border rounded-lg overflow-hidden transition-all duration-300 ${
              hoveredProject === index ? "shadow-lg transform -translate-y-1" : "shadow"
            }`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="h-3 bg-gradient-to-r from-gray-400 to-gray-700"></div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 hover:text-black transition-colors"
                >
                  <FaGlobe className="mr-1" />
                  <span>View Live</span>
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <FaGithub className="mr-1" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note about additional projects */}
      <div className="mt-auto p-4 bg-gray-50 border border-gray-200 rounded-md transition-all duration-300 hover:bg-gray-100">
        <p className="flex items-center text-gray-700">
          <FaInfoCircle className="mr-2 flex-shrink-0" />
          <span>
            Additional projects are currently being added to this portfolio. Please check back later for more examples
            of my work.
          </span>
        </p>
      </div>
    </div>
  )
}