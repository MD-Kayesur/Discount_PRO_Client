 import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const AboutDev = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
    <div className="w-96 bg-white shadow-xl rounded-lg p-5">
      <div className="flex flex-col items-center">
        <img
          src="https://example.com/my-avatar.png"
          alt="Avatar"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-xl font-semibold mt-2">ChatGPT</h2>
        <p className="text-gray-500">AI Language Model & Assistant</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "JavaScript", "TailwindCSS", "Node.js", "AI & ML", "API Development"].map((skill) => (
            <div key={skill} className="badge badge-primary px-3 py-1">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Projects</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Smart Chatbot System</li>
          <li>Automated Content Generator</li>
          <li>AI-Powered Code Assistant</li>
        </ul>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com" target="_blank" className="text-gray-600 hover:text-black text-xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-blue-600 text-xl">
          <FaLinkedin />
        </a>
        <a href="https://openai.com" target="_blank" className="text-gray-600 hover:text-green-600 text-xl">
          <FaGlobe />
        </a>
      </div>
      <button className="btn btn-primary w-full mt-4">Contact Me</button>
    </div>
  </div>
  );
};

export default AboutDev;
