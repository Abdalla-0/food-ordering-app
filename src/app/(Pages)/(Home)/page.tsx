import { db } from "@/lib/prisma";
import BestSellers from "./BestSellers";
import Hero from "./Hero";

export default async function Home() {
  const products = await db.product.findMany();
  console.log(products);

  return (
    <main>
      <Hero />
      <BestSellers />
    </main>
  );
}
