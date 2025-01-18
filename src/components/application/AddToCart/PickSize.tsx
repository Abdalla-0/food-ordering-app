/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatters";

const PickSize = ({ product }: { product: any }) => {
  const sizes = [
    { id: crypto.randomUUID(), size: "Small", price: 0 },
    { id: crypto.randomUUID(), size: "Medium", price: 4 },
    { id: crypto.randomUUID(), size: "Large", price: 8 },
  ];
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem value="default" id={item.id} />
          <Label htmlFor={item.id} className="uppercase">
            {item.size} {formatCurrency(item.price + product.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default PickSize;
