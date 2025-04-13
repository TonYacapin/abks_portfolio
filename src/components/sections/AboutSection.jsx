import { FaUser, FaLaptopCode, FaGraduationCap, FaCoffee, FaFileDownload } from "react-icons/fa";

export default function AboutSection() {
  const contentClasses = "min-h-screen w-full flex flex-col p-6 md:p-10 bg-[#0D1117]";
  const headingClasses = "text-2xl font-bold mb-8 pb-3 border-b border-[#161B22] flex items-center text-[#C9D1D9]";

  return (
    <div className={contentClasses}>
      <h2 className={headingClasses}>
        <FaUser className="inline-block mr-3 text-[#58A6FF]" />
        <span>About Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 flex-grow">
        <div className="w-full md:w-2/5 flex flex-col items-center">
          <img
            src="/images/image.png"
            alt="Angel Hamelton Yacapin"
            className="rounded-lg shadow-xl object-cover border-4 border-[#161B22] hover:shadow-2xl transition-all duration-300 w-4/5 md:w-full"
          />

          <a
            href="/CV YACAPIN (2).pdf"
            download
            className="mt-4 bg-[#58A6FF] hover:bg-[#4d8dd8] text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center w-4/5 md:w-full"
          >
            <FaFileDownload className="mr-2" /> Download CV
          </a>

          <div className="mt-6 w-full bg-[#161B22] p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#58A6FF] pl-3 text-[#C9D1D9]">Quick Facts</h3>
            <ul className="space-y-3 text-[#C9D1D9]">
              <li className="flex items-start">
                <FaLaptopCode className="mr-3 text-[#58A6FF] text-lg mt-1 flex-shrink-0" />
                <span>4+ years of full-stack development experience</span>
              </li>
              <li className="flex items-start">
                <FaGraduationCap className="mr-3 text-[#58A6FF] text-lg mt-1 flex-shrink-0" />
                <span>BSc in Computer Science from Bulacan State University</span>
              </li>
              <li className="flex items-start">
                <FaCoffee className="mr-3 text-[#58A6FF] text-lg mt-1 flex-shrink-0" />
                <span>Passion for clean, efficient code and intuitive UIs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <div className="bg-[#161B22] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#58A6FF] pl-3 text-[#C9D1D9]">Who I Am</h3>
            <p className="text-[#C9D1D9] mb-4">
              I'm a passionate Full Stack Developer based in the Philippines with a strong foundation in both frontend and backend technologies. My journey in software development began during my university years and has evolved into a career built on continuous learning and problem-solving.
            </p>
            <p className="text-[#C9D1D9] mb-4">
              I specialize in building robust web applications using modern JavaScript frameworks like React and Next.js on the frontend, paired with Node.js and Express on the backend. I'm particularly interested in creating intuitive user experiences that solve real-world problems.
            </p>
            <p className="text-[#C9D1D9]">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming my next project idea.
            </p>
          </div>

          <div className="mt-6 bg-[#161B22] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#58A6FF] pl-3 text-[#C9D1D9]">My Approach</h3>
            <p className="text-[#C9D1D9] mb-4">
              I believe in writing clean, maintainable code that prioritizes both user experience and performance. My development philosophy centers around a few key principles:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#C9D1D9] mb-4">
              <li>Building with scalability and future maintenance in mind</li>
              <li>Embracing best practices and design patterns</li>
              <li>Prioritizing responsive design and accessibility</li>
              <li>Continuously testing and refining functionality</li>
              <li>Documenting code thoroughly for team collaboration</li>
            </ul>
            <p className="text-[#C9D1D9]">
              I'm constantly refining my skills and staying updated with the latest industry trends to ensure I can deliver the best possible solutions for every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}