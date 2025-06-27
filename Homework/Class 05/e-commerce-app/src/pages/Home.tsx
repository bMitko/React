import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import heroPic from '../assets/cb5bdab6-1c97-49e7-b4d6-e1a01c036162111.png'
import { Category } from "../types/product-category.enum"
import { Link } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"
import './Home.css'
import { ErrorMessage } from "../components/ErrorMessage"
import LoadingSpinner from "../components/LoadingSpinner"

export default function HomePage() {
    const context = useContext(ProductContext)
    const { category, productsByCategory, fetchProducts, loading, error } = context

    return (
        <>
            <div className="container" >
                <img src={heroPic} alt='Hero Image' className="heroPic" />
                <div className="buttonsDiv">
                    <div className="categoryBtns">
                        <button onClick={() => fetchProducts(Category.Electronics)}>Electronics</button>
                        <button onClick={() => fetchProducts(Category.Jewelery)}>Jewelery</button>
                        <button onClick={() => fetchProducts(Category.MensClothing)}>Men's clothing</button>
                        <button onClick={() => fetchProducts(Category.WomensClothing)}>Women's clothing</button>
                    </div>
                    <div className="allProductsBtn">
                        <button><Link to={'/products'}>All products</Link></button>
                    </div>
                </div>
            </div>
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            {category && !loading && !error && (
                <>
                    <div className="productsDesc">
                        <h2>Products</h2>
                        <h4>category: {category}</h4>
                    </div>

                    <div className="productList">
                        {productsByCategory.map((product) => {
                            return (
                                <ProductCard
                                    product={product}
                                    key={product.id}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}