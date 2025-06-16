// import Hero from "@/components/pages/Hero";
import Header from "@/components/shared/Header";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = createServerSupabaseClient();

  const { data } = await supabase.auth.getUser();

  console.log(data);

  return (
    <main className="relative flex min-h-screen flex-col">
      <Header />
      <div className="mt-0 h-[750px] overflow-hidden">{/* <Hero /> */}</div>
    </main>
  );
}
