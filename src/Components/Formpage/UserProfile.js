import React, { useState } from "react";
import "./UserProfile.css"
import { Link } from "react-router-dom"

function UserProfile() {
    const [date, setDate] = useState()

    return (
        <>
            <div>
                <div>
                    <div className="user-profile">
                        <form>
                            <h3>User Profile</h3>
                            <hr></hr>
                            <div>
                                <div className="flexing">
                                    <div className="blocking">
                                        <label>first name</label>
                                        <input type="text" placeholder="enter your first name" required></input>
                                    </div>
                                    <div className="blocking">
                                        <label>last name</label>
                                        <input type="text" placeholder="enter your last name" required></input>
                                    </div>
                                </div>
                                <div className="flexing">
                                    <div className="blocking">
                                        <label>email</label>
                                        <input type="text" placeholder="Enter your email" required></input>
                                    </div>
                                    <div className="blocking">
                                        <label>phone numner</label>
                                        <input type="text" placeholder="phone number" required></input>
                                    </div>
                                </div>
                                <div className="flexing">
                                    <div className="blocking">
                                        <label>Socialization</label>
                                        <input type="text" placeholder="" required></input>
                                    </div>
                                    <div className="blocking">
                                        <label>date of birth</label>
                                        <input type="date" placeholder="" required onChange={e => setDate(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="profile-button">
                                    <button type="submit">submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile