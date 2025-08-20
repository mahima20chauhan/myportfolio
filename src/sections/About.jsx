import MotionWrapper from "../components/MotionWrapper";
import { GraduationCap, User, CalendarDays } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 px-6 md:px-20">
      <MotionWrapper>
        {/* Main Heading Centered */}
        <h2 className="text-5xl font-bold mb-12 text-center text-text-primary dark:text-text-light">
           About <span className="text-amber-500 drop-shadow-[0_0_6px_rgba(255,191,0,0.7)] dark:text-amber-400 dark:drop-shadow-[0_0_6px_rgba(255,191,0,0.8)]">Me</span>
        </h2>


        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left Cards */}
          <div className="space-y-8 md:pl-8">
            {/* Education Card */}
            <div
              className="
                relative overflow-hidden rounded-2xl
                bg-white dark:bg-gray-900
                border border-amber-200/60 dark:border-amber-500/30
                p-6 shadow-md hover:shadow-amber-200/80 dark:hover:shadow-amber-500/20
                transition-all duration-300 transform
                hover:-translate-y-1 hover:scale-[1.01]
                group text-left
              "
            >
              {/* Glow ring on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-amber-300/60 dark:ring-amber-400/40 transition-all duration-300" />

              {/* Sparkles */}
              <span className="pointer-events-none absolute top-4 left-4 w-2 h-2 rounded-full bg-amber-300 opacity-0 group-hover:opacity-100 animate-ping" />
              <span className="pointer-events-none absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 animate-ping" />

              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={28} className="text-primary" />
                <h3 className="text-2xl font-semibold text-text-primary dark:text-text-light">
                  Education
                </h3>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold text-text-primary dark:text-text-light">
                  K.R. Mangalam University
                </h4>
                <p className="text-lg font-medium text-text-primary dark:text-text-light">
                  Bachelor of Computer Application (BCA)
                </p>
                <p className="text-text-secondary dark:text-gray-300">
                  Specialization: Artificial Intelligence &amp; Data Science
                </p>
                <p className="flex items-center gap-2 text-text-secondary dark:text-gray-300">
                  <CalendarDays size={18} className="text-primary" />
                  Aug 2023 – June 2026
                </p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  CGPA: 8.2 / 10
                </span>
              </div>
            </div>

            {/* About Me Card */}
            <div
              className="
                relative overflow-hidden rounded-2xl
                bg-white dark:bg-gray-900
                border border-amber-200/60 dark:border-amber-500/30
                p-6 shadow-md hover:shadow-amber-200/80 dark:hover:shadow-amber-500/20
                transition-all duration-300 transform
                hover:-translate-y-1 hover:scale-[1.01]
                group text-left
              "
            >
              {/* Glow ring on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-amber-300/60 dark:ring-amber-400/40 transition-all duration-300" />

              {/* Sparkles */}
              <span className="pointer-events-none absolute top-5 right-5 w-2 h-2 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 animate-ping" />
              <span className="pointer-events-none absolute bottom-4 left-8 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 animate-ping" />

              <div className="flex items-center gap-3 mb-4">
                <User size={28} className="text-primary" />
                <h3 className="text-2xl font-semibold text-text-primary dark:text-text-light">
                  About Me
                </h3>
              </div>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                I'm Kanishk Gulati, a BCA (AI &amp; Data Science) student at
                K.R. Mangalam University, passionate about technology, data, and
                intelligent systems. I enjoy exploring AI, machine learning, and
                data analytics to solve real-world problems and create meaningful
                digital experiences. With hands-on experience in web development
                and AI tools, I'm always eager to learn, grow, and collaborate on
                innovative ideas that make a difference.
              </p>
            </div>
          </div>

          {/* Right Side Photo */}
          <div className="mx-auto w-full max-w-md md:pr-8">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl animate-pulse"
                aria-hidden="true"
              />
              <img
                src="/aboutphoto.jpg"
                alt="About Mahima"
                className="relative rounded-3xl w-full aspect-[3/4] object-cover shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-95"
              />
            </div>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}
