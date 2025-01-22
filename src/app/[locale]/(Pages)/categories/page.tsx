import ProductContiner from "@/components/application/ProductContiner/ProductContiner";
import { getProductsByCategory } from "@/server/db/products";

const Categories = async () => {
  const categories = await getProductsByCategory();

  return (
    <main>
      {categories.length > 0 ? (
        categories.map((category) => (
          <section key={category.id} className="section-gap">
            <div className="container text-center">
              <h1 className="text-primary font-bold text-4xl italic mb-6">
                {category.name}
              </h1>
              <ProductContiner items={category.products} />
            </div>
          </section>
        ))
      ) : (
        <p className="text-accent text-center py-20">No Products Found</p>
      )}
    </main>
  );
};

export default Categories;
