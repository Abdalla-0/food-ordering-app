import About from "@/components/application/About/About";
import Contact from "@/components/application/Contact/Contact";
import BestSellers from "./BestSellers";
import Hero from "./Hero";

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
