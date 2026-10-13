// =====================================
// ST CARELS SCHOOL MANAGEMENT SYSTEM
// SUPABASE DATABASE CONNECTION
// =====================================

// Replace these with your actual Supabase details
const SUPABASE_URL = "https://YOUR-PROJECT-ID.supabase.co";

const SUPABASE_ANON_KEY = "YOUR-SUPABASE-PUBLISHABLE-KEY";

// Check that Supabase library has loaded
if (!window.supabase) {
    console.error(
        "Supabase library not loaded. Check your HTML script links."
    );
} else {
    // Initialize Supabase client
    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );

    console.log("Supabase client initialized successfully!");
}