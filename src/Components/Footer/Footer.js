import React from "react";
import './Footer.css'
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <div className="last-section">
                <div className="registration-form">
                    <div className="registration">
                        <h3>Join The Program</h3>
                        <div className="reg-button">
                            <button>Register Now</button>
                        </div>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer">
                        <div className="contacts">
                            <div className="contact-details">
                                <h4>Contact us</h4>
                                <div>
                                    <div><FaEnvelope className="icon first-icon" /><strong>Info@fictionentertainment.co.ke</strong></div>
                                    <div><FaPhone className="icon" /><strong>(+254)-720-924-885| 773-343-107</strong></div>
                                    <div><FaMapMarkerAlt className="icon" /><strong>712, East-End drive, Outer ring rd.</strong></div>
                                    <div><FaGlobe className="icon" /><strong>www.fictionentertainment.co.ke</strong></div>
                                </div>
                            </div>
                            <div className="pages">
                                <h4>thee 100 films project</h4>
                                <div>
                                    <div>Home</div>
                                    <div>About us</div>
                                    <div>Courses</div>
                                    <div>Partners</div>
                                    <div>Register</div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div>made with love @2023</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;