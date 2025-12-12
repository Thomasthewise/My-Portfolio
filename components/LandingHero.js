"use client";

import { useEffect } from "react";

export default function LandingHero() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // stop observing once visible
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="fade-in min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        THOMAS
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl">
        SOFTWARE DEVELOPER — FRONTEND & FULL‑STACK WEB
      </p>
      <p className="text-sm md:text-base text-gray-400 max-w-xl">
        I design and develop software with a focus on efficiency, usability, and positive human impact.
      </p>
    </section>
  );
}
