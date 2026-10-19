// ST CARELS ACADEMY
// Supabase Database Connection

const SUPABASE_URL = "https://kgibditegnkghtvcmilc.supabase.co/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaWJkaXRlZ25rZ2h0dmNtaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NTkyMDUsImV4cCI6MjEwNjQzNTIwNX0.XE5j1guWFYnz6SwftIPFAh7lkFUVa8D5dXKkeuuNkPs";

// Check that the Supabase library is loaded
if (!window.supabase) {
    console.error("Supabase library is not loaded!");
} else {

    // Create the Supabase client
    window.db = window.supabase.createClient(
        SUPABASE_URL="https://kgibditegnkghtvcmilc.supabase.co/";
        SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaWJkaXRlZ25rZ2h0dmNtaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NTkyMDUsImV4cCI6MjEwNjQzNTIwNX0.XE5j1guWFYnz6SwftIPFAh7lkFUVa8D5dXKkeuuNkPs";
    );

    console.log("St Carels Supabase connected successfully!");
}