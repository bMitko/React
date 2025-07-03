import { createContext, useEffect, useState } from "react";
import type { AddProductProps, Product } from "../types/product.type";
import { ProductService } from "../services/product.service";

interface ProductContextType {
    category: string;
    categoryList: string[];
    productsByCategory: Product[];
    allProducts: Product[];
    fetchCategories: () => Promise<void>;
    fetchAllProducts: () => Promise<void>;
    fetchProductsByCategory: (categoryName: string) => Promise<void>;
    handleAddProduct: (addProductProps: AddProductProps) => Promise<void>;
    loading: boolean;
    error: string | null
}

const initialValues: ProductContextType = {
    category: "",
    categoryList: [],
    productsByCategory: [],
    allProducts: [],
    fetchCategories: async () => { },
    fetchAllProducts: async () => { },
    fetchProductsByCategory: async () => { },
    handleAddProduct: async () => { },
    loading: false,
    error: null
}

export const ProductContext = createContext(initialValues)

interface ProductsContextProvider {
    children: React.ReactNode
}

export const ProductContextProvider = (props: ProductsContextProvider) => {
    const [category, setCategory] = useState<string>("")
    const [categoryList, setCategoryList] = useState<string[]>([])
    const [productsByCategory, setProductsByCategory] = useState<Product[]>([])
    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchCategories = async () => {

        try {
            const data = await ProductService.getCategories()
            setCategoryList(data)

        }
        catch (error) {
            setError(`We're having some issues. Please try again shortly.`);
        }
    }

    const fetchAllProducts = async () => {
        setLoading(true)
        setError(null)

        try {

            const data = await ProductService.getAllProducts()
            setAllProducts(data)
        }
        catch (error) {
            setError('Error while fetching data!');
        }
        finally {
            setLoading(false)
        }
    }

    const fetchProductsByCategory = async (categoryName: string) => {
        setLoading(true)
        setError(null)

        try {
            setCategory(categoryName)
            const data = await ProductService.getProductsByCategory(categoryName)
            setProductsByCategory(data)
        }
        catch (error) {
            setError('Error while fetching data!');
        }
        finally {
            setLoading(false)
        }
    }

    const handleAddProduct = async (addProductProps: AddProductProps): Promise<void> => {
        setLoading(true)
        setError(null)

        try {
            const newProduct = await ProductService.AddProduct(addProductProps)

            if (newProduct) {
                setAllProducts([...allProducts, newProduct])
                if (newProduct.category === category) {
                    setProductsByCategory([...productsByCategory, newProduct]);
                }
            }
        }
        catch (error) {
            setError('Error while adding new product!');
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAllProducts()
        fetchCategories()
    }, [])

    return (
        <ProductContext.Provider
            value={{
                category,
                categoryList,
                productsByCategory,
                allProducts,
                fetchCategories,
                fetchAllProducts,
                fetchProductsByCategory,
                handleAddProduct,
                loading,
                error
            }} >
            {props.children}
        </ProductContext.Provider>
    )
}
