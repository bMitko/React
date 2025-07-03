export interface Product {
    id: number,
    title: string;
    price: number;
    category: string;
    image: string;
}

export interface AddProductProps {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface ProductWithId extends AddProductProps {
    id: number
}



