import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">Languages, Frameworks, Libraries, etc.</span>

                <div className="skills__container container grid section__border">
                    <div className="skills__content">
                        {/* <h3 className="skills__title">
                            <i className="ri-braces-line"></i> Frontend Developer 
                        </h3> */}

                        <div className="skills__info">
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/figma-icon.svg" alt="Figma"/>
                                </div>

                                <h3 className="skills__name">Figma</h3>
                                <span className="skills_subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/html-1.svg" alt="HTML"/>
                                </div>

                                <h3 className="skills__name">HTML</h3>
                                <span className="skills_subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/css-3.svg" alt="CSS"/>
                                </div>

                                <h3 className="skills__name">CSS</h3>
                                <span className="skills_subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/logo-javascript.svg" alt="JavaScript"/>
                                </div>

                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills_subtitle">Intermediate</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/react-2.svg" alt="React"/>
                                </div>

                                <h3 className="skills__name">React</h3>
                                <span className="skills_subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/angular-icon.svg" alt="Angular"/>
                                </div>

                                <h3 className="skills__name">Angular</h3>
                                <span className="skills_subtitle">Intermediate</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/nextjs-icon.svg" alt="Python"/>
                                </div>

                                <h3 className="skills__name">Next.js</h3>
                                <span className="skills_subtitle">Intermediate</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/bootstrap-icon.svg" alt="Bootstrap"/>
                                </div>

                                <h3 className="skills__name">Bootstrap</h3>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/postgresql-icon.svg" alt="PostgreSQL"/>
                                </div>

                                <h3 className="skills__name">PostgreSQL</h3>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/git-icon.svg" alt="Git"/>
                                </div>

                                <h3 className="skills__name">Git</h3>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/mongodb-icon.svg" alt="MongoDB"/>
                                </div>

                                <h3 className="skills__name">MongoDB</h3>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="img/tailwind-icon.svg" alt="Git"/>
                                </div>

                                <h3 className="skills__name">Tailwind</h3>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default Skills