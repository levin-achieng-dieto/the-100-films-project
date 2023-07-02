import React from "react";
import './Homepage.css'
import slider02 from "../images/Slider02.png"
import logo from "../images/logo.png"


function Homepage() {
    return (
        <>
            <div className="section-one" id="/home">
                <div className="container">
                    <div className="sub-container">
                        <div className="first-line">
                            <hr></hr>
                        </div>

                        <div className="project">
                            <h1>THE 100 FILMS PROJECT</h1>
                            <p>A Youth Empowerment Initiative</p>
                        </div>
                        <hr></hr>
                        <div className="project-description">
                            <p>This Project is a groundbreaking initiative that has emerged from collaborative</p>
                            <p>partnership between African Fiction Academy, Fiction Entertainment and 416</p>
                            <p>Production, to inspire talented individual by providing opportuinities</p>
                            <p>and intensive hands-on training in the actual film production.</p>
                            <div className="btn"><button>Register Now</button></div>
                        </div>
                        <div className="partners">
                            <div className="academy">
                                <img src={slider02} alt="African Academy" />
                            </div>
                            <div className="fiction">
                                <img src={logo} alt="" />
                            </div>
                            <div className="four-sixteen">
                                <h3><strong>416</strong>PROD</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;