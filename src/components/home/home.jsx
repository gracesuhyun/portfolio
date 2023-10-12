import React from 'react';
import './home.css';


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid section__border">
          <div className="home__data grid">
            <h1 className="home__title">
              Hi, I'm Grace <br/>
              Fullstack Developer <br/>
              Based In New Jersey <br/>
            </h1>

            <div className="home__blob grid">
              <div className="home__profile">
                <img src="img/profile.png" alt="home profile"/>
              </div>

              <img src="img/shape-waves.svg" alt="" className="home__shape-waves"/>
              <img src="img/shape-circle.svg" alt="" className="home__shape-circle"/>
            </div>

            <ul className="home__social">
              <a href="www.linkedin.com/in/gracesuhyun" target="_blank" className="home__social-link">
                <i className="ri-linkedin-box-fill"></i>
              </a>

              <a href="https://github.com/gracesuhyun" target="_blank" rel="noreferrer" className="home__social-link">
                <i className="ri-github-fill"></i>
              </a>

              <a href="https://www.instagram.com/_gracean/" target="_blank" rel="noreferrer" className="home__social-link">
                <i className="ri-instagram-fill"></i>
              </a>
            </ul>
          </div>

          {/* ==================== HOME INFO 1 ==================== */}
          <div className="home__info">
            <div>
              <h3 className="home__info-title">
                  BIOGRAPHY
              </h3>
              <p className="home__info-description">
                  Hi, I'm Grace, a Fullstack Developer.
                  Passionate about connecting people to resources through efficient and user-friendly applications.
              </p>
            </div>

            <div>
              <h3 className="home__info-title">
                  CONTACT
              </h3>
              <p className="home__info-description">
                  New Jersey, USA <br/>
                  grace.contactform@gmail.com <br/>
                  347-509-7411 <br/>
              </p>
            </div>
          </div>

          {/* ==================== HOME INFO 2 ==================== */}
          <div className="home__info">
            <div>
              <h3 className="home__info-title">
                  COMPLETED PROJECTS
              </h3>
              <p className="home__info-number">
                  3+
              </p>
            </div>

            <div>
              <h3 className="home__info-title">
                  FULL-STACK PROJECTS
              </h3>
              <p className="home__info-number">
                  6+
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Home