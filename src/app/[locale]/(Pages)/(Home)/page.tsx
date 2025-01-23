import About from "@/components/application/About/About";
import Contact from "@/components/application/Contact/Contact";
import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";

export default async function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <About />
      <Contact />
    </main>
  );
}
