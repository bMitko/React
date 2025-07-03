import type { Product } from "../types/product.type"
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="category">{product.category}</p>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}