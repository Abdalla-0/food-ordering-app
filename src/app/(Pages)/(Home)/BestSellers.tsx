import ProductContiner from "@/components/application/ProductContiner/ProductContiner";
import MainHeading from "@/components/common/MainHeading";
import { getBestSellers } from "@/server/db/products";

const BestSellers = async () => {
  const bestSellers = await getBestSellers();

  return (
    <section>
      <div className="container">
        <MainHeading
          className="text-center mb-4"
          subTitle="checkout"
          title="Our Best Sellers"
        />
        <ProductContiner items={bestSellers} />
      </div>
    </section>
  );
};

export default BestSellers;
