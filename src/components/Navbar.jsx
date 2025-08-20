import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const NAV_HEIGHT = 80; // px

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  // Track scroll position to highlight current section
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "experience", "achievements", "contact"];

    const onScroll = () => {
      const scrollPos = window.scrollY + NAV_HEIGHT + 4; // 4px buffer
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollPos) {
          current = id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative pb-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm";
  const activeStyles =
    "text-primary after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-primary";
  const inactiveStyles = "hover:text-primary";

  const navBtnCls = (id) =>
    `${linkBase} ${activeId === id ? activeStyles : inactiveStyles}`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1
          onClick={() => handleScroll("home")}
          className="cursor-pointer text-2xl font-bold text-primary select-none"
        >
          Kanishk Gulati
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-text-primary dark:text-text-light font-medium items-center">
          <li>
            <button type="button" onClick={() => handleScroll("home")} className={navBtnCls("home")}>
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("about")} className={navBtnCls("about")}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("skills")} className={navBtnCls("skills")}>
              Skills
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("projects")} className={navBtnCls("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("experience")} className={navBtnCls("experience")}>
              Experience
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("achievements")} className={navBtnCls("achievements")}>
              Achievements
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleScroll("contact")} className={navBtnCls("contact")}>
              Contact
            </button>
          </li>
          <li>
            <a
              href="/resume.pdf"
              download
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              Resume
            </a>
          </li>
          <DarkModeToggle />
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary dark:text-text-light text-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 flex flex-col gap-4 p-4 text-center text-text-primary dark:text-text-light font-medium">
          <li>
            <button
              type="button"
              onClick={() => {
                handleScroll("home");
                setIsOpen(false);
              }}
              className={navBtnCls("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleScroll("about");
                setIsOpen(false);
              }}
              className={navBtnCls("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleScroll("skills");
                setIsOpen(false);
              }}
              className={navBtnCls("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleScroll("projects");
                setIsOpen(false);
              }}
              className={navBtnCls("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleScroll("experience");
                setIsOpen(false);
              }}
              className={navBtnCls("experience")}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleScroll("achievements");
                setIsOpen(false);
              }}
              className={navBtnCls("achievements")}
            >
              Achievements
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleScroll("contact");
                setIsOpen(false);
              }}
              className={navBtnCls("contact")}
            >
              Contact
            </button>
          </li>
          <li>
            <a
              href="/resume.pdf"
              download
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
          <DarkModeToggle />
        </ul>
      )}
    </nav>
  );
}
