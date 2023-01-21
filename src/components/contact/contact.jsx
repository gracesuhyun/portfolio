import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
                <h2 className="section__title">Contact Me</h2>
                <span className="section__subtitle">Get in touch</span>

                <div className="contact__container container grid section__border">
                    <div className="contact__content">
                        <h3 className="contact__title">
                            <i className="ri-chat-smile-line"></i> Talk to me
                        </h3>

                        <div className="contact__info">
                            <div className="contact__data">
                                <span className="contact__data-title">Email</span>
                                <span className="contact__data-info">grace.contactform@gmail.com</span>
                                <a href="mailto:grace.contactform@gmail.com" target="_blank" className="contact__button" rel="noreferrer">
                                    Email me <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>

                            <div className="contact__data">
                                <span className="contact__data-title">Phone</span>
                                <span className="contact__data-info">(347) 509-7411</span>
                                <a href="tel:+13475097411" target="_blank" className="contact__button" rel="noreferrer">
                                    Call me <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>

                            <div className="contact__data">
                                <span className="contact__data-title">Instagram</span>
                                <span className="contact__data-info">@_gracean</span>
                                <a href="https://www.instagram.com/_gracean/" target="_blank" className="contact__button" rel="noreferrer">
                                    Write me <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact__content">
                        <h3 className="contact__title">
                            <i className="ri-send-plane-line"></i> Write me a message
                        </h3>

                        <form action="" className="contact__form" id="contact-form">
                            <div className="contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Name</label>
                                <input type="text" name="user-name" required placeholder="Full Name" className="contact__form-input" id="contact-name"/>
                            </div>

                            <div className="contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Email</label>
                                <input type="text" name="user-email" required placeholder="Email" className="contact__form-input" id="contact-email"/>
                            </div>

                            <div className="contact__form-div contact__form-area">
                                <label htmlFor="" className="contact__form-tag">Message</label>
                                <textarea name="user-project" placeholder="Write your message here..." id="contact-project" className="contact__form-input"></textarea>
                            </div>

                            <p className="contact__message" id="contact-message"></p>

                            <button type="submit" className="contact__button">
                                Submit <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
  )
}

export default Contact