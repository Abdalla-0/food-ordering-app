import About from "@/components/application/About/About";
import Contact from "@/components/application/Contact/Contact";
import BestSellers from "./_components/BestSellers";
import LatestProducts from "./_components/LatestProducts";
import OffersOfTheWeek from "./_components/OffersOfTheWeek";
import Hero from "./_components/Hero";

export default async function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <LatestProducts />
      <OffersOfTheWeek />
      <About />
      <Contact />
    </main>
  );
}
