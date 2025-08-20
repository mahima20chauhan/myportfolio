import { Card, CardContent } from "../components/Card";
import {
  Users,
  Target,
  Trophy,
  Star,
  Flag,
} from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      big: "Vice Chair",
      sub: "Role",
      title: "K.R. Mangalam University CDC",
      desc: "Bridged academia & industry through corporate visits.",
      icon: <Users size={32} className="text-green-600 dark:text-green-400" />,
      accentRing: "ring-green-400",
      accentText: "text-green-600 dark:text-green-400",
      accentDotA: "bg-green-400",
    },
    {
      big: "Coordinator",
      sub: "Experience",
      title: "Corporate Visits & Tours",
      desc: "Coordinated industrial visits, expert sessions & networking events.",
      icon: <Target size={32} className="text-purple-600 dark:text-purple-400" />,
      accentRing: "ring-purple-400",
      accentText: "text-purple-600 dark:text-purple-400",
      accentDotA: "bg-purple-400",
    },
    {
      big: "2nd",
      sub: "Prize",
      title: "Cricket – GD Goenka Annual Fest 2024",
      desc: "Secured 2nd prize in inter-college cricket tournament.",
      icon: <Trophy size={32} className="text-orange-600 dark:text-orange-400" />,
      accentRing: "ring-orange-400",
      accentText: "text-orange-600 dark:text-orange-400",
      accentDotA: "bg-orange-400",
    },
    {
      big: "1st",
      sub: "Prize",
      title: "Nukkad Natak – SGT Aura 2024 (Halla Bol)",
      desc: "Won 1st prize in street play competition.",
      icon: <Star size={32} className="text-pink-600 dark:text-pink-400" />,
      accentRing: "ring-pink-400",
      accentText: "text-pink-600 dark:text-pink-400",
      accentDotA: "bg-pink-400",
    },
    {
      big: "2nd",
      sub: "Prize",
      title: "Cricket – DPG Annual Fest 2025",
      desc: "Achieved 2nd prize in inter-college cricket event.",
      icon: <Flag size={32} className="text-teal-600 dark:text-teal-400" />,
      accentRing: "ring-teal-400",
      accentText: "text-teal-600 dark:text-teal-400",
      accentDotA: "bg-teal-400",
    },
  ];

  const highlights = [
    { value: "Vice Chair", label: "Corporate Visits" },
    { value: "2", label: "Cricket Prizes" },
    { value: "1st", label: "Street Play Prize" },
    { value: "5+", label: "Major Achievements" },
  ];

  return (
    <section id="achievements" className="py-20 text-center scroll-mt-20">
      <h2 className="text-5xl font-bold mb-12 text-text-primary dark:text-text-light">
        Achievements{" "}
        <span className="text-amber-500 drop-shadow-[0_0_6px_rgba(255,191,0,0.7)] dark:text-amber-400 dark:drop-shadow-[0_0_6px_rgba(255,191,0,0.8)]">
          &amp; Highlights
        </span>
      </h2>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4 md:px-20">
        {achievements.map(
          (
            { big, sub, title, desc, icon, accentRing, accentText, accentDotA },
            i
          ) => (
            <Card
              key={i}
              className="
                group relative h-full flex flex-col text-left
                bg-white/90 dark:bg-gray-900/80
                border border-amber-200/60 dark:border-amber-500/30
                rounded-2xl p-6
                shadow-md hover:shadow-amber-200/80 dark:hover:shadow-amber-500/20
                transition-all duration-300
                hover:-translate-y-1 hover:scale-[1.01]
              "
            >
              {/* glow ring on hover */}
              <span
                className={`pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ${accentRing} transition-all duration-300`}
              />

              {/* sparkles */}
              <span
                className={`pointer-events-none absolute top-3 right-4 w-1.5 h-1.5 rounded-full ${accentDotA} opacity-0 group-hover:opacity-100 animate-ping`}
              />
              <span className="pointer-events-none absolute bottom-3 left-6 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 animate-ping" />

              <CardContent className="relative z-[1] p-0 m-0 flex flex-col gap-4">
                {/* icon */}
                <div>{icon}</div>

                {/* headline metric */}
                <div>
                  <p className={`text-3xl font-bold leading-none ${accentText}`}>
                    {big}
                  </p>
                  <p className="text-sm font-medium uppercase tracking-wide text-text-secondary dark:text-gray-300">
                    {sub}
                  </p>
                </div>

                {/* title */}
                <h3 className="text-lg font-semibold leading-snug text-text-primary dark:text-text-light">
                  {title}
                </h3>

                {/* desc */}
                <p className="text-sm leading-relaxed text-text-secondary dark:text-gray-300">
                  {desc}
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>

      {/* Key Highlights */}
      <div className="px-4 md:px-20">
        <h3 className="text-4xl font-bold mb-6 text-center text-text-primary dark:text-text-light">
          Key Highlights
        </h3>
        <Card
          className="
            relative group
            bg-primary/10 dark:bg-gray-900/80
            rounded-2xl shadow-lg hover:shadow-2xl transition-all
            p-8
          "
        >
          {/* subtle glow */}
          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-primary/40 transition-all duration-300" />
          {/* sparkles */}
          <span className="pointer-events-none absolute top-4 left-6 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 animate-ping" />
          <span className="pointer-events-none absolute bottom-6 right-10 w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 animate-ping" />

          <CardContent className="relative z-[1] p-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {highlights.map((h, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-primary">{h.value}</p>
                  <p className="text-text-secondary dark:text-gray-300 text-sm">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
