import heroPic from '../assets/cb5bdab6-1c97-49e7-b4d6-e1a01c036162111.png'
import './Home.css'
import { ProductListByCategory } from "../components/ProductListByCategory"
import { CategoryButtons } from "../components/CategoryButtons"

export default function HomePage() {

    return (
        <>
            <div className="container" >
                <img src={heroPic} alt='Hero Image' className="heroPic" />
                <CategoryButtons />
                <ProductListByCategory />
            </div>
        </>
    )
}