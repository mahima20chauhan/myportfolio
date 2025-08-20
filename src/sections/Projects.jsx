import { Card, CardContent } from "../components/Card";
import {
  MessageSquare,
  Newspaper,
  ShoppingBag,
  FileCheck2,
  Monitor,
  Eye,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Energy Consumption Prediction Model",
      description:
        "Built ML model using regression to predict energy usage.",
      stats: [
        { value: "ML", label: "Model" },
        { value: "Regression", label: "Algorithm" },
        { value: "Energy", label: "Focus" },
      ],
      tags: ["Machine Learning", "Regression", "Data Analysis"],
      headerClass: "from-fuchsia-500 to-fuchsia-600",
      icon: <MessageSquare size={24} className="text-white" />,
    },
    {
      title: "Cloud Computing Research Project",
      description:
        "Studied cloud architecture, scalability & security practices.",
      stats: [
        { value: "Cloud", label: "Domain" },
        { value: "Scalable", label: "Focus" },
        { value: "Secure", label: "Practice" },
      ],
      tags: ["Cloud", "Scalability", "Security"],
      headerClass: "from-red-500 to-red-600",
      icon: <Newspaper size={24} className="text-white" />,
    },
    {
      title: "MOOD MATE – AI Mental Health Chatbot",
      description:
        "NLP-based chatbot for mental well-being & stress management.",
      stats: [
        { value: "AI", label: "Chatbot" },
        { value: "NLP", label: "Tech" },
        { value: "Health", label: "Domain" },
      ],
      tags: ["NLP", "AI", "Mental Health"],
      headerClass: "from-amber-500 to-amber-600",
      icon: <ShoppingBag size={24} className="text-white" />,
    },
    {
      title: "E-Commerce Website (Sneakers)",
      description:
        "Full-stack website with filtering, authentication, cart & admin dashboard.",
      stats: [
        { value: "Full", label: "Stack" },
        { value: "Auth", label: "Feature" },
        { value: "Cart", label: "System" },
      ],
      tags: ["Full Stack", "E-Commerce", "Web Dev"],
      headerClass: "from-emerald-500 to-emerald-600",
      icon: <FileCheck2 size={24} className="text-white" />,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive personal site (HTML/Tailwind/React). Improved load speed by 25%; deployed on Vercel.",
      stats: [
        { value: "25%", label: "Faster Load" },
        { value: "100%", label: "Responsive" },
        { value: "Live", label: "Ready" },
      ],
      tags: ["HTML", "TailwindCSS", "React", "Vercel"],
      headerClass: "from-sky-500 to-sky-600",
      icon: <Monitor size={24} className="text-white" />,
    },
  ];

  return (
    <section id="projects" className="py-20 text-center scroll-mt-20">
      <h2 className="text-5xl font-bold mb-12 text-text-primary dark:text-text-light">
           Featured <span className="text-amber-500 drop-shadow-[0_0_6px_rgba(255,191,0,0.7)] dark:text-amber-400 dark:drop-shadow-[0_0_6px_rgba(255,191,0,0.8)]">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-[1.02] group bg-white dark:bg-gray-900 h-full flex flex-col"
          >
            {/* Sparkles Layer */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="absolute top-10 right-8 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
              <span className="absolute bottom-6 left-1/3 w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            </div>

            {/* Header Strip */}
            <div
              className={`p-4 flex items-center justify-between rounded-t-2xl bg-gradient-to-r ${project.headerClass}`}
            >
              <h3 className="text-white text-xl font-bold text-left max-w-[85%] leading-snug">
                {project.title}
              </h3>
              {project.icon}
            </div>

            {/* Body */}
            <CardContent className="p-6 rounded-b-2xl bg-white dark:bg-gray-900 text-left flex flex-col flex-1">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 text-sm font-semibold mb-4">
                {project.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-primary">{stat.value}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Btn */}
              <button className="mt-auto w-full py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                <Eye size={18} /> View Project
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
