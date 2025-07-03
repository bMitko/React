import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import LoadingSpinner from "./LoadingSpinner"
import { ErrorMessage } from "./ErrorMessage"
import './CategoryButtons.css'

export const CategoryButtons = () => {
    const context = useContext(ProductContext)
    const { categoryList, fetchProductsByCategory, loading, error } = context


    return (
        <>  
            {loading && !categoryList && <LoadingSpinner />}
            {error && !categoryList && <ErrorMessage message={error} />}
            {categoryList && !loading && !error && (
                <div className="buttonsDiv">
                    <div className="categoryBtns">
                        {categoryList.map((category) => {
                            return (
                                <button key={category} onClick={() => fetchProductsByCategory(category)}>{category}</button>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}