(function () {
  // ============================================
  // ST CARELS SUPABASE INTEGRATION
  // ============================================
  
  const SUPABASE_URL = 'https://kgibditegnkghtvcmilc.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaWJkaXRlZ25rZ2h0dmNtaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NTkyMDUsImV4cCI6MjEwNjQzNTIwfQ.9mPr-Dn_5sV3KW8zJ7qL9nH6bK2mQ4cP8rT1vU5xY3A';

  if (!window.supabase) {
    window.supabaseClient = null;
    console.error('❌ Supabase JS SDK not loaded. Ensure CDN script is loaded before this file.');
    return;
  }

  try {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: 'pkce'
      }
    });

    console.log('✅ St Carels Supabase initialized successfully!');
    console.log('📍 Project URL: ' + SUPABASE_URL);

    // Initialize auth state listener
    window.supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log('✅ User signed in:', session?.user?.email);
      } else if (event === 'SIGNED_OUT') {
        console.log('🔐 User signed out');
      } else if (event === 'TOKEN_REFRESHED') {
        console.log('🔄 Token refreshed');
      }
    });

  } catch (error) {
    console.error('❌ Failed to initialize Supabase:', error.message);
    window.supabaseClient = null;
  }
})();
