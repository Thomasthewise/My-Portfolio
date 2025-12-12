"use client";

import SectionTitle from "../../components/SectionTitle";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing skills, projects, and contact info.",
    github: "https://github.com/Thomasthewise/my-portfolio",
    live: "/",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Raspberry Pi Dashboard",
    description: "Custom dashboard displaying sensors and project controls using Python and Tkinter.",
    github: "https://github.com/Thomasthewise/RaspberryPiDashboard",
    live: "#",
    tags: ["Python", "Tkinter", "Raspberry Pi"],
  },
  {
    title: "Web Scraper",
    description: "A fast and efficient web scraper using Python and BeautifulSoup.",
    github: "https://github.com/Thomasthewise/WebScraper",
    live: "#",
    tags: ["Python", "Web Scraping", "Automation"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 min-h-screen bg-transparent">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" subtitle="My Work" />

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="hover-scale bg-white/5 dark:bg-gray-800/50 shadow-lg rounded-xl p-6 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx2) => (
                  <span
                    key={idx2}
                    className="text-xs bg-indigo-100/20 dark:bg-indigo-700/30 text-indigo-200 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-400 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-400 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400 text-sm">
          © 2025 Thomas • Cape Town (GMT+2)
        </footer>
      </div>
    </section>
  );
}
