import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaInfoCircle,
  FaGlobe,
  FaGithub,
  FaCode,
  FaStar,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Restaurant App",
      description:
        "Restaurant App is a web-based system developed as part of my 3rd-year programming class. It includes a content management system (CMS) where the admin can easily manage the menu — adding new items, editing product names, updating prices, changing descriptions, and uploading images — providing a flexible and user-friendly way to keep the restaurant offerings up to date.",
      liveUrl: "https://ipt-restaurant.vercel.app",
      codeUrl: "https://github.com/TonYacapin/IPT_RESTAURANT",
      tags: ["Javascript", "Tailwind", "MERN"],
      difficulty: 3,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website I designed and developed to showcase my skills and projects. Built with modern frontend tools, it features reusable components, smooth animations with Framer Motion, and a responsive design for seamless viewing across devices. Deployed on Vercel, it reflects both my technical skills and my ability to create clean, professional interfaces.",
      liveUrl: "https://abakusportfolio.vercel.app",
      codeUrl: "https://github.com/TonYacapin/abks_portfolio",
      tags: ["Javascript", "Tailwind"],
      difficulty: 2,
    },
    {
      id: 3,
      title: "Portable Assistant for Animal Welfare (PAAW)",
      description:
        "A digital solution built for the Provincial Veterinary Services Office of Nueva Vizcaya. It replaces manual, paper-based workflows with an easy-to-use system that streamlines processes, improves collaboration across divisions, and automatically generates reports to support faster and smarter decision-making.",
      liveUrl: "https://nuevavizaya-paaw.vercel.app/login",
      codeUrl: "https://github.com/TonYacapin/PAAW",
      tags: ["MongoDB", "Express", "React", "Node.js", "MERN"],
      difficulty: 5,
    },
    {
      id: 4,
      title: "Applicant Tracking System",
      description:
        "Applicant Tracking System (ATS) is a web-based HR solution I worked on during my On-the-Job Training. I contributed as both a frontend and backend developer, building features that streamline the hiring process, track candidates efficiently, and improve collaboration for HR teams.",
      liveUrl: "https://ats-hr.vercel.app/",
      codeUrl: "https://github.com/jzaragosa06/ats-frontend",
      tags: ["React", "Javascript", "HR", "Tracking"],
      difficulty: 4,
    },
    {
      id: 5,
      title: "Barbershop Income Tracker",
      description:
        "Barbershop Income Tracker is a web-based financial management tool inspired by my father’s request for a simple spreadsheet to calculate income. I expanded the idea into a full application that tracks daily earnings, and visualizes financial data through interactive charts, making it easier to monitor and understand business performance.",
      liveUrl: "https://ngelscut-barbershop.vercel.app/",
      codeUrl:
        "https://github.com/TonYacapin/barbershop_income_tracker_frontend",
      tags: ["MERN", "Javascript", "Financial", "Fullstack"],
      difficulty: 3,
    },
    {
      id: 6,
      title: "SPAZIO",
      description:
        "SPAZIO is a mobile application I developed during my 3rd year of college. It allows users to post and explore land listings through an interactive map, engage in private real-time messaging, and even handle digital contract signing — providing a seamless end-to-end experience for property transactions.",
      codeUrl: "https://github.com/TonYacapin/SPAZIOO",
      instaUrl:
        "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTg5MDY4MTU1NjMwNzYy?story_media_id=3356975524537478502_65143603232&igsh=MThlZHZyZmkwdGo1eg=",
      tags: ["React Native", "Expo", "Mobile", "Google Maps", "Realtime Messaging"],
      difficulty: 5,
    },
    {
      id: 7,
      title: "Pocket Saver",
      description:
        "Pocket Saver is a gamified web app that encourages users to build better saving habits by pairing each account with a virtual pet. Users grow their pet through PVE-style battles, level it up, and even gift it to other users—making saving money fun, social, and rewarding.",
      liveUrl: "https://pocketsavr.vercel.app/login",
      codeUrl: null,
      tags: ["React", "Gamification", "Saving", "Fullstack"],
      difficulty: 5,
      additionalLinks: [
        { label: "Frontend Code", url: "https://github.com/TonYacapin/savr_frontend" },
        { label: "Backend Code", url: "https://github.com/TonYacapin/savr_backend" },
      ],
    },
    {
      id: 8,
      title: "Mindful - Mood Tracker",
      description:
        "Mindful is a web-based mental wellness platform that helps users track moods, reflect through journaling, It features daily mood check-ins, personal journals, data visualization for mood trends, and an intuitive, responsive interface for seamless user experience.",
      liveUrl: "https://mindful-app-phi.vercel.app/",
      codeUrl: "https://github.com/TonYacapin/Mindful-App",
      tags: ["React", "Javascript", "Tailwind", "Fullstack", "Gamification"],
      difficulty: 4,
    },
  ];

  return (
    <section className="bg-[#0D1117] px-6 md:px-12 py-12 rounded-lg shadow-lg w-full flex flex-col">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 flex items-center text-[#F87171]"
      >
        <FaFolderOpen className="mr-3 text-[#DC2626]" /> Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className={`relative bg-[#161B22] border border-[#30363D] rounded-lg overflow-hidden transition-all duration-300 ${
              hoveredProject === index
                ? "shadow-[0_0_25px_rgba(220,38,38,0.5)] -translate-y-2"
                : "shadow-md"
            }`}
          >
            {/* Top Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-[#DC2626] to-[#F87171]" />

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-xl text-[#F3F4F6]">
                  {project.title}
                </h3>
              </div>

              <p className="text-[#D1D5DB] mb-4">{project.description}</p>

              {/* Difficulty Meter */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`mr-1 ${
                      i < project.difficulty
                        ? "text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs text-[#9CA3AF]">Difficulty</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    key={tag}
                    className="px-3 py-1 bg-[#0D1117] text-[#F87171] text-xs rounded-full flex items-center border border-[#DC2626]"
                  >
                    <FaCode className="mr-1 text-[10px]" /> {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-sm text-white rounded-md shadow-md"
                  >
                    <FaGlobe className="mr-2" /> View Live
                  </motion.a>
                )}

                {project.codeUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-[#F87171] to-[#DC2626] text-sm text-white rounded-md shadow-md"
                  >
                    <FaGithub className="mr-2" /> View Code
                  </motion.a>
                )}

                {/* Additional Links */}
                {project.additionalLinks &&
                  project.additionalLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-sm text-white rounded-md shadow-md"
                    >
                      <FaCode className="mr-2" /> {link.label}
                    </motion.a>
                  ))}

                {/* Instagram Documentation Button for SPAZIO */}
                {project.title === "SPAZIO" && project.instaUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.instaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-600 to-red-500 text-sm text-white rounded-md shadow-md"
                  >
                    <FaInstagram className="mr-2" /> View Documentation
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: projects.length * 0.15 }}
        className="mt-auto p-5 bg-[#161B22] border border-[#30363D] rounded-md hover:bg-[#1A2028] transition-all"
      >
        <p className="flex items-center text-[#D1D5DB]">
          <FaInfoCircle className="mr-3 text-[#DC2626]" />
          More exciting projects are being added soon. Stay tuned!
        </p>
      </motion.div>
    </section>
  );
}
