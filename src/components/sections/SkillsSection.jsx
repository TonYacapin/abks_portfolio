import React from "react";
import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { TbApi } from "react-icons/tb";

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <FaCode className="text-xl" />,
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5/CSS3", icon: <FaLaptopCode /> },
        { name: "Tailwind CSS", icon: <FaCode /> },
      ]
    },
    {
      name: "Backend",
      icon: <FaServer className="text-xl" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "RESTful APIs", icon: <TbApi /> },
        { name: "GraphQL", icon: <TbApi /> },
      ]
    },
    {
      name: "Database",
      icon: <FaDatabase className="text-xl" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose ODM", icon: <FaDatabase /> },
      ]
    },
    {
      name: "Tools & Others",
      icon: <FaTools className="text-xl" />,
      skills: [
        { name: "Git & GitHub", icon: <AiFillGithub /> },
        { name: "VS Code", icon: <FaLaptopCode /> },
        { name: "Agile/Scrum Methodology", icon: <FaTools /> },
        { name: "Responsive Design", icon: <FaLaptopCode /> },
      ]
    },
  ];

  return (
    <section className="py-16 bg-[#0D1117] text-[#C9D1D9]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center relative">
          <span className="relative z-10">
            Technical Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#58A6FF] rounded-full"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#161B22] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(88,166,255,0.3)] border border-[#161B22] hover:border-[#58A6FF]">
              <div className="px-6 py-4 border-b border-[#30363d] flex items-center gap-3">
                <span className="text-[#58A6FF]">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="p-4">
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1f2937] transition-colors duration-150">
                      <span className="text-[#F85149]">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}