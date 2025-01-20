import { Extra, Size } from "@prisma/client";

export type CartItem = {
    id: string;
    name: string;
    image: string;
    basePrice: string;
    quantity?: number;
    size?: Size;
    extra?: Extra[]
}