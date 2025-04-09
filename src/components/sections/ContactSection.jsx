import { FaCommentDots, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactSection() {
  const contentClasses = "bg-[#0D1117] p-6 rounded-lg shadow-md w-full flex flex-col min-h-[calc(100vh-120px)]";
  const headingClasses = "text-2xl font-bold mb-6 pb-3 border-b border-[#161B22] flex items-center text-[#C9D1D9]";

  return (
    <div className={contentClasses}>
      <h2 className={headingClasses}>
        <FaCommentDots className="mr-3 text-[#58A6FF]" />
        Contact
      </h2>

      <div className="flex flex-col gap-8">
        <div className="text-[#C9D1D9] mb-6">
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#58A6FF] pl-3">Let's Connect</h3>
          <p className="mb-4">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a position to fill, or just want to discuss technology, I'd be happy to connect.
          </p>
          <p>
            Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <a href="mailto:yacapinton@gmail.com" className="flex flex-col items-center group bg-[#161B22] p-6 rounded-lg border border-[#30363D] hover:border-[#58A6FF] transition-all duration-300">
            <div className="bg-[#0D1117] p-4 rounded-full group-hover:bg-[#1F2937] transition-colors">
              <FaEnvelope className="text-3xl text-[#C9D1D9] group-hover:text-[#58A6FF]" />
            </div>
            <span className="text-lg mt-4 font-medium text-[#C9D1D9] group-hover:text-[#58A6FF]">Email</span>
            <span className="text-sm mt-2 text-[#8B949E] text-center">yacapinton@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/yacapin-angel-hamelton-o-2b8271304/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group bg-[#161B22] p-6 rounded-lg border border-[#30363D] hover:border-[#58A6FF] transition-all duration-300">
            <div className="bg-[#0D1117] p-4 rounded-full group-hover:bg-[#1F2937] transition-colors">
              <FaLinkedin className="text-3xl text-[#C9D1D9] group-hover:text-[#58A6FF]" />
            </div>
            <span className="text-lg mt-4 font-medium text-[#C9D1D9] group-hover:text-[#58A6FF]">LinkedIn</span>
            <span className="text-sm mt-2 text-[#8B949E] text-center">Professional Profile</span>
          </a>

          <a href="https://github.com/TonYacapin" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group bg-[#161B22] p-6 rounded-lg border border-[#30363D] hover:border-[#58A6FF] transition-all duration-300">
            <div className="bg-[#0D1117] p-4 rounded-full group-hover:bg-[#1F2937] transition-colors">
              <FaGithub className="text-3xl text-[#C9D1D9] group-hover:text-[#58A6FF]" />
            </div>
            <span className="text-lg mt-4 font-medium text-[#C9D1D9] group-hover:text-[#58A6FF]">GitHub</span>
            <span className="text-sm mt-2 text-[#8B949E] text-center">View Code Repositories</span>
          </a>
        </div>

        <div className="mt-auto bg-[#161B22] p-5 rounded-lg border border-[#30363D]">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="mb-4 md:mb-0">
              <h4 className="font-medium text-[#C9D1D9] mb-1">Location</h4>
              <p className="text-[#8B949E]">Baguio City, Benguet, Philippines</p>
            </div>

            <div>
              <h4 className="font-medium text-[#C9D1D9] mb-1">Availability</h4>
              <p className="text-[#8B949E]">Open to full-time opportunities and freelance projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}