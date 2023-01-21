import React from 'react';

const Projects = () => {

  return (
    <section className="projects section" id="projects">
                <h2 className="section__title">Projects</h2>
                <span className="section__subtitle">Most Recent Work</span>

                <div className="container section__border">
                    <div className="projects__container">
                            {/* ==================== PROJECT 1 ==================== */}
                            <div className="projects__content">
                                <img src="img/project1-pokedex.png" alt="projects" className="projects__img"/>

                                <div>
                                    <span className="projects__subtitle">JS Web App</span>
                                    <h1 className="projects__title">Pokedex Website</h1>

                                    <a href="https://gracesuhyun.github.io/pokedex/" className="projects__button">
                                        View Demo <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>

                            {/* ==================== PROJECT 2 ==================== */}
                            <div className="projects__content">
                                <img src="img/project2-api.PNG" alt="projects" className="projects__img"/>

                                <div>
                                    <span className="projects__subtitle">REST API</span>
                                    <h1 className="projects__title">myFlix API</h1>

                                    <a href="https://github.com/gracesuhyun/myFlix-API" className="projects__button">
                                        View Code <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>

                            {/* ==================== PROJECT 3 ==================== */}
                            <div className="projects__content">
                                <img src="img/project3-react.png" alt="projects" className="projects__img"/>

                                <div>
                                    <span className="projects__subtitle">React App</span>
                                    <h1 className="projects__title">myFlix Movie Application</h1>

                                    <a href="https://gracean-myflix.netlify.app/" className="projects__button">
                                        View Demo <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>

                            {/* ==================== PROJECT 4 ==================== */}
                            <div className="projects__content">
                                <img src="img/project4-meet.png" alt="projects" className="projects__img"/>

                                <div>
                                    <span className="projects__subtitle">Serverless PWA</span>
                                    <h1 className="projects__title">Meet App</h1>

                                    <a href="https://gracesuhyun.github.io/meet-app/" className="projects__button">
                                        View Demo <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>

                            {/* ==================== PROJECT 5 ==================== */}
                            <div className="projects__content">
                                <img src="img/project5-chat.png" alt="chat project" className="projects__img"/>

                                <div>
                                    <span className="projects__subtitle">React Native App</span>
                                    <h1 className="projects__title">Chat App for Mobile Devices</h1>

                                    <a href="https://github.com/gracesuhyun/chat-app" className="projects__button">
                                        View Code <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>

                            {/* ==================== PROJECT 6 ==================== */}
                            <div className="projects__content">
                                <img src="img/project6-angular.png" alt="angular project" className="projects__img"/>

                                <div>
                                    <span className="projects__subtitle">Angular Web App</span>
                                    <h1 className="projects__title">myFlix Movie Application</h1>

                                    <a href="https://gracesuhyun.github.io/myFlix-Angular-client/welcome" className="projects__button">
                                        View Demo <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
    </section>
  )
}

export default Projects