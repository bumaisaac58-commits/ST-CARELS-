(function () {
  const getConfigValue = (name, fallback) => {
    const value = window[name];
    return value && String(value).trim() ? String(value).trim() : fallback;
  };

  const SUPABASE_URL = getConfigValue('ST_CARELS_SUPABASE_URL', 'https://kgibditegnkghtvcmilc.supabase.co');
  const SUPABASE_ANON_KEY = getConfigValue('ST_CARELS_SUPABASE_ANON_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaWJkaXRlZ25rZ2h0dmNtaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NTkyMDUsImV4cCI6MjEwNjQzNTIwNX0.XE5j1guWFYnz6SwftIPFAh7lkFUVa8D5dXKkeuuNkPs');

  if (!window.supabase) {
    window.supabaseClient = null;
    console.error('❌ Supabase JS SDK not loaded. Ensure the CDN script is loaded before this file.');
    return;
  }

  if (!SUPABASE_URL || SUPABASE_URL.includes('/rest/v1')) {
    window.supabaseClient = null;
    console.error('❌ Invalid Supabase URL. Use the project root URL, not the /rest/v1 endpoint. Example: https://your-project.supabase.co');
    return;
  }

  if (!SUPABASE_ANON_KEY || !SUPABASE_ANON_KEY.includes('eyJ')) {
    window.supabaseClient = null;
    console.error('❌ Invalid Supabase anon key. Paste the real public key from Supabase Project Settings > API.');
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

(function () {
  if (!window.supabaseClient) {
    console.error('❌ Supabase client not initialized.');
    return;
  }

  window.stCarelsSupabase = {
    async signIn(email, password) {
      const { data, error } = await window.supabaseClient.auth.signInWithPassword({ email, password });

      if (error) {
        console.error('❌ Sign-in failed:', error.message);
        throw error;
      }

      console.log('✅ Signed in:', data?.user?.email);
      return data;
    },

    async signOut() {
      const { error } = await window.supabaseClient.auth.signOut();

      if (error) {
        console.error('❌ Sign-out failed:', error.message);
        throw error;
      }

      console.log('✅ Signed out successfully');
      return true;
    },

    async getSession() {
      const { data, error } = await window.supabaseClient.auth.getSession();

      if (error) {
        console.error('❌ Failed to get session:', error.message);
        throw error;
      }

      return data;
    },

    async getUser() {
      const { data: { user }, error } = await window.supabaseClient.auth.getUser();

      if (error) {
        console.error('❌ Failed to get user:', error.message);
        throw error;
      }

      return user;
    }
  };

  console.log('✅ ST Carels Supabase helper ready');
})();
