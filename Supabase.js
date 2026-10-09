(function () {
  // ============================================
  // ST CARELS SUPABASE INTEGRATION
  // ============================================

  const SUPABASE_URL = 'https://kgibditegnkghtvcmilc.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaWJkaXRlZ25rZ2h0dmNtaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NTkyMDUsImV4cCI6MjEwNjQzNTIwNX0.XE5j1guWFYnz6SwftIPFAh7lkFUVa8D5dXKkeuuNkPs';

  if (!window.supabase) {
    window.supabaseClient = null;
    console.error('❌ Supabase JS SDK not loaded. Ensure the CDN script is loaded before this file.');
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
    console.log('📍 Project URL:', SUPABASE_URL);

    // Initialize auth state listener
    window.supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        console.log('✅ User signed in:', session?.user?.email ?? 'unknown');
      } else if (event === 'SIGNED_OUT') {
        console.log('🔐 User signed out');
      } else if (event === 'TOKEN_REFRESHED') {
        console.log('🔄 Token refreshed');
      }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('❌ Failed to initialize Supabase:', message);
    window.supabaseClient = null;
  }
})();
