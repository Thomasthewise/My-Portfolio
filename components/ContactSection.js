'use client'

import { useState } from "react"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", form)
    setSubmitted(true)
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-white mb-6">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <a
              href="tel:+27714418242"
              className="flex items-center space-x-4 bg-white/5 shadow-lg rounded-xl p-5 hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <FaPhone className="text-indigo-500 text-2xl" />
              <span className="text-gray-200">071 441 8242</span>
            </a>

            {/* Emails */}
            <div className="flex flex-col space-y-2 bg-white/5 shadow-lg rounded-xl p-5 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <a
                href="mailto:bazo.matla@gmail.com"
                className="flex items-center space-x-4 hover:text-indigo-500 transition-colors"
              >
                <FaEnvelope className="text-indigo-500 text-2xl" />
                <span className="text-gray-200">bazo.matla@gmail.com</span>
              </a>
              <a
                href="mailto:thomas.thewise@blewteck.com"
                className="flex items-center space-x-4 hover:text-indigo-500 transition-colors"
              >
                <FaEnvelope className="text-indigo-500 text-2xl" />
                <span className="text-gray-200">thomas.thewise@blewteck.com</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col space-y-2 bg-white/5 shadow-lg rounded-xl p-5 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <a
                href="https://github.com/Thomasthewise"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-indigo-500 transition-colors"
              >
                <FaGithub className="text-indigo-500 text-2xl" />
                <span className="text-gray-200">Thomasthewise</span>
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-matla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-indigo-500 transition-colors"
              >
                <FaLinkedin className="text-indigo-500 text-2xl" />
                <span className="text-gray-200">Thomas Matla</span>
              </a>
              <a
                href="https://www.instagram.com/thomasthewise_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-indigo-500 transition-colors"
              >
                <FaInstagram className="text-indigo-500 text-2xl" />
                <span className="text-gray-200">@thomasthewise_</span>
              </a>
            </div>

            {/* Location → Google Maps */}
            <a
              href="https://www.google.com/maps/place/Westonaria,+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-white/5 shadow-lg rounded-xl p-5 hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <FaMapMarkerAlt className="text-indigo-500 text-2xl" />
              <span className="text-gray-200">Westonaria, South Africa</span>
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 shadow-lg rounded-xl p-8 space-y-6 transition-transform duration-300 hover:scale-105"
          >
            {submitted && <p className="text-green-500 font-semibold">Message sent successfully!</p>}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-gray-100"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-gray-100"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-gray-100"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
            <p className="text-gray-400 mt-4 text-center text-sm">
              I’m open to projects, collaborations, or just a friendly chat.
            </p>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          © 2025 Thomas • Cape Town (GMT+2)
        </footer>
      </div>
    </section>
  )
}
