import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatters";
import { ProductWithRelations } from "@/types/product";
import { Size } from "@prisma/client";

interface PickSizeProps {
  product: ProductWithRelations;
  selectedSize: Size;
  setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
}
const PickSize = ({
  product,
  selectedSize,
  setSelectedSize,
}: PickSizeProps) => {
  return (
    <RadioGroup defaultValue="comfortable">
      {product.sizes.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem
            value={selectedSize.name}
            checked={selectedSize.id === item.id}
            onClick={() => setSelectedSize(item)}
            id={item.id}
          />
          <Label htmlFor={item.id} className="uppercase">
            {item.name} {formatCurrency(item.price + product.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default PickSize;
