import MotionWrapper from "../components/MotionWrapper";
import {
  Briefcase,
  PenTool,
  Database,
  CalendarDays,
  MapPin,
  BadgeCheck,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      status: "Completed",
      role: "Data Science Intern",
      company: "SellerGeni",
      dates: "Jun – Jul 2025",
      location: "Remote",
      points: [
        "Developed data-driven solutions for e-commerce optimization.",
        "Worked with Python, SQL & Machine Learning techniques.",
      ],
      accent: {
        border: "border-amber-200/60 dark:border-amber-500/30",
        glow: "ring-amber-300/60 dark:ring-amber-400/40",
        badge:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
        iconWrap: "text-yellow-500",
        sparkA: "bg-yellow-400",
        sparkB: "bg-primary",
      },
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      status: "Ongoing",
      role: "Social Media Designer",
      company: "Digitallholic",
      dates: "Jan 2025 – Present",
      location: "Freelance",
      points: [
        "Created engaging brand content (posts, stories, ads).",
        "Designed using Canva & Adobe tools to boost online presence.",
      ],
      accent: {
        border: "border-amber-200/60 dark:border-amber-500/30",
        glow: "ring-sky-300/60 dark:ring-sky-400/40",
        badge:
          "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
        iconWrap: "text-sky-500",
        sparkA: "bg-sky-400",
        sparkB: "bg-primary",
      },
      icon: <PenTool className="w-5 h-5" />,
    },
    {
      status: "Completed",
      role: "Big Data & Data Science Bootcamp",
      company: "CDAC Noida",
      dates: "Jul – Aug 2024",
      location: "On-Site",
      points: [
        "Hands-on training in big data processing, ML & analytics.",
        "Worked on real-world aligned mini-projects & case studies.",
      ],
      accent: {
        border: "border-amber-200/60 dark:border-amber-500/30",
        glow: "ring-emerald-300/60 dark:ring-emerald-400/40",
        badge:
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
        iconWrap: "text-emerald-500",
        sparkA: "bg-emerald-400",
        sparkB: "bg-primary",
      },
      icon: <Database className="w-5 h-5" />,
    },
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <MotionWrapper className="py-20 px-6 md:px-20">
        <h2 className="text-5xl font-bold text-text-primary dark:text-text-light mb-12 text-center">
          Professional{" "}
          <span className="text-amber-500 drop-shadow-[0_0_6px_rgba(255,191,0,0.7)] dark:text-amber-400 dark:drop-shadow-[0_0_6px_rgba(255,191,0,0.8)]">
            Experience
          </span>
        </h2>

        {/* Grid: 2 per row */}
        <div className="grid gap-6 sm:grid-cols-2">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`
                relative group bg-white dark:bg-gray-900
                border ${exp.accent.border}
                rounded-xl p-5 shadow-md
                hover:shadow-amber-200/80 dark:hover:shadow-amber-500/20
                transition-all duration-300 transform
                hover:-translate-y-1 hover:scale-[1.01]
                flex flex-col text-left
              `}
            >
              {/* Glow ring on hover */}
              <span
                className={`pointer-events-none absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ${exp.accent.glow} transition-all duration-300`}
              />

              {/* Sparkles */}
              <span
                className={`pointer-events-none absolute top-3 left-3 w-1.5 h-1.5 rounded-full ${exp.accent.sparkA} opacity-0 group-hover:opacity-100 animate-ping`}
              />
              <span
                className={`pointer-events-none absolute bottom-5 right-5 w-1.5 h-1.5 rounded-full ${exp.accent.sparkB} opacity-0 group-hover:opacity-100 animate-ping`}
              />

              {/* Header Row */}
              <div className="flex items-center gap-2 mb-3">
                <span className={exp.accent.iconWrap}>{exp.icon}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${exp.accent.badge}`}
                >
                  <BadgeCheck className="w-3 h-3" />
                  {exp.status}
                </span>
              </div>

              {/* Role + Company */}
              <h3 className="text-lg font-semibold text-text-primary dark:text-text-light">
                {exp.role}
              </h3>
              <p className={`font-medium mt-1 ${exp.accent.iconWrap}`}>
                {exp.company}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 mt-2 text-sm text-text-secondary dark:text-gray-300">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  {exp.dates}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  {exp.location}
                </span>
              </div>

              {/* Description */}
              <ul className="mt-3 space-y-1.5 text-text-secondary dark:text-gray-300 leading-relaxed list-disc list-inside text-sm">
                {exp.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
}
