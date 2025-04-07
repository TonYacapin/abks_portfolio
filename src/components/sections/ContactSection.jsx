import { FaCommentDots, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const contentClasses = "bg-white p-6 rounded-lg shadow-md w-full flex flex-col";
  const headingClasses = "text-xl font-bold mb-6 pb-2 border-b border-gray-200";

  return (
    <div className={contentClasses}>
      <h2 className={headingClasses}>
        <FaCommentDots className="inline-block mr-2" />
        Contact
      </h2>
      
      <div className="flex flex-wrap align-top gap-8 my-6">
        <a href="mailto:yacapinton@gmailcom" className="flex flex-col items-center group">
          <div className="bg-gray-100 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
            <FaEnvelope className="text-3xl text-gray-700 group-hover:text-blue-500" />
          </div>
          <span className="text-xs mt-2 text-gray-600 group-hover:text-blue-500">Email</span>
        </a>
        
        <a href="https://www.linkedin.com/in/yacapin-angel-hamelton-o-2b8271304/" className="flex flex-col items-center group">
          <div className="bg-gray-100 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
            <FaLinkedin className="text-3xl text-gray-700 group-hover:text-blue-500" />
          </div>
          <span className="text-xs mt-2 text-gray-600 group-hover:text-blue-500">LinkedIn</span>
        </a>
        
        <a href="https://github.com/TonYacapin" className="flex flex-col items-center group">
          <div className="bg-gray-100 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
            <FaGithub className="text-3xl text-gray-700 group-hover:text-blue-500" />
          </div>
          <span className="text-xs mt-2 text-gray-600 group-hover:text-blue-500">GitHub</span>
        </a>
      </div>
    </div>
  );
}