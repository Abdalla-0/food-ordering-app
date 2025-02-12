import ProductContiner from "@/components/application/ProductContiner/ProductContiner";
import MainHeading from "@/components/common/MainHeading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { getBestSellers } from "@/server/db/products";

const BestSellers = async () => {
  
  const bestSellers = await getBestSellers(3);

  const locale = await getCurrentLocale();
  const { bestSeller } = (await getTrans(locale)).home;

  return (
    <section>
      <div className="container">
        <MainHeading
          className="text-center mb-4"
          subTitle={bestSeller.checkOut}
          title={bestSeller.OurBestSellers}
        />
        <ProductContiner items={bestSellers} />
      </div>
    </section>
  );
};

export default BestSellers;
