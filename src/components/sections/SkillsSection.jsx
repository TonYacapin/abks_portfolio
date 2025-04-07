import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { TbApi } from "react-icons/tb";

export default function SkillsSection() {
  const contentClasses = "bg-white p-6 rounded-lg shadow-md w-full flex flex-col";
  const headingClasses = "text-xl font-bold mb-4 pb-2 border-b border-gray-200";
  const textClasses = "text-gray-700";

  const skillCategories = [
    {
      name: "Frontend",
      icon: <FaLaptopCode className="text-blue-500" />,
      skills: [
        { name: "React.js", icon: <SiReact className="text-blue-600" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
        { name: "HTML5/CSS3", icon: <FaCode className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <FaCode className="text-teal-500" /> },
      ]
    },
    {
      name: "Backend",
      icon: <FaServer className="text-green-600" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "RESTful APIs", icon: <TbApi className="text-purple-600" /> },
        { name: "GraphQL", icon: <TbApi className="text-pink-600" /> },
      ]
    },
    {
      name: "Database",
      icon: <FaDatabase className="text-orange-500" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Mongoose ODM", icon: <FaDatabase className="text-red-500" /> },
      ]
    },
    {
      name: "Tools & Others",
      icon: <FaTools className="text-gray-600" />,
      skills: [
        { name: "Git & GitHub", icon: <AiFillGithub className="text-black" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
        { name: "Agile/Scrum Methodology", icon: <FaTools className="text-purple-500" /> },
        { name: "Responsive Design", icon: <FaLaptopCode className="text-indigo-500" /> },
      ]
    },
  ];

  return (
    <div className={contentClasses}>
      <h2 className={headingClasses}>
        <FaCode className="inline-block mr-2" />
        Skills
      </h2>
      <div className={textClasses}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}