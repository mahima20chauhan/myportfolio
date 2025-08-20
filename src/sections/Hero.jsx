import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaInstagram } from "react-icons/fa";
import MotionWrapper from "../components/MotionWrapper";

export default function Hero() {
  const [typewriterText] = useTypewriter({
    words: [
      "I create AI-driven solutions that make a real impact.",
      "Turning complex problems into smart digital products.",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      className="pt-32 pb-16 min-h-screen flex items-center justify-center text-center px-4"
    >
      <MotionWrapper className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Profile Picture */}
        <div
          className="mx-auto w-[280px] h-[280px] rounded-full overflow-hidden mb-6 border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <img
            src="/pfp.jpg"
            alt="Kanishk Gulati"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary dark:text-text-light mb-6">
             Hi, I'm <span className="text-amber-500 drop-shadow-[0_0_6px_rgba(255,191,0,0.7)] dark:text-amber-400 dark:drop-shadow-[0_0_6px_rgba(255,191,0,0.8)]">Kanishk Gulati</span>
        </h1>


        {/* Typewriter Text */}
        <p className="text-2xl md:text-3xl text-text-secondary dark:text-gray-300 mb-8">
          {typewriterText}
          <Cursor cursorStyle="|" />
        </p>

      {/* Social Buttons */}
      <div className="flex gap-4 mb-6 justify-center">
        <a
          href="https://github.com/Kanishk1165"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition"
          title="GitHub"
         >
         <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/kanishk-gulati-28297a305/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition"
         title="LinkedIn"
         >
         <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:kanishkg.2005@gmail.com|"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition"
         title="Email"
         >
         <FaEnvelope size={20} />
       </a>
       <a
          href="https://www.instagram.com/kanishkk___?igsh=MWprYmRnMmM0eWJhZw=="
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition"
         title="Instagram"
         >
         <FaInstagram size={20} />
        </a>
      </div>


        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-3 rounded hover:bg-primary hover:text-white transition"
          >
            <FaDownload size={18} />
            Download Resume
          </a>
        </div>
      </MotionWrapper>
    </section>
  );
}
