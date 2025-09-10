import { motion } from "framer-motion";
import {
  FaUser,
  FaLaptopCode,
  FaGraduationCap,
  FaCoffee,
  FaFileDownload,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="min-h-screen w-full bg-[#0D1117] px-6 md:px-12 py-12 flex flex-col items-center">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-[#C9D1D9] flex items-center"
      >
        <FaUser className="mr-3 text-[#EF4444]" /> About Me
      </motion.h2>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row items-start gap-12 w-full max-w-6xl">
        {/* Left - Profile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <img
            src="/images/image.png"
            alt="Angel Hamelton Yacapin"
            className="rounded-2xl shadow-2xl border-4 border-[#161B22] hover:scale-105 transition-transform duration-300 w-3/4 md:w-full"
          />

          <motion.a
            href="/CV YACAPIN (2).pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-gradient-to-r from-[#EF4444] to-[#B91C1C] text-white no-underline font-semibold py-3 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2"
          >
            <FaFileDownload /> Download CV
          </motion.a>

          {/* Quick Facts */}
          <div className="mt-8 grid gap-4 w-full">
            {[
              {
                icon: <FaLaptopCode />,
                text: "4+ years of full-stack development experience",
              },
              {
                icon: <FaGraduationCap />,
                text: "Information Technology graduate from Saint Mary's University",
              },
              { icon: <FaCoffee />, text: "Based in Solano, Nueva Vizcaya, Philippines" },
            ].map((fact, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3 bg-[#161B22] p-4 rounded-lg shadow-md text-[#C9D1D9]"
              >
                <span className="text-[#EF4444] text-xl">{fact.icon}</span>
                <p>{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-2/3"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#C9D1D9]">
            Hi, I'm <span className="text-[#EF4444]">Allen O. Feature</span>
          </h3>
          <p className="text-lg leading-relaxed text-[#C9D1D9] mb-6">
            I'm a software developer with a passion for building intuitive, high-performance
            applications. Specializing in the MERN stack, I create seamless solutions across
            both frontend and backend systems.
          </p>
          <p className="text-lg leading-relaxed text-[#C9D1D9] mb-6">
            I believe great software is more than just code — it’s about creating user-friendly
            experiences that solve real problems and make people’s lives easier.
          </p>

          {/* What I Do */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-[#C9D1D9] border-l-4 border-[#EF4444] pl-3">
              What I Do
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Frontend Development",
                  desc: "Responsive UIs with React, TypeScript, and TailwindCSS.",
                },
                {
                  title: "Backend Architecture",
                  desc: "Scalable APIs and services with Node.js & Express.",
                },
                {
                  title: "Database Design",
                  desc: "Efficient models in SQL & NoSQL (MongoDB).",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#161B22] p-5 rounded-lg shadow-md"
                >
                  <h4 className="text-[#EF4444] font-medium text-lg mb-2">{item.title}</h4>
                  <p className="text-[#C9D1D9]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* HR-Friendly Extra */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-[#C9D1D9] border-l-4 border-[#EF4444] pl-3">
              Beyond Code
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#161B22] p-5 rounded-lg shadow-md flex items-start gap-3"
              >
                <FaUsers className="text-[#EF4444] text-xl mt-1" />
                <p className="text-[#C9D1D9]">
                  Team player who values collaboration and mentorship.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#161B22] p-5 rounded-lg shadow-md flex items-start gap-3"
              >
                <FaHeart className="text-[#EF4444] text-xl mt-1" />
                <p className="text-[#C9D1D9]">
                  Passionate about continuous learning & personal growth.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
