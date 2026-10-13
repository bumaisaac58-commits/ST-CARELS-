// supabase.js

const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";

const { createClient } = supabase;

const supabaseClient = createClient(
SUPABASE_URL'https://kgibditegnkghtvcmilc.supabase.co/rest/v1/'
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaWJkaXRlZ25rZ2h0dmNtaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NTkyMDUsImV4cCI6MjEwNjQzNTIwNX0.XE5j1guWFYnz6SwftIPFAh7lkFUVa8D5dXKkeuuNkPs'
);