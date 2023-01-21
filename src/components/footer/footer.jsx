import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Grace</h1>
                <p>Full Stack Developer</p>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <ul className="footer__social">
                    <a href="https://www.linkedin.com/in/gracesuhyun/" target="_blank" className="footer__social-link" rel="noreferrer">
                        <i className="ri-linkedin-box-fill"></i>
                    </a>

                    <a href="https://github.com/gracesuhyun" target="_blank" className="footer__social-link" rel="noreferrer">
                        <i className="ri-github-fill"></i>
                    </a>

                    <a href="https://www.instagram.com/_gracean/" target="_blank" className="footer__social-link" rel="noreferrer">
                        <i className="ri-instagram-fill"></i>
                    </a>
                </ul>

                {/* <span className="footer__copy">
                    &#169; Copyright Bedimcode. All rights reserved
                </span> */}
            </div>
        </footer>
  )
}

export default Footer