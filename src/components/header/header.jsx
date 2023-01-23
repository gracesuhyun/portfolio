import React from 'react';
import {useRef} from 'react';
import './header.css';



const Header = () => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

  return (

    <header>
        <h3>
            <a href="index.html" className="nav__logo">
                Grace
            </a>
        </h3>

        <nav ref={navRef}>
            <a href="#home" className="nav__link active-link">
                <i className="ri-home-3-line"></i> Home
            </a>

            <a href="#skills" className="nav__link">
                <i className="ri-trophy-line"></i> Skills
            </a>

            <a href="#qualification" className="nav__link">
                <i className="ri-book-mark-line"></i> Qualification
            </a>

            <a href="#projects" className="nav__link">
                <i className="ri-image-line"></i> Projects
            </a>

            <a href="#contact" className="nav__link">
                <i className="ri-chat-check-line"></i> Contact
            </a>

            <div className="nav-btn nav-close" onClick={showNavBar}>
                <i className="ri-close-line"></i>
            </div>
        </nav>

        <div className="nav-btn" onClick={showNavBar}>
            <i className="ri-menu-line"></i>
        </div>
    </header>
  )
}

export default Header