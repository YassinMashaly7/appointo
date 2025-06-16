import { supabase } from "@/lib/supabase/supabase";

export const signUpNewUser = async ({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}) => {
  const { data, error } = await supabase.auth.signUp({
    email: email.toLowerCase(),
    password: password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
      data: {
        username: username,
      }
    }
  });

  if (error) {
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      name: error.name,
      stack: error.stack
    });
    return { success: false, error };
  }

  return { success: true, data };
};