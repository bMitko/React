import './Footer.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

export const Footer = () => {
    return (
        <div className='footer'>
            <span>Powered by: React</span>
            <span>© {new Date().getFullYear()} <img className='logo' src={reactLogo} /><img className='logo' src={viteLogo} /></span>
        </div>
    )
};