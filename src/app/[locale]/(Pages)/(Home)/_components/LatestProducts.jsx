import ProductContiner from "@/components/application/ProductContiner/ProductContiner";
import MainHeading from "@/components/common/MainHeading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { getRandomProducts } from "@/server/db/products";

const LatestProducts = async () => {
  const randomProducts = await getRandomProducts(3);

  const locale = await getCurrentLocale();
  const { latestProducts } = (await getTrans(locale)).home;

  return (
    <section className="section-gap">
      <div className="container">
        <MainHeading
          className="text-center mb-4"
          subTitle={latestProducts.checkOut}
          title={latestProducts.OurLatestProducts}
        />
        <ProductContiner items={randomProducts} />
      </div>
    </section>
  );
};

export default LatestProducts;
