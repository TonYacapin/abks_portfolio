import { FaUser, FaLaptopCode, FaGraduationCap, FaCoffee } from "react-icons/fa";

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

          <div className="mt-6 w-full bg-[#161B22] p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#58A6FF] pl-3 text-[#C9D1D9]">Quick Facts</h3>
            <ul className="space-y-3 text-[#C9D1D9]">
              <li className="flex items-start">
                <FaLaptopCode className="mr-3 text-[#58A6FF] text-lg mt-1 flex-shrink-0" />
                <span>4+ years of full-stack development experience</span>
              </li>
              <li className="flex items-start">
                <FaGraduationCap className="mr-3 text-[#58A6FF] text-lg mt-1 flex-shrink-0" />
                <span>Information Technology graduate from Saint Mary's University, Bayombong, Philippines</span>
              </li>
              <li className="flex items-start">
                <FaCoffee className="mr-3 text-[#58A6FF] text-lg mt-1 flex-shrink-0" />
                <span>Based in Baguio City, Benguet, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-3/5 px-0 md:px-4">
          <h3 className="text-xl font-semibold mb-4 text-[#C9D1D9]">Hi, I'm Angel Hamelton O. Yacapin</h3>

          <p className="text-lg leading-relaxed text-[#C9D1D9] mb-6">
            I'm a software developer with a passion for building intuitive, high-performance applications that solve real-world problems.
            Specializing in the MERN stack (MongoDB, Express, React, Node.js), I create seamless experiences
            across both frontend and backend systems.
          </p>

          <p className="text-lg leading-relaxed text-[#C9D1D9] mb-6">
            My approach to development combines technical expertise with a strong focus on user experience.
            I believe that great code should not only work flawlessly behind the scenes but also translate to
            interfaces that users find engaging and easy to navigate.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#58A6FF] pl-3 text-[#C9D1D9]">What I Do</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#161B22] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-medium text-lg mb-2 text-[#58A6FF]">Frontend Development</h4>
                <p className="text-[#C9D1D9]">Creating responsive UIs with React, TypeScript, and modern CSS frameworks.</p>
              </div>

              <div className="bg-[#161B22] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-medium text-lg mb-2 text-[#58A6FF]">Backend Architecture</h4>
                <p className="text-[#C9D1D9]">Building scalable APIs and services with Node.js, Express, and MongoDB.</p>
              </div>

              <div className="bg-[#161B22] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-medium text-lg mb-2 text-[#58A6FF]">Database Design</h4>
                <p className="text-[#C9D1D9]">Designing efficient data models with both SQL and NoSQL databases.</p>
              </div>

              <div className="bg-[#161B22] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-medium text-lg mb-2 text-[#58A6FF]">DevOps Integration</h4>
                <p className="text-[#C9D1D9]">Implementing CI/CD pipelines and containerization with Docker.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}