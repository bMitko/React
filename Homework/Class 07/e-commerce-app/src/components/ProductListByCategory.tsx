import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import LoadingSpinner from "./LoadingSpinner"
import { ErrorMessage } from "./ErrorMessage"
import { ProductCard } from "./ProductCard"
import './ProductListByCategory.css'

export const ProductListByCategory = () => {
    const context = useContext(ProductContext)
    const { category, productsByCategory, loading, error } = context


    return (
        <>
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            {category && !error && (
                <>
                    <div className="productsDesc">
                        <h2>Products</h2>
                        <h4>category: {category}</h4>
                    </div>

                    <div className="productList">
                        {productsByCategory.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}