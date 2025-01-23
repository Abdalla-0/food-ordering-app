import { ProductWithRelations } from "@/types/product";
import CardProduct from "../CardProduct/CardProduct";
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

const ProductContiner = async ({
  items,
}: {
  items: ProductWithRelations[];
}) => {

  const locale = await getCurrentLocale();
  const { noProductsFound } = await getTrans(locale);
  
  return items.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <CardProduct key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <p className="text-center text-accent">{noProductsFound}</p>
  );
};

export default ProductContiner;
