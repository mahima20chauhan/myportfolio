import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio message from ${form.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      form.msg
        ? `${form.msg}\n\nFrom: ${form.name} <${form.email}>`
        : ""
    );
    window.location.href = `mailto:kanishkg.2005@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 px-6 md:px-20">
      {/* Heading + Tagline */}
      <div className="max-w-2xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-bold text-text-primary dark:text-text-light mb-4">
          Get in{" "}
          <span className="text-amber-500 drop-shadow-[0_0_6px_rgba(255,191,0,0.7)] dark:text-amber-400 dark:drop-shadow-[0_0_6px_rgba(255,191,0,0.8)]">
            Touch
          </span>
        </h2>

        <p className="text-lg text-text-secondary dark:text-gray-300 leading-relaxed">
          Have an idea, project, or collab in mind? Drop a message and let’s
          build something smart, useful, and a little bit magical with tech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Contact Info */}
        <div
          className="
            relative group
            bg-white/90 dark:bg-gray-900/80
            rounded-2xl p-8
            shadow-lg hover:shadow-2xl transition-all
            border border-amber-200/70 dark:border-amber-500/30
            text-left
          "
        >
          {/* sparkles */}
          <span className="pointer-events-none absolute top-4 right-8 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 animate-ping" />
          <span className="pointer-events-none absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 animate-ping" />

          <h3 className="text-3xl font-semibold mb-8 text-text-primary dark:text-text-light">
            Contact Information
          </h3>

          {/* Email */}
          <a
            href="mailto:kanishkg.2005@gmail.com"
            className="
              flex items-center gap-4 mb-4 p-4 rounded-xl
              bg-amber-50 dark:bg-amber-500/10
              border border-amber-200 dark:border-amber-500/30
              hover:bg-amber-100 dark:hover:bg-amber-500/20
              transition
            "
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-white">
              <Mail size={20} />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-text-primary dark:text-text-light">
                Email
              </span>
              <span className="text-sm text-text-secondary dark:text-gray-300">
                kanishkg.2005@gmail.com
              </span>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+91 8750495962"
            className="
              flex items-center gap-4 mb-4 p-4 rounded-xl
              bg-amber-50 dark:bg-amber-500/10
              border border-amber-200 dark:border-amber-500/30
              hover:bg-amber-100 dark:hover:bg-amber-500/20
              transition
            "
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-white">
              <Phone size={20} />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-text-primary dark:text-text-light">
                Phone
              </span>
              <span className="text-sm text-text-secondary dark:text-gray-300">
                +91 8750495962
              </span>
            </div>
          </a>

          {/* Location */}
          <div
            className="
              flex items-center gap-4 mb-8 p-4 rounded-xl
              bg-amber-50 dark:bg-amber-500/10
              border border-amber-200 dark:border-amber-500/30
              hover:bg-amber-100 dark:hover:bg-amber-500/20
              transition
            "
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-white">
              <MapPin size={20} />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-text-primary dark:text-text-light">
                Location
              </span>
              <span className="text-sm text-text-secondary dark:text-gray-300">
                Gurugram, Haryana
              </span>
            </div>
          </div>

          {/* divider */}
          <hr className="border-amber-200/60 dark:border-amber-500/30 mb-6" />

          <h4 className="text-2xl font-semibold mb-4 text-text-primary dark:text-text-light">
            Connect Through
          </h4>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kanishk-gulati-28297a305/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="
                p-3 rounded-full
                bg-amber-50 dark:bg-amber-500/10
                hover:bg-primary hover:text-white
                dark:hover:bg-primary
                transition
              "
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Kanishk1165"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="
                p-3 rounded-full
                bg-amber-50 dark:bg-amber-500/10
                hover:bg-primary hover:text-white
                dark:hover:bg-primary
                transition
              "
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:kanishkg.2005@gmail.com"
              title="Email"
              className="
                p-3 rounded-full
                bg-amber-50 dark:bg-amber-500/10
                hover:bg-primary hover:text-white
                dark:hover:bg-primary
                transition
              "
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/kanishkk___/?igsh=MWprYmRnMmM0eWJhZw%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="
                p-3 rounded-full
                bg-amber-50 dark:bg-amber-500/10
                hover:bg-primary hover:text-white
                dark:hover:bg-primary
                transition
              "
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT: Message Form */}
        <div
          className="
            relative group
            bg-white/90 dark:bg-gray-900/80
            rounded-2xl p-8
            shadow-lg hover:shadow-2xl transition-all
            border border-amber-200/70 dark:border-amber-500/30
            text-left
          "
        >
          {/* sparkles */}
          <span className="pointer-events-none absolute top-4 left-8 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 animate-ping" />
          <span className="pointer-events-none absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 animate-ping" />

          <h3 className="text-3xl font-semibold mb-8 text-text-primary dark:text-text-light">
            Send a Message
          </h3>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block mb-2 text-sm font-medium text-text-primary dark:text-text-light"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="
                  w-full p-3 rounded-lg
                  border border-gray-300 dark:border-gray-700
                  bg-gray-50 dark:bg-gray-800
                  text-text-primary dark:text-text-light
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block mb-2 text-sm font-medium text-text-primary dark:text-text-light"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="
                  w-full p-3 rounded-lg
                  border border-gray-300 dark:border-gray-700
                  bg-gray-50 dark:bg-gray-800
                  text-text-primary dark:text-text-light
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-msg"
                className="block mb-2 text-sm font-medium text-text-primary dark:text-text-light"
              >
                Message
              </label>
              <textarea
                id="contact-msg"
                name="msg"
                rows={4}
                value={form.msg}
                onChange={handleChange}
                className="
                  w-full p-3 rounded-lg
                  border border-gray-300 dark:border-gray-700
                  bg-gray-50 dark:bg-gray-800
                  text-text-primary dark:text-text-light
                  focus:outline-none focus:ring-2 focus:ring-primary
                  resize-none
                "
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                mt-2 px-6 py-3 rounded-lg font-semibold text-white
                bg-gradient-to-r from-primary to-amber-400
                hover:opacity-90 active:scale-95 transition
                flex items-center justify-center gap-2
              "
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
