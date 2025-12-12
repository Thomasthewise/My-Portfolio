import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in environment.');
}

const supabase = createClient(url, anonKey);

(async function testAnon() {
  try {
    const res = await supabase.from('profiles').select('*').limit(1);
    console.log(JSON.stringify(res, null, 2));
  } catch (err) {
    console.error('Script error:', err);
  }
})();
