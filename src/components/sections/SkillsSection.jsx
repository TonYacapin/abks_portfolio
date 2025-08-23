import { motion } from "framer-motion";
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
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "HTML5/CSS3", icon: <FaLaptopCode className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <FaCode className="text-teal-400" /> },
      ],
    },
    {
      name: "Backend",
      icon: <FaServer className="text-xl" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "RESTful APIs", icon: <TbApi className="text-blue-400" /> },
        { name: "GraphQL", icon: <TbApi className="text-pink-400" /> },
      ],
    },
    {
      name: "Database",
      icon: <FaDatabase className="text-xl" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Mongoose ODM", icon: <FaDatabase className="text-purple-400" /> },
      ],
    },
    {
      name: "Tools & Others",
      icon: <FaTools className="text-xl" />,
      skills: [
        { name: "Git & GitHub", icon: <AiFillGithub className="text-white" /> },
        { name: "VS Code", icon: <FaLaptopCode className="text-blue-400" /> },
        { name: "Agile/Scrum Methodology", icon: <FaTools className="text-yellow-300" /> },
        { name: "Responsive Design", icon: <FaLaptopCode className="text-teal-300" /> },
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#0D1117] text-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center flex justify-center"
        >
          <span className="border-b-4 border-[#DC2626] pb-2 text-[#F87171]">
            Technical Skills
          </span>
        </motion.h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05, rotate: -1 }}
              className="bg-[#161B22] rounded-lg overflow-hidden shadow-lg border border-[#30363d] hover:border-[#DC2626] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="px-6 py-4 border-b border-[#30363d] flex items-center gap-3 bg-gradient-to-r from-[#DC2626]/30 to-transparent">
                <span className="text-[#F87171]">{category.icon}</span>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="p-4">
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      whileHover={{
                        scale: 1.05,
                        x: 8,
                        backgroundColor: "rgba(220,38,38,0.15)",
                      }}
                      className="flex items-center gap-3 p-2 rounded-md transition-colors duration-150 cursor-pointer"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-center text-[#9CA3AF]"
        >
          <p className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white shadow-md text-sm">
            🚀 Always learning & adding new skills to my toolkit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
