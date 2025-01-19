import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatters";
import { ProductWithRelations } from "@/types/product";

const PickSize = ({ product }: { product: ProductWithRelations }) => {
  return (
    <RadioGroup defaultValue="comfortable">
      {product.sizes.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem value="default" id={item.id} />
          <Label htmlFor={item.id} className="uppercase">
            {item.name} {formatCurrency(item.price + product.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default PickSize;
