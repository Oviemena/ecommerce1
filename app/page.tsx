import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Navbar from "@/components/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <Hero />
      <Highlights />
    </main>
  );
}
