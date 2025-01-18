import ProductContiner from "@/components/application/ProductContiner/ProductContiner";
import MainHeading from "@/components/common/MainHeading";

const BestSellers = () => {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basePrice: 12,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basePrice: 15,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basePrice: 20,
      image: "/assets/images/pizza.png",
    },
  ];
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
