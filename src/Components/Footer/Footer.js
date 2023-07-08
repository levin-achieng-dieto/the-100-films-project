import React, { useState } from "react";
import './Footer.css'
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {



    return (
        <>
            <div className="last-section" id="contacts">

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
                        </div>
                        <div className="contacts">
                            <div className="footer-links">
                                <div>
                                    <h4>courses</h4>
                                </div>
                                <div className="helpful-links">
                                    <div>Pre-Production</div>
                                    <div>Production</div>
                                    <div>Post-production</div>
                                    <div>Management</div>
                                </div>
                            </div>
                            <div className="subscribe">
                                <div>
                                    <h4>Subscribe More Info</h4>
                                    <input type="text" placeholder=" Enter your Email" required></input>
                                </div>
                                <div>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;