import ProductContiner from "@/components/application/ProductContiner/ProductContiner";
import MainHeading from "@/components/common/MainHeading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { getRandomProducts } from "@/server/db/products";

const OffersOfTheWeek = async () => {
  const randomProducts = await getRandomProducts(3);

  const locale = await getCurrentLocale();
  const { OffersOfTheWeek } = (await getTrans(locale)).home;

  return (
    <section className="section-gap">
      <div className="container">
        <MainHeading
          className="text-center mb-4"
          subTitle={OffersOfTheWeek.checkOut}
          title={OffersOfTheWeek.OffersOfTheWeek}
        />
        <ProductContiner items={randomProducts} />
      </div>
    </section>
  );
};

export default OffersOfTheWeek;
