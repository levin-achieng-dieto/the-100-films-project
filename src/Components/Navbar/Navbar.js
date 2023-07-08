import React from "react";
import "./Navbar.css"
import { Link as LinkScroll } from "react-scroll"

function Navbar() {
    return (
        <>
            <div className="section">
                <div className="navbar">
                    <logo className="logo">LOGO</logo>
                    <nav className="navContent">
                        <ul>
                            <li><LinkScroll activeClass="active" to="/home" spy={true} smooth="true" duration={500} offset={0}>HOME</LinkScroll></li>
                            <li><LinkScroll activeClass="active" to="aboutpage" spy={true} smooth="true" duration={500} offset={0}>ABOUT US</LinkScroll></li>
                            <li><LinkScroll activeClass="active" to="courses" spy={true} smooth="true" duration={500} offset={0}>COURSES</LinkScroll></li>
                            <li><LinkScroll activeClass="active" to="courses" spy={true} smooth="true" duration={500} offset={0}>PARTNERS</LinkScroll></li>
                            <li><LinkScroll activeClass="active" to="footer" spy={true} smooth="true" duration={1000} offset={0}>CONTACTS</LinkScroll></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Navbar;