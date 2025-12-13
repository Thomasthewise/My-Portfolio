import { submitContactForm } from "@/lib/supabase";

export async function POST(req) {
  try {
    const contactData = await req.json();
    const entry = await submitContactForm(contactData);
    return new Response(JSON.stringify(entry), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
