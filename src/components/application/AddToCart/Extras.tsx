"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatters";

const Extras = () => {
  const extras = [
    { id: crypto.randomUUID(), extra: "Tomato", price: 4 },
    { id: crypto.randomUUID(), extra: "Onion", price: 8 },
    { id: crypto.randomUUID(), extra: "Cheese", price: 16 },
  ];
  return (
    <div className="grid gap-2">
      {extras.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <Checkbox id={item.id} />
          <Label
            htmlFor={item.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase"
          >
            {item.extra} {formatCurrency(item.price)}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default Extras;
