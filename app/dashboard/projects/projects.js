'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from '@/lib/supabase';
import { addProject, submitContactForm } from '@/lib/supabase-functions';

export default function ProjectsIndex() {
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');
  const [loadingProjects, setLoadingProjects] = useState(true);

  // Fetch projects from Supabase on mount
  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from('projects').select();
      if (error) console.error('Error fetching projects:', error);
      else setProjects(data);
      setLoadingProjects(false);
    }
    fetchProjects();
  }, []);

  // Add a new sample project
  async function handleAddProject() {
    try {
      const newProject = await addProject({
        title: 'My Project',
        description: 'Demo project description',
        link: 'https://example.com'
      });
      setProjects([...projects, newProject]);
    } catch (err) {
      console.error('Error adding project:', err);
    }
  }

  // Handle contact form input changes
  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  // Submit contact form
  async function handleContactSubmit(e) {
    e.preventDefault();
    try {
      await submitContactForm(contact);
      setContactStatus('Message sent successfully!');
      setContact({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setContactStatus('Failed to send message.');
    }
    setTimeout(() => setContactStatus(''), 5000); // clear status after 5s
  }

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12">
      {/* Projects Section */}
      <div>
        <h1 className="text-2xl font-semibold mb-4">Projects</h1>
        <button 
          onClick={handleAddProject} 
          className="mb-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Add Sample Project
        </button>
        {loadingProjects ? (
          <p>Loading projects...</p>
        ) : (
          <ul className="space-y-3">
            {projects.map(p => (
              <li key={p.id} className="border rounded p-3">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-700">{p.description}</p>
                <a href={p.link} target="_blank" className="text-sm text-indigo-500 hover:underline mr-3">
                  Live Link
                </a>
                <Link href={`/dashboard/projects/${p.slug || p.id}`} className="text-sm text-indigo-500 hover:underline">
                  Open
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Contact Form Section */}
      <div className="border rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={contact.name} 
            onChange={handleChange} 
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={contact.email} 
            onChange={handleChange} 
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            value={contact.message} 
            onChange={handleChange} 
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Send Message
          </button>
        </form>
        {contactStatus && <p className="mt-2 text-sm text-gray-700">{contactStatus}</p>}
      </div>
    </div>
  );
}
