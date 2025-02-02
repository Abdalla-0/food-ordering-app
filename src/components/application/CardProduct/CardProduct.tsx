import { formatCurrency } from "@/lib/formatters";
import { ProductWithRelations } from "@/types/product";
import Image from "next/image";
import AddToCart from "../AddToCart/AddToCart";

const CardProduct = ({ item }: { item: ProductWithRelations }) => {
  return (
    <>
      <li
        key={item.id}
        className="p-6 rounded-lg text-center
    group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
      >
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

export default CardProduct;
