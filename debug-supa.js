import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tskgtclbpoqowrplwqhn.supabase.co";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_ANON_KEY_HERE";

const supabase = createClient(url, key);

async function check() {
  const res = await supabase.from("profiles").select("*").limit(10);
  console.log(res);
}
check();
