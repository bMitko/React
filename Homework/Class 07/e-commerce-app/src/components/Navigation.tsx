import { Link } from 'react-router-dom'
import logo from '../assets/1600w-bHiX_0QpJxE.png'
import './Navigation.css'

export const Header = () => {

    return (
        <nav className='navigation'>
            <div className='headerDiv'>
                <img src={logo} alt='Logo' className='headerLogo' />
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>All products</Link>
                </li>
                <li>
                    <Link to='/add-product'>Add Product</Link>
                </li>
            </ul>
        </nav>
    )
}