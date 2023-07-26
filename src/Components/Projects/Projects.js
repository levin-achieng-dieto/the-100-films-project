import React from "react";
import "./Projects.css";
import Portfolio02 from "../images/Portfolio02.png"
import Portfolio03 from "../images/Portfolio03.png"
import Portfolio04 from "../images/Portfolio04.png"
import Portfolio05 from "../images/Portfolio05.png"


function Projects() {


    return (
        <div className="our-work">
            <div className="work-container">
                <h1>Our work</h1>
                <div className="work-samples">
                    <div>
                        <a href="https://vimeo.com/449089650">
                            <img src={Portfolio02} alt="Fiction entertainment" />
                            <h4>First showreel</h4>
                            <p>Circa. 2017- 2019</p>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={Portfolio03} alt="Fiction entertainment" />
                            <h4>Second showreel</h4>
                            <p>Circa. 2020-2022</p>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={Portfolio04} alt="Fiction entertainment" />
                            <h4>Third showreel</h4>
                            <p>CNC Laser Cut.</p>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src={Portfolio05} alt="Fiction entertainment" />
                            <h4>Forth Showreel</h4>
                            <p>Madaraka Day Paintball.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects