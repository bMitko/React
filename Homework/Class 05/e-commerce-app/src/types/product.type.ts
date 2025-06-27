import type { Category } from "./product-category.enum";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: Category;
    image: string;
}



