# My Portfolio – Thomas Matla

A modern full-stack developer portfolio built with **Next.js 15**, **Supabase**, and **Vercel**.

This project showcases my skills, projects, and experience, and includes a protected admin dashboard for managing portfolio content.

---

## 🚀 Tech Stack

- **Next.js 15 (App Router)**
- **React**
- **Supabase** (Authentication & Database)
- **Tailwind CSS**
- **Vercel** (Deployment)

---

## ✨ Features

- Responsive personal portfolio website
- Dynamic projects with slug-based routing
- Admin dashboard with authentication
- CRUD operations for projects
- Contact section
- SEO-friendly structure
- Production-ready build

---

## 🔐 Authentication & Database

- Supabase handles:
  - User authentication
  - Secure access to the admin dashboard
  - Project data storage

Environment variables are configured securely using `.env.local` and Vercel Environment Variables.

---

## 🛠️ Getting Started (Local Development)

```bash
npm install
npm run dev
Visit:

arduino
Copy code
http://localhost:3000
📦 Build & Deployment
bash
Copy code
npm run build
npm run start
The project is deployed on Vercel.

📁 Project Structure (Simplified)
css
Copy code
app/
 ├─ dashboard/
 │   ├─ projects/
 │   │   └─ [slug]/page.js
 │   └─ skills/
 ├─ projects/
 │   └─ [slug]/page.js
 ├─ profile/
 ├─ contact/
 └─ layout.js

👤 Author
Thomas Matla
Software Developer
Cape Town, South Africa (GMT+2)



Content:
txt
Copy code
User-agent: *
Allow: /

Sitemap: https://your-vercel-domain.vercel.app/sitemap.xml
