import { FaCode } from "react-icons/fa";

export default function SkillsSection() {
  const contentClasses = "bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-120px)] w-full flex flex-col";
  const headingClasses = "text-xl font-bold mb-4 pb-2 border-b border-gray-200";
  const textClasses = "text-gray-700";

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
}