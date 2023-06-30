import React from "react";
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <div className="section">
                <div className="navbar">
                    <logo className="logo">LOGO</logo>
                    <nav className="navContent">
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>COURSES</li>
                            <li>PARTNERS</li>
                            <li>CONTACTS</li>
                            <li><button>Sign in</button></li>

                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Navbar;