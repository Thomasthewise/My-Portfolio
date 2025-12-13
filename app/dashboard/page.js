'use client'; // required for useEffect and useState in Next 13 app directory

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { addProject } from '@/lib/supabase-functions'; // make sure path is correct
import supabase from '@/lib/supabase';

export default function ProjectsIndex() {
  const [projects, setProjects] = useState([]);

  // Fetch projects from Supabase on load
  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from('projects').select();
      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        setProjects(data);
      }
    }
    fetchProjects();
  }, []);

  // Quick function to add a project
  async function handleAddProject() {
    const newProject = await addProject({
      title: 'My Project',
      description: 'Demo',
      link: 'https://example.com'
    });
    setProjects([...projects, newProject]); // update state immediately
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>
      <button 
        onClick={handleAddProject} 
        className="mb-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Add Sample Project
      </button>
      <ul className="space-y-3">
        {projects.map(p => (
          <li key={p.id} className="border rounded p-3">
            <h3 className="font-semibold">{p.title}</h3>
            <Link href={`/dashboard/projects/${p.slug || p.id}`} className="text-sm text-indigo-500 hover:underline">
              Open
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
