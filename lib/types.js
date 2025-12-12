/**
 * @fileoverview Shared JSDoc typedefs for the portfolio app.
 * Importing this file has no runtime effect; it just provides types to your editor and docs.
 */

/**
 * A portfolio project.
 * @typedef {Object} Project
 * @property {string} id - UUID of the project
 * @property {string} slug - URL-friendly identifier (e.g. "localmarket")
 * @property {string} title - Display title
 * @property {string=} summary - Short description
 * @property {Array.<string>=} tech_stack - Technology tags (e.g. ["Next.js","Supabase"])
 * @property {string=} cover_image_url - Public image URL
 * @property {string=} repo_url - Source code repository
 * @property {string=} demo_url - Live demo URL
 * @property {boolean} published - Whether this project is publicly visible
 * @property {string} created_at - ISO timestamp
 * @property {string} updated_at - ISO timestamp
 */

/**
 * A contact message submitted from the site.
 * @typedef {Object} ContactMessage
 * @property {string} id - UUID
 * @property {string} name
 * @property {string} email
 * @property {string} message
 * @property {string} created_at - ISO timestamp
 */

/**
 * Generic Result wrapper used by data functions.
 * @template T
 * @typedef {Object} Result
 * @property {T|null} data
 * @property {string|null} error
 */

// Export nothing (keeps this as a module for tooling)
export {}
