import {
  FaCommentDots,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFileDownload,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contentClasses =
    "bg-[#0D1117] p-6 rounded-lg shadow-md w-full flex flex-col min-h-[calc(100vh-120px)]";
  const headingClasses =
    "text-2xl font-bold mb-6 pb-3 border-b border-[#161B22] flex items-center text-[#F87171]";

  return (
    <div className={contentClasses}>
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={headingClasses}
      >
        <FaCommentDots className="mr-3 text-[#DC2626]" />
        Contact
      </motion.h2>

      <div className="flex flex-col gap-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#C9D1D9] mb-6"
        >
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#DC2626] pl-3 text-[#F87171]">
            Let’s Connect
          </h3>
          <p className="mb-4">
            I’m actively looking for opportunities to contribute my skills and
            grow as a developer. Whether you have a project, role, or
            collaboration in mind, I’d be happy to talk.
          </p>
          <p className="italic text-[#9CA3AF]">
            “Great teams aren’t found, they’re built.” Let’s build something
            meaningful together.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a
            href="/CV YACAPIN (2).pdf"
            download
            className="flex items-center gap-2 px-5 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg shadow-md transition-all duration-300"
          >
            <FaFileDownload /> Download CV
          </a>

          <a
            href="mailto:yacapinton@gmail.com?subject=Interview%20Request%20from%20HR"
            className="flex items-center gap-2 px-5 py-3 bg-[#161B22] border border-[#30363D] hover:border-[#DC2626] hover:shadow-[0_0_12px_rgba(220,38,38,0.5)] text-[#C9D1D9] rounded-lg transition-all duration-300"
          >
            <FaPhoneAlt /> Schedule a Call
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { 
              href: "mailto:yacapinton@gmail.com",
              icon: <FaEnvelope />,
              label: "Email",
              text: "yacapinton@gmail.com",
            },
            {
              href: "https://www.linkedin.com/in/angel-hamelton-yacapin-2b8271304/",
              icon: <FaLinkedin />,
              label: "LinkedIn",
              text: "Professional Profile",
            },
            {
              href: "https://github.com/TonYacapin",
              icon: <FaGithub />,
              label: "GitHub",
              text: "View Code Repositories",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group bg-[#161B22] p-6 rounded-lg border border-[#30363D] hover:border-[#DC2626] hover:shadow-[0_0_18px_rgba(220,38,38,0.4)] transition-all duration-300"
            >
              <div className="bg-[#0D1117] p-4 rounded-full group-hover:bg-[#1F2937] transition-colors">
                <span className="text-3xl text-[#C9D1D9] group-hover:text-[#DC2626]">
                  {item.icon}
                </span>
              </div>
              <span className="text-lg mt-4 font-medium text-[#C9D1D9] group-hover:text-[#DC2626]">
                {item.label}
              </span>
              <span className="text-sm mt-2 text-[#8B949E] text-center">
                {item.text}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-auto bg-[#161B22] p-5 rounded-lg border border-[#30363D] hover:border-[#DC2626] hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all"
        >
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#DC2626] mt-1" />
              <div>
                <h4 className="font-medium text-[#C9D1D9] mb-1">Location</h4>
                <p className="text-[#8B949E]">
              Baguio City, Benguet, Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <FaClock className="text-[#DC2626] mt-1" />
              <div>
                <h4 className="font-medium text-[#C9D1D9] mb-1">Availability</h4>
                <p className="text-[#8B949E]">
                  Actively seeking opportunities • Replies within 24 hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
