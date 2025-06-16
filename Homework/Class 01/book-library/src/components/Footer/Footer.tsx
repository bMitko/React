import './Footer.css'
import reactLogo from '../../assets/react.svg'
export default function Footer() {
    return (
        <div className='footer'>
            <span>Powered by: React</span>
            <span>© {new Date().getFullYear()} <img className='logo' src={reactLogo}/></span>
        </div>
    )
}