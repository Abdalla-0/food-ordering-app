"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatters";
import { ProductWithRelations } from "@/types/product";

const Extras = ({ item }: { item: ProductWithRelations }) => {
  return (
    <div className="grid gap-2">
      {item.extras.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <Checkbox id={item.id} />
          <Label
            htmlFor={item.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase"
          >
            {item.name} {formatCurrency(item.price)}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default Extras;
