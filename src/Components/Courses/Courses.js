import React from "react";
import './Courses.css'
import Academy from "../images/My project.png"
import Fiction from "../images/Slider03.png"
import FourSixteen from "../images/My project (1).png"


function Courses() {
    return (
        <>
            <div className="section-three" id="courses">
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
                            <p>The African Fiction Academy is a platform dedicated to nurturing
                                and promoting African storytelling. Through workshops, mentorship programs,
                                and literary events, the academy supports aspiring and established
                                African writers in honing their craft. It fosters a vibrant community of
                                storytellers, celebrates African literature, and strives to amplify diverse
                                narratives from the African continent, fostering cultural exchange and
                                understanding.</p>
                        </div>
                        <img src={Academy} alt="African Academy" />
                    </div>
                    <div className="fiction-entertainment">
                        <img src={Fiction} alt="Fiction entertainment" />
                        <div>
                            <h5>Fiction Entertainment studio</h5>
                            <p>A fiction entertainment studio is a creative powerhouse that brings captivating stories to life. Through various mediums like film, television, and gaming, these studios conceive, develop, produce, and distribute fictional content. They engage in scriptwriting, casting, directing, visual effects, and sound design to deliver immersive and imaginative experiences for audiences worldwide.</p>
                        </div>
                    </div>
                    <div className="four-sixteen">
                        <div className="four-sixteen-prod">
                            <h5>416 production</h5>
                            <p>416PROD is a cutting-edge production company that excels in crafting captivating visual experiences. With a dedicated team of skilled professionals, they provide comprehensive services for film, television, and digital media projects. From concept development and scriptwriting to shooting, editing, and post-production, 416PROD delivers top-notch content. Their expertise in cinematography, visual effects, and sound design ensures that every project they undertake is a visual masterpiece that engages and captivates audiences.</p>
                        </div>
                        <img src={FourSixteen} alt="African Academy" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;