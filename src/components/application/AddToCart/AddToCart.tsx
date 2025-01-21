"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatters";
import { actionAddToCart, selectCartItems } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProductWithRelations } from "@/types/product";
import { Extra, ProductSizes, Size } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import Extras from "./Extras";
import PickSize from "./PickSize";
import { getItemQuantity } from "@/lib/cart";
import ChooseQuantity from "../ChooseQuantity/ChooseQuantity";
const AddToCart = ({ item }: { item: ProductWithRelations }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);
  const quantity = getItemQuantity(item.id, cart);
  const defaultSize =
    cart.find((element) => element.id === item.id)?.size ||
    item.sizes.find((size) => size.name === ProductSizes.SMALL);
  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!);
  const defaultExtras =
    cart.find((element) => element.id === item.id)?.extra || [];
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>(defaultExtras);

  let totalPrice = item.basePrice;
  if (selectedSize) {
    totalPrice += selectedSize.price;
  }
  if (selectedExtras.length > 0) {
    for (const extra of selectedExtras) {
      totalPrice += extra.price;
    }
  }

  const handleAddToCart = () => {
    dispatch(
      actionAddToCart({
        id: item.id,
        name: item.name,
        image: item.image,
        basePrice: item.basePrice,
        size: selectedSize,
        extra: selectedExtras,
      })
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="mt-4 text-white rounded-full !px-8"
        >
          AddToCart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className="items-center">
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>{item.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size">Pick your size</Label>
            <PickSize
              product={item}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any Extras?</Label>
            <Extras
              item={item}
              selectedExtras={selectedExtras}
              setSelectedExtras={setSelectedExtras}
            />
          </div>
        </div>
        <DialogFooter>
          {quantity === 0 ? (
            <Button
              type="submit"
              className="w-full h-10"
              onClick={() => handleAddToCart()}
            >
              Add To Cart {formatCurrency(totalPrice)}
            </Button>
          ) : (
            <ChooseQuantity
              quantity={quantity}
              item={item}
              selectedExtras={selectedExtras}
              selectedSize={selectedSize}
            />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCart;
