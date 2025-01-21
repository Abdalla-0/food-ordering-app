import { Button } from "@/components/ui/button";
import {
  actionAddToCart,
  actionRemoveCartItem,
  actionRemoveFromCart,
} from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { ProductWithRelations } from "@/types/product";
import { Extra, Size } from "@prisma/client";

interface ChooseQuantityProps {
  quantity: number;
  selectedExtras: Extra[];
  selectedSize: Size;
  item: ProductWithRelations;
}
const ChooseQuantity = ({
  quantity,
  item,
  selectedExtras,
  selectedSize,
}: ChooseQuantityProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center flex-col gap-2 mt-4 w-full">
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => dispatch(actionRemoveCartItem({ id: item.id }))}
          disabled={quantity === 1}
        >
          -
        </Button>
        <div>
          <span className="text-black">{quantity} in cart</span>
        </div>
        <Button
          variant="outline"
          onClick={() =>
            dispatch(
              actionAddToCart({
                basePrice: item.basePrice,
                id: item.id,
                image: item.image,
                name: item.name,
                extra: selectedExtras,
                size: selectedSize,
              })
            )
          }
        >
          +
        </Button>
      </div>
      <Button
        size="sm"
        onClick={() => dispatch(actionRemoveFromCart({ id: item.id }))}
      >
        Remove
      </Button>
    </div>
  );
};

export default ChooseQuantity;
