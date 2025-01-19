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
import { ProductWithRelations } from "@/types/product";
import Image from "next/image";
import Extras from "./Extras";
import PickSize from "./PickSize";
const AddToCart = ({ item }: { item: ProductWithRelations }) => {
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
            <PickSize product={item} />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any Extras?</Label>
            <Extras />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full h-10">
            Add To Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCart;
