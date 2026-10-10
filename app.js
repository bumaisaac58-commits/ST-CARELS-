/* BUMATECH Setup Wizard
   1. Set SUPABASE_URL and SUPABASE_ANON_KEY below.
   2. Run supabase_setup.sql in your Supabase SQL Editor.
 */
const SUPABASE_URL = "https://kgibditegnkghtvcmilc.supabase.co"; // use the project root URL, not /rest/v1
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY"; // paste the public anon key from Supabase Project Settings > API
const STORAGE_KEY = "BUMATECH_setup";

const db = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
