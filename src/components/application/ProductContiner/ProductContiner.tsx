/* eslint-disable @typescript-eslint/no-explicit-any */
import Product from "../Product/Product";

const ProductContiner = ({ items }: { items: any }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item: any) => (
        <Product key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ProductContiner;
