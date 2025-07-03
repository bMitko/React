import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import type { AddProductProps } from "../types/product.type"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import './AddProduct.css'
import LoadingSpinner from "../components/LoadingSpinner"
import { ProductCard } from "../components/ProductCard"

export const AddProduct = () => {
  const navigate = useNavigate()
  const context = useContext(ProductContext)
  const { categoryList, handleAddProduct } = context

  const [successMessage, setSuccessMessage] = useState(false)
  const [newProduct, setNewProduct] = useState<AddProductProps | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset
  } = useForm<AddProductProps>({
    mode: 'onChange'
  })

  const onSubmit = async (data: AddProductProps) => {
    const newProduct = data
    await handleAddProduct(newProduct)
    setNewProduct(newProduct)
    setSuccessMessage(true)
    reset()
    setTimeout(() => {
      setSuccessMessage(false)
      navigate('/')
    }, 3000)

  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <h2>Add Product</h2>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          {...register("title", {
            required: true,
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters"
            }
          })}
        />
        {errors.title && <p className="error">{errors.title.message}</p>}

        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          step='0.01'
          {...register("price", {
            required: true,
            min: {
              value: 0.01,
              message: "Price must be a positive number"
            },
            valueAsNumber: true
          })}
        />
        {errors.price && <p className="error">{errors.price.message}</p>}

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={4}
          {...register("description", {
            required: true,
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters"
            },
            maxLength: {
              value: 500,
              message: "Description must be less than 500 characters"
            }
          })}
        />
        {errors.description && <p className="error">{errors.description.message}</p>}

        <label htmlFor="category">Category</label>
        <select
          id="category"
          {...register("category", {
            required: true
          })}
          defaultValue=""
        >
          <option value="" disabled>Pick category</option>
          {categoryList && categoryList.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="text"
          {...register("image", {
            required: true,
            pattern: {
              value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
              message: "Must be a valid image URL"
            }
          })}
        />
        {errors.image && <p className="error">{errors.image.message}</p>}

        <button disabled={!isValid}>{isSubmitting ? <LoadingSpinner /> : 'ADD'}</button>
        {successMessage && newProduct && (
          <div>
            <hr />
            <p className="success">Product was successfully added! ✓</p>
            <ProductCard product={newProduct} />
          </div>
        )}
      </form>
    </>
  )
}