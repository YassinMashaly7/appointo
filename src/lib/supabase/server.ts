// lib/supabase/server.ts
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { type Database } from "@/types/supabase";

export const createServerSupabaseClient = () => {
  const cookieStore = cookies(); // ✅ called inside function
  return createServerComponentClient<Database>({ cookies: () => cookieStore });
};
