(function () {
  const DEFAULT_URL = 'https://YOUR_PROJECT_ID.supabase.co';
  const DEFAULT_KEY = 'YOUR_SUPABASE_PUBLISHABLE_KEY';

  if (!window.supabase) {
    window.supabaseClient = null;
    return;
  }

  const SUPABASE_URL ='https://kgibditegnkghtvcmilc.supabase.co/rest/v1/'window.SUPABASE_URL || DEFAULT_URL;
  const SUPABASE_PUBLISHABLE_KEY = window.SUPABASE_PUBLISHABLE_KEY || DEFAULT_KEY;

  if (SUPABASE_URL === DEFAULT_URL || SUPABASE_PUBLISHABLE_KEY === DEFAULT_KEY) {
    console.warn('Supabase credentials are not configured yet. The app is running in demo mode.');
    window.supabaseClient = null;
    return;
  }

  window.supabaseClient ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnaWJkaXRlZ25rZ2h0dmNtaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA4NTkyMDUsImV4cCI6MjEwNjQzNTIwNX0.XE5j1guWFYnz6SwftIPFAh7lkFUVa8D5dXKkeuuNkPs' window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });

  console.log('St Carels Supabase connection initialized.');
})();