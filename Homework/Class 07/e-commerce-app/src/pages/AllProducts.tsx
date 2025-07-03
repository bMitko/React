import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCard } from "../components/ProductCard";
import './AllProducts.css'
import LoadingSpinner from "../components/LoadingSpinner";
import { ErrorMessage } from "../components/ErrorMessage";

export default function AllProductsPage() {
    const context = useContext(ProductContext)
    const { allProducts, loading, error } = context

    return (
        <>
            <div className="productsDesc">
                <h2>All products</h2>
            </div>
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && (<div className="productList">
                {allProducts.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product} />
                    )
                })}
            </div>
            )}
        </>
    )
}