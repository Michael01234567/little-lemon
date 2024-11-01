import logo from '../assets/Logo.png'
import { useState } from 'react'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            
            <a href='/' className="logo">
                <img scr={logo} alt='logo'/>
            </a>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href="Home">Home</a>
                </li>
                <li>
                    <a href="About">About</a>
                </li>
                <li>
                    <a href="Menu">Menu</a>
                </li>
                <li>
                    <a href="Reservations">Reservations</a>
                </li>
                <li>
                    <a href="Order Online">Order Online</a>
                </li>
                <li>
                    <a href="Login">Login</a>
                </li>
            </ul>

        </nav>
    )
   
}

export default Nav