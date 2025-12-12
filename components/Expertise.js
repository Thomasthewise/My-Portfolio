"use client";

import React, { useEffect } from "react";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFlask,
  SiVercel,
  SiSupabase,
  SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// Inline VS Code icon
function VSCodeIcon({ className = "", ...props }) {
  return (
    <svg
      {...props}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path d="M2 4.5v15l7-4.5L16.5 20 22 16V8l-5.5-4L9 9 2 4.5z" />
    </svg>
  );
}

export default function Expertise({ className = "" }) {
  const icons = [
    { name: "Python", Icon: SiPython, color: "text-blue-500" },
    { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
    { name: "HTML", Icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", Icon: SiCss3, color: "text-sky-400" },
    { name: "React", Icon: SiReact, color: "text-cyan-400" },
    { name: "Django", Icon: SiDjango, color: "text-emerald-500" },
    { name: "Flask", Icon: SiFlask, color: "text-zinc-200" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "text-violet-500" },
    { name: "Git", Icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", Icon: SiGithub, color: "text-zinc-200" },
    { name: "Vercel", Icon: SiVercel, color: "text-white" },
    { name: "Supabase", Icon: SiSupabase, color: "text-emerald-500" },
    { name: "AWS", Icon: FaAws, color: "text-orange-400" },
    { name: "OpenAI", Icon: SiOpenai, color: "text-emerald-400" },
    { name: "VS Code", Icon: VSCodeIcon, color: "text-blue-600" },
  ];

  // Fade-in effect
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <section className={`mx-auto max-w-5xl px-4 py-8 fade-in ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="h-6 w-1 rounded bg-gradient-to-b from-indigo-500 to-purple-500" />
        <h2 className="text-xl font-semibold text-white">Skills I use</h2>
      </div>

      <p className="mb-6 text-sm text-zinc-400">
        Focused on modern web development — practical stacks I use for projects.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {icons.map((it, idx) => {
          const Icon = it.Icon;
          return (
            <div
              key={it.name + idx}
              className="hover-scale flex flex-col items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center shadow-sm transition-transform duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-zinc-950/50">
                <Icon className={`text-2xl ${it.color}`} aria-hidden="true" />
              </div>
              <span className="mt-1 text-xs text-zinc-300">{it.name}</span>
            </div>
          );
        })}
      </div>

      {/* CTA → scroll to projects */}
      <div className="mt-6 text-center fade-in">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-indigo-800 bg-indigo-900/30 px-4 py-2 text-indigo-300 hover:bg-indigo-900/50 transition-colors duration-300"
        >
          Explore my projects
        </a>
      </div>
    </section>
  );
}
