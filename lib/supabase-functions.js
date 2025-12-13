// lib/supabase-functions.js
import supabase from './supabase'; // make sure the path is correct

/**
 * Adds a new project to the database.
 * @param {Object} projectData - { title, description, link }
 * @returns {Promise<Object>} Newly created project
 */
export async function addProject(projectData) {
  const { data, error } = await supabase
    .from('projects')
    .insert([projectData])
    .select();
  if (error) throw error;
  return data[0];
}

/**
 * Updates an existing project
 * @param {string|number} projectId 
 * @param {Object} updatedData 
 * @returns {Promise<Object>} Updated project
 */
export async function updateProject(projectId, updatedData) {
  const { data, error } = await supabase
    .from('projects')
    .update(updatedData)
    .eq('id', projectId)
    .select();
  if (error) throw error;
  return data[0];
}

/**
 * Deletes a project
 * @param {string|number} projectId 
 * @returns {Promise<boolean>}
 */
export async function deleteProject(projectId) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', projectId);
  if (error) throw error;
  return true;
}

/**
 * Submits a contact form entry
 * @param {Object} contactData - { name, email, message }
 * @returns {Promise<Object>} Stored contact entry
 */
export async function submitContactForm(contactData) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([contactData])
    .select();
  if (error) throw error;
  return data[0];
}
