import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Navbar from "@/components/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Hero />
      <Highlights />
    </main>
  );
}
