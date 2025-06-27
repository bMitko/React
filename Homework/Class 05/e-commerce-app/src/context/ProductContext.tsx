import { createContext, useState } from "react";
import { Category } from "../types/product-category.enum";
import type { Product } from "../types/product.type";
import { ProductService } from "../services/product.service";

interface ProductContextType {
    category: Category | string;
    productsByCategory: Product[];
    allProducts: Product[];
    fetchProducts: (categoryName?: Category | string) => Promise<void>;
    loading: boolean;
    error: string | null
}

const initialValues: ProductContextType = {
    category: "",
    productsByCategory: [],
    allProducts: [],
    fetchProducts: async () => {},
    loading: false,
    error: null
}

export const ProductContext = createContext(initialValues)

interface ProductsContextProvider {
    children: React.ReactNode
}

export const ProductContextProvider = (props: ProductsContextProvider) => {
    const [category, setCategory] = useState<Category | string>("")
    const [productsByCategory, setProductsByCategory] = useState<Product[]>([])
    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchProducts = async (categoryName?: Category | string) => {
        setLoading(true)
        setError(null)

        try{ 
            if (categoryName) {
            setCategory(categoryName)
            const data = await ProductService.getProductsByCategory(categoryName)
            setProductsByCategory(data)
        }
        else {
            const data = await ProductService.getAllProducts()
            setAllProducts(data)
        }
    }  
    catch(error){
        setError('Error while fetching data!');
    }
    finally {
        setLoading(false)
    }
    }


    return (
        <ProductContext.Provider
            value={{
                category,
                productsByCategory,
                allProducts,
                fetchProducts,
                loading,
                error
            }} >
            {props.children}
        </ProductContext.Provider>
    )
}

