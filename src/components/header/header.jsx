import React from 'react'
import './header.css';
import '../../index.css';

  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

  /*===== MENU SHOW =====*/
  /* Validate if constant exists */
  if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
    })
  }

  /*===== MENU HIDDEN =====*/
  /* Validate if constant exists */
  if(navClose){
    navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
    })
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link')

  const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))




const Header = () => {

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
            Grace
        </a>

        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="ri-home-3-line"></i> Home
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="ri-trophy-line"></i> Skills
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#qualification" className="nav__link">
                        <i className="ri-book-mark-line"></i> Qualification
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#projects" className="nav__link">
                        <i className="ri-image-line"></i> Projects
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="ri-chat-check-line"></i> Contact
                    </a>
                </li>
            </ul>

            <div className="nav__close" id="nav-close">
                <i className="ri-close-line"></i>
            </div>
        </div>

        <div className="nav__buttons">
            {/* Toggle button */}
            <div className="nav__toggle" id="nav-toggle">
                <i className="ri-menu-line"></i>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header