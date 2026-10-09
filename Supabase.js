(function () {
  const getConfigValue = (name, fallback) => {
    const value = window[name];
    return value && String(value).trim() ? String(value).trim() : fallback;
  };

  const SUPABASE_URL = getConfigValue('ST_CARELS_SUPABASE_URL', 'https://YOUR_PROJECT_REF.supabase.co');
  const SUPABASE_ANON_KEY = getConfigValue('ST_CARELS_SUPABASE_ANON_KEY', 'YOUR_SUPABASE_ANON_KEY');

  if (!window.supabase) {
    window.supabaseClient = null;
    console.error('❌ Supabase JS SDK not loaded. Ensure the CDN script is loaded before this file.');
    return;
  }

  if (SUPABASE_URL.includes('YOUR_PROJECT_REF') || SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY')) {
    window.supabaseClient = null;
    console.error('❌ Supabase is not configured. Set window.ST_CARELS_SUPABASE_URL and window.ST_CARELS_SUPABASE_ANON_KEY before loading Supabase.js.');
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
      const { data, error } = await window.supabaseClient.auth.signInWithPassword({
        email,
        password
      });

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
    },

    async select(table, columns = '*', filters = null) {
      let query = window.supabaseClient.from(table).select(columns);

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          query = query.eq(key, value);
        });
      }

      const { data, error } = await query;

      if (error) {
        console.error(`❌ Failed to fetch from ${table}:`, error.message);
        throw error;
      }

      return data;
    },

    async insert(table, row) {
      const { data, error } = await window.supabaseClient
        .from(table)
        .insert(row)
        .select();

      if (error) {
        console.error(`❌ Failed to insert into ${table}:`, error.message);
        throw error;
      }

      return data;
    },

    async update(table, row, matchColumn, matchValue) {
      const { data, error } = await window.supabaseClient
        .from(table)
        .update(row)
        .eq(matchColumn, matchValue)
        .select();

      if (error) {
        console.error(`❌ Failed to update ${table}:`, error.message);
        throw error;
      }

      return data;
    },

    async delete(table, matchColumn, matchValue) {
      const { data, error } = await window.supabaseClient
        .from(table)
        .delete()
        .eq(matchColumn, matchValue)
        .select();

      if (error) {
        console.error(`❌ Failed to delete from ${table}:`, error.message);
        throw error;
      }

      return data;
    }
  };

  console.log('✅ ST Carels Supabase helper ready');
})();
