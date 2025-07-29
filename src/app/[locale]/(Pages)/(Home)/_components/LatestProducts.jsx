import ProductContiner from "@/components/application/ProductContiner/ProductContiner";
import MainHeading from "@/components/common/MainHeading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { getFakeLatestProducts } from "@/server/db/products";

const LatestProducts = async () => {
  const fakeLatestProducts = await getFakeLatestProducts();

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
        <ProductContiner items={fakeLatestProducts} />
      </div>
    </section>
  );
};

export default LatestProducts;
