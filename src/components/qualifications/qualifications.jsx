import React from 'react';
import './qualifications.css';

const Qualifications = () => {
  return (
    <section className="qualification section" id="qualification">
                <h2 className="section__title">Qualifications</h2>
                <span className="section__subtitle">Education & Experience</span>

                <div className="qualification__container container grid section__border">
                    {/* ==================== QUALIFICATION 1 =================== */}
                    <div className="qualification__content">
                        <h3 className="qualification__title">
                            <i className="ri-book-mark-line"></i> Education
                        </h3>

                        <div className="qualification__info">
                            <div>
                                <h3 className="qualification__name">
                                    Web Development Program
                                </h3>
                                <span className="qualification__country">CareerFoundry</span>
                                <span className="year">2022</span>
                            </div>

                            <div>
                                <h3 className="qualification__name">
                                    B.S. Recreation Administration
                                </h3>
                                <span className="qualification__country">University of Minnesota</span>
                                <span className="year">2016 - 2020</span>
                            </div>
                        </div>
                    </div>

                    {/* ==================== QUALIFICATION 2 ==================== */}
                    <div className="qualification__content">
                        <h3 className="qualification__title">
                            <i className="ri-building-line"></i> Work
                        </h3>

                        <div className="qualification__info">
                            <div>
                                <h3 className="qualification__name">
                                    Office Manager
                                </h3>
                                <span className="qualification__country">Leonia Recreation Department</span>
                                <span className="year">2021 - 2022</span>
                            </div>
                            <div>
                                <h3 className="qualification__name">
                                    High School Math Tutor
                                </h3>
                                <span className="qualification__country">Self-Employed</span>
                                <span className="year">2020 - 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Qualifications