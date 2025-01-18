import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import AddToCart from "../AddToCart/AddToCart";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Product = ({ item, key }: { item: any; key: number }) => {
  return (
    <>
      <li key={key}>
        <div className="relative w-48 h-48 mx-auto">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-xl my-3">{item.name}</h4>
            <strong className="text-accent">
              {formatCurrency(item.basePrice)}
            </strong>
          </div>
          <p className="text-gray-500 text-sm line-clamp-3">
            {item.description}
          </p>
        </div>
        <AddToCart item={item} />
      </li>
    </>
  );
};

export default Product;
