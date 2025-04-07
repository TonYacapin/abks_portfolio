import { FaFolderOpen, FaInfoCircle } from "react-icons/fa";

export default function ProjectsSection() {
  const contentClasses = "bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-120px)] w-full flex flex-col";
  const headingClasses = "text-xl font-bold mb-4 pb-2 border-b border-gray-200";
  const textClasses = "text-gray-700";

  return (
    <div className={contentClasses}>
      <h2 className={headingClasses}>
        <FaFolderOpen className="inline-block mr-2" />
        Projects
      </h2>
      <ul className={`space-y-4 ml-2 ${textClasses}`}>
        <li>
          <h3 className="font-medium mb-1">Restaurant App</h3>
          <p className="text-gray-600">
            A restaurant application with online ordering capabilities.{' '}
            <a 
              href="https://ipt-restaurant.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View Live
            </a>
          </p>
        </li>
        <li>
          <h3 className="font-medium mb-1">Portfolio Website</h3>
          <p className="text-gray-600">A personal portfolio showcasing my skills and projects.</p>
          <p className="text-gray-600">
            A restaurant application with online ordering capabilities.{' '}
            <a 
              href="https://abakusportfolio.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View Live
            </a>
          </p>
        </li>
      </ul>
      
      {/* Note about additional projects */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <p className="flex items-center text-blue-700">
          <FaInfoCircle className="mr-2" />
          <span>Additional projects are currently being added to this portfolio. Please check back later for more examples of my work.</span>
        </p>
      </div>
    </div>
  );
}