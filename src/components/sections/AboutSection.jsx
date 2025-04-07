import { FaUser } from "react-icons/fa";

export default function AboutSection() {
  const contentClasses = "bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-120px)] w-full flex flex-col";
  const headingClasses = "text-xl font-bold mb-4 pb-2 border-b border-gray-200";
  const textClasses = "text-gray-700";

  return (
    <div className={contentClasses}>
      <h2 className={headingClasses}>
        <FaUser className="inline-block mr-2" />
        About Me
      </h2>
      <p className={textClasses}>
        Hi, I'm Angel Hamelton O. Yacapin
        I'm a software developer based in the Philippines with a focus on building modern web applications using the MERN stack, JavaScript, and TypeScript. I work across both frontend and backend to develop solutions that are clean, efficient, and scalable. I'm always looking to improve my skills and keep up with current development trends to build projects that are practical and maintainable.
      </p>
    </div>
  );
}