import React from "react";
import './Courses.css'
import Academy from "../images/My project.png"
import Fiction from "../images/Slider03.png"


function Courses() {
    return (
        <>
            <div className="section-three">
                <div className="container-three">
                    <div class="courses">
                        <div class="pre-production course-container">
                            <h3>Pre-Production</h3>
                            <ul>
                                <li>Script Breakdown</li>
                                <li>Budgeting</li>
                                <li>Location Scouting</li>
                                <li>Casting</li>
                                <li>Script Rehearsals</li>
                                <li>Costumes and Wardrobe</li>
                                <li>Production Design</li>
                            </ul>
                        </div>
                        <div class="production course-container">
                            <h3>Production</h3>
                            <ul>
                                <li>Directing</li>
                                <li>Production Management</li>
                                <li>Makeup and Hairdressing</li>
                                <li>Cinematography</li>
                                <li>Sound Design</li>
                                <li>Production Lighting and Technical</li>
                            </ul>
                        </div>
                        <div class="post-production course-container">
                            <h3>Post production</h3>
                            <ul>
                                <li>Directing</li>
                                <li>Production Design and Management</li>
                                <li>Makeup and Hairdressing</li>
                                <li>Cinematography</li>
                                <li>Script Breakdown</li>
                                <li>Sound Design</li>
                                <li>Acting</li>
                                <li>Editing</li>
                                <li>Production Carpentry</li>
                                <li>Production Lighting and Technical</li>
                                <li>Video Production</li>
                                <li>Photography</li>
                            </ul>
                        </div>
                        <div class="management course-container">
                            <h3>Management</h3>
                            <ul>
                                <li>Directing</li>
                                <li>Production Design and Management</li>
                                <li>Makeup and Hairdressing</li>
                                <li>Cinematography</li>
                                <li>Script Breakdown</li>
                                <li>sound Design</li>
                                <li>Acting</li>
                                <li>Editing</li>
                                <li>Production Carpentry</li>
                                <li>Production Lighting and Technical</li>
                                <li>Video Production</li>
                                <li>Photography</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="partners-contribution">
                    <div className="fiction-academy">
                        <div className="academy-short-desc">
                            <h5>African Fiction Academy</h5>
                            <p>The African Fiction Academy is a hub where creatives.
                                from all over the world can come and learn, create, and
                                commercialise artistic works inspired by African cultural heritage</p>
                        </div>
                        <img src={Academy} alt="African Academy" />
                    </div>
                    <div className="fiction-entertainment">
                        <img src={Fiction} alt="Fiction entertainment" />
                        <div>
                            <h5>Fiction Entertainment studio</h5>
                            <p>Fiction Entertainment is an audiovisual production studio
                                that develops digital content created by the youth
                                and for the youth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;