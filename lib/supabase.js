import supabase from "@/lib/supabase"; // adjust path if needed

/**
 * Adds a new project to the database.
 * @param {Object} projectData - An object containing project info
 * @param {string} projectData.title - Title of the project
 * @param {string} projectData.description - Description of the project
 * @param {string} projectData.link - URL to live project
 * @returns {Promise<Object>} The newly created project object
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
 * Updates an existing project in the database.
 * @param {string} projectId - ID of the project to update
 * @param {Object} updatedData - Updated project information
 * @returns {Promise<Object>} The updated project object
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
 * Deletes a project from the database.
 * @param {string} projectId - ID of the project to delete
 * @returns {Promise<boolean>} True if deletion succeeded
 */
export async function deleteProject(projectId) {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);
  if (error) throw error;
  return true;
}

/**
 * Handles admin login for the portfolio panel.
 * @param {string} email - Admin email address
 * @param {string} password - Admin password
 * @returns {Promise<Object>} Admin user object if login successful
 */
export async function adminLogin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data.user;
}

/**
 * Submits contact form data to the Supabase database.
 * @param {Object} contactData - Form submission data
 * @param {string} contactData.name - Name of the submitter
 * @param {string} contactData.email - Email address
 * @param {string} contactData.message - Message content
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
