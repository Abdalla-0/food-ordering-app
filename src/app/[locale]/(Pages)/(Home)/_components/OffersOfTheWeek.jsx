import ProductContiner from "@/components/application/ProductContiner/ProductContiner";
import MainHeading from "@/components/common/MainHeading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { getFakeOffersOfTheWeek, getFakeProducts } from "@/server/db/products";

const OffersOfTheWeek = async () => {
  const fakeOffersOfTheWeek = await getFakeOffersOfTheWeek();

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
        <ProductContiner items={fakeOffersOfTheWeek} />
      </div>
    </section>
  );
};

export default OffersOfTheWeek;
