import React from "react";
import "./ResidentialAddress.css"
import { Link } from "react-router-dom"


function ResidentialAddress() {
    return (
        <>
            <div>
                <div>
                    <div className="user-profile">
                        <form>
                            <div>
                                <h3>Residential Address</h3>
                                <hr></hr>
                                <div>
                                    <div className="flexing">
                                        <div className="blocking">
                                            <label>Address</label>
                                            <input type="text" placeholder="" required></input>
                                        </div>
                                        <div className="blocking">
                                            <label>city</label>
                                            <input type="text" placeholder="select city" required></input>
                                        </div>
                                    </div>
                                    <div className="flexing">
                                        <div className="blocking">
                                            <label>region</label>
                                            <input type="text" placeholder="select a region" required></input>
                                        </div>
                                        <div className="blocking">
                                            <label>postal/zip code</label>
                                            <input type="text" placeholder="" required></input>
                                        </div>
                                    </div>
                                    <div className="flexing">
                                        <div className="blocking">
                                            <label>county</label>
                                            <input type="text" placeholder="" required></input>
                                        </div>
                                    </div>
                                    <div className="residential-buttons">
                                        <button>cancel</button>
                                        <button type="submit">next</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResidentialAddress;