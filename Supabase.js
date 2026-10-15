// ====================================
// ST CARELS SCHOOL MANAGEMENT SYSTEM
// Supabase Database Connection
// ====================================

// Replace these with your actual Supabase details
const SUPABASE_URL = "https://kgibditegnkghtvcmilc.supabase.co/";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaWJkaXRlZ25rZ2h0dmNtaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NTkyMDUsImV4cCI6MjEwNjQzNTIwNX0.XE5j1guWFYnz6SwftIPFAh7lkFUVa8D5dXKkeuuNkPs";

// Initialize Supabase client
if (!window.supabase) {
    console.error("Supabase library not loaded. Check your HTML script links.");
} else {
    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL
        SUPABASE_ANON_KEY
    );

    console.log("Supabase client initialized successfully.");
}
