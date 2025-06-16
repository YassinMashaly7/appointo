import { Database } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';

export const createAdminClient = () =>
  createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,       // Safe to expose
    process.env.SUPABASE_SERVICE_ROLE_KEY!,      // ⚠️ NEVER expose in browser
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
