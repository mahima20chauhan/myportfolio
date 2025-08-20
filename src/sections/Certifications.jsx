import { Card, CardContent } from "../components/Card";
import {
  Award,
  Brain,
  GraduationCap,
  BarChart3,
  BookOpen,
  Code2,
  Globe,
} from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "IBM Certified in Data Analytics with Python – Data visualization & statistical analysis",
      org: "IBM",
      icon: <Award size={32} className="text-sky-500" />,
      accentRing: "ring-sky-300/60 dark:ring-sky-400/40",
    },
    {
      title: "Samatrix Foundation in AI & Data Science Analytics – Supervised & unsupervised learning",
      org: "Samatrix",
      icon: <Brain size={32} className="text-purple-500" />,
      accentRing: "ring-purple-300/60 dark:ring-purple-400/40",
    },
    {
      title: "Samatrix Data Analysis using Python – Data wrangling, cleaning & exploratory analysis",
      org: "Samatrix",
      icon: <GraduationCap size={32} className="text-indigo-500" />,
      accentRing: "ring-indigo-300/60 dark:ring-indigo-400/40",
    },
    {
      title: "Samatrix Foundation to AI, Data Science & Data Analytics – Core concepts & workflows",
      org: "Samatrix",
      icon: <BarChart3 size={32} className="text-amber-500" />,
      accentRing: "ring-amber-300/60 dark:ring-amber-400/40",
    },
    {
      title: "Samatrix Probability Modelling using Python – Probability & statistical decision-making",
      org: "Samatrix",
      icon: <BookOpen size={32} className="text-emerald-500" />,
      accentRing: "ring-emerald-300/60 dark:ring-emerald-400/40",
    },
    {
      title: "Samatrix R Programming for Data Science – Statistical computing, visualization & ML",
      org: "Samatrix",
      icon: <Code2 size={32} className="text-rose-500" />,
      accentRing: "ring-rose-300/60 dark:ring-rose-400/40",
    },
    {
      title: "Geekathon 24 KRMU (Participation/Certification)",
      org: "KRMU",
      icon: <Globe size={32} className="text-yellow-500" />,
      accentRing: "ring-yellow-300/60 dark:ring-yellow-400/40",
    },
  ];

  return (
    <section id="certifications" className="py-20 text-center scroll-mt-20">
      <h2 className="text-5xl font-bold mb-12 text-text-primary dark:text-text-light">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-20">
        {certs.map(({ title, org, icon, accentRing }, i) => (
          <Card
            key={i}
            className="
              group relative h-full flex
              bg-white/90 dark:bg-gray-900/80
              border border-amber-200 dark:border-amber-500/30
              rounded-2xl p-6 text-left
              shadow-md hover:shadow-amber-200/80 dark:hover:shadow-amber-500/20
              transition-all duration-300
              hover:-translate-y-1 hover:scale-[1.01]
              hover:bg-amber-50/80 dark:hover:bg-amber-500/10
            "
          >
            <span
              className={`pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ${accentRing} transition-all duration-300`}
            />
            <span className="pointer-events-none absolute top-3 right-4 w-1.5 h-1.5 rounded-full bg-amber-300 opacity-0 group-hover:opacity-100 animate-ping" />
            <span className="pointer-events-none absolute bottom-3 left-6 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 animate-ping" />

            <CardContent className="relative z-[1] p-0 m-0 flex flex-col gap-3">
              <div>{icon}</div>
              <h3 className="text-base font-semibold leading-snug text-text-primary dark:text-text-light">
                {title}
              </h3>
              <span
                className="
                  inline-block w-fit px-2.5 py-0.5 rounded-full text-xs font-semibold
                  bg-amber-100 text-amber-800
                  dark:bg-amber-900/40 dark:text-amber-300
                "
              >
                {org}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
