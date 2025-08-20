import { Card, CardContent } from "../components/Card";
import {
  Code2,
  Brain,
  Globe,
  Wrench,
  Database as DbIcon,
  Heart,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} className="text-white" />,
      header: "from-purple-500 to-purple-600",
      bar: "bg-purple-500",
      valueColor: "text-purple-500",
      skills: [
        { name: "Python", level: 91 },
        { name: "C++", level: 85 },
        { name: "R", level: 70 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "AI/ML Frameworks",
      icon: <Brain size={24} className="text-white" />,
      header: "from-gray-700 to-gray-800",
      bar: "bg-gray-500",
      valueColor: "text-gray-500 dark:text-gray-400",
      skills: [
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 95 },
        { name: "Scikit-Learn", level: 75 },
        { name: "TensorFlow", level: 70 },
      ],
    },
    {
      title: "Domain",
      icon: <Globe size={24} className="text-white" />,
      header: "from-orange-500 to-orange-600",
      bar: "bg-orange-500",
      valueColor: "text-orange-500",
      skills: [
        { name: "NLP", level: 80 },
        { name: "Computer Vision", level: 85 },
        { name: "Data Modelling", level: 80 },
        { name: "Predictive Analytics", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} className="text-white" />,
      header: "from-green-500 to-green-600",
      bar: "bg-green-500",
      valueColor: "text-green-500",
      skills: [
        { name: "Git / GitHub", level: 80 },
        { name: "Streamlit", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Google Colab", level: 75 },
      ],
    },
    {
      title: "Database",
      icon: <DbIcon size={24} className="text-white" />,
      header: "from-amber-600 to-amber-700",
      bar: "bg-amber-500",
      valueColor: "text-amber-500",
      skills: [{ name: "MySQL", level: 90 }],
    },
    {
      title: "Soft Skills",
      icon: <Heart size={24} className="text-white" />,
      header: "from-rose-500 to-rose-600",
      bar: "bg-rose-500",
      valueColor: "text-rose-500",
      skills: [
        { name: "Teamwork", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Event Organization", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 text-center scroll-mt-20">
      <h2 className="text-5xl font-bold mb-12 text-text-primary dark:text-text-light">
        Skills <span className="text-amber-500 drop-shadow-[0_0_6px_rgba(255,191,0,0.7)] dark:text-amber-400 dark:drop-shadow-[0_0_6px_rgba(255,191,0,0.8)]">&amp; Expertise</span>
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20">
        {skillCategories.map((category, idx) => (
          <Card
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-[1.02] group bg-white dark:bg-gray-900"
          >
            {/* Sparkles */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span className="absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping"></span>
            </div>

            {/* Header Strip */}
            <div
              className={`p-4 flex items-center justify-between rounded-t-2xl bg-gradient-to-r ${category.header}`}
            >
              <h3 className="text-white text-xl font-bold text-left">
                {category.title}
              </h3>
              {category.icon}
            </div>

            {/* Body */}
            <CardContent className="p-6 rounded-b-2xl bg-white dark:bg-gray-900">
              {category.skills.map((skill, i) => (
                <div key={i} className="mb-4 text-left">
                  <div className="flex justify-between text-sm font-semibold mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className={category.valueColor}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`${category.bar} h-2 rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
