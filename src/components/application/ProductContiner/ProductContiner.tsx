import { ProductWithRelations } from "@/types/product";
import CardProduct from "../CardProduct/CardProduct";

const ProductContiner = ({ items }: { items: ProductWithRelations[] }) => {
  return items.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <CardProduct key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <p className="text-center text-accent">No Products Found</p>
  );
};

export default ProductContiner;
