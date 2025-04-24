import Hero from "@/components/pages/Hero";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Header />
      <div className="mt-0 h-[750px] overflow-hidden">
        <Hero />
      </div>
    </main>
  );
}
