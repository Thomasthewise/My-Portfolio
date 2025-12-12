"use client";

import SectionTitle from "../../components/SectionTitle";
import {
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaMobileAlt,
} from "react-icons/fa";

export default function ExpertisePage() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description: "Building responsive, modern web interfaces using React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Creating scalable APIs and server-side logic using Node.js, Express, and Python.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Designing efficient relational and NoSQL databases for robust applications.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Optimization",
      description: "Ensuring seamless experiences on mobile devices with responsive layouts and performance tuning.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <SectionTitle title="Expertise" subtitle="What I Can Do" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <div className="text-indigo-500 text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <SectionTitle title="Experience" subtitle="Timeline of My Work" />
          <ul className="border-l-2 border-indigo-500 ml-4 mt-8 space-y-8">
            <li className="ml-6 relative">
              <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-1.5 top-1.5"></div>
              <p className="text-gray-800 dark:text-gray-100 font-semibold">2024 — IT Coding Student</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Started studying programming at UniCollege, focusing on Python and JavaScript.
              </p>
            </li>
            <li className="ml-6 relative">
              <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-1.5 top-1.5"></div>
              <p className="text-gray-800 dark:text-gray-100 font-semibold">2025 — Web & Raspberry Pi Projects</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Built web apps, portfolio projects, and Raspberry Pi hardware integrations.
              </p>
            </li>
            <li className="ml-6 relative">
              <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-1.5 top-1.5"></div>
              <p className="text-gray-800 dark:text-gray-100 font-semibold">Ongoing — Full Stack Development</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Continuing to enhance full-stack skills, focusing on scalable, professional solutions.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2025 Thomas • Cape Town (GMT+2)
      </footer>
    </section>
  );
}
