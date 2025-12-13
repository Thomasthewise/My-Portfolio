// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

// --- Supabase Client ---
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// --- Projects CRUD ---

/**
 * Adds a new project to the database.
 * @param {Object} projectData - Project info
 * @returns {Promise<Object>} The newly created project
 */
export async function addProject(projectData) {
  const { data, error } = await supabase
    .from("projects")
    .insert([projectData])
    .select();
  if (error) throw error;
  return data[0];
}

/**
 * Updates an existing project.
 * @param {string} projectId
 * @param {Object} updatedData
 * @returns {Promise<Object>} Updated project
 */
export async function updateProject(projectId, updatedData) {
  const { data, error } = await supabase
    .from("projects")
    .update(updatedData)
    .eq("id", projectId)
    .select();
  if (error) throw error;
  return data[0];
}

/**
 * Deletes a project.
 * @param {string} projectId
 * @returns {Promise<boolean>} True if deleted
 */
export async function deleteProject(projectId) {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);
  if (error) throw error;
  return true;
}

// --- Admin Authentication ---

/**
 * Admin login
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} Admin user
 */
export async function adminLogin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data.user;
}

// --- Contact Form Submission ---

/**
 * Submits contact form data
 * @param {Object} contactData
 * @returns {Promise<Object>} Stored contact entry
 */
export async function submitContactForm(contactData) {
  const { data, error } = await supabase
    .from("contacts")
    .insert([contactData])
    .select();
  if (error) throw error;
  return data[0];
}
