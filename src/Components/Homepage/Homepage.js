import React, { useState } from "react";
import './Homepage.css'
import slider02 from "../images/Slider02.png"
import logo from "../images/logo.png"
import { Button, Modal, Form } from "react-bootstrap"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const api = "http://localhost:4000/registers";

const initialState = {
    fullname: "",
    email: "",
    number: "",
    date: "",
    region: "",
    availability: "",
};



function Homepage({ posts, loadPosts }) {


    const [show, setShow] = useState(false);
    const [state, setState] = useState(initialState);
    const [userId, setUserId] = useState(null);
    const [editMode, setEditMode] = useState(false);


    const { fullname, email, number, date, region, availability } = state;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // enable us to input data on the input fields
    function handleChange(e) {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    // handle the form submission
    function handleSubmit(e) {
        e.preventDefault();
        if (!fullname || !email || !number || !date || !region || !availability) {
            toast.error("Please fill all input fields");
        } else {
            if (!editMode) {
                axios.post(api, state);
                console.log(state)
                toast.success("Form Submitted Succesfully");
                setState({ fullname: "", email: "", number: "", date: "", region: "", availability: "" });
                handleClose();
                loadPosts();
            } else {
                axios.patch(`${api}/${userId}`, state);
                toast.success("Updates Succesfully");
                setState({ fullname: "", email: "", number: "", date: "", region: "", availability: "" });
                handleClose();
                loadPosts();
                setUserId(null);
                setEditMode(false);

            }
        }
    }




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
                            <div className="btn">
                                <div className="">
                                    <div className="">
                                        <Button variant="secondary" onClick={handleShow}>Register Now</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="container-seven">
                                <ToastContainer />
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header className="modal">
                                        <Modal.Title>
                                            <h3 className="text-center">Registration Form</h3>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="form-container">
                                        <Form onSubmit={handleSubmit}>

                                            <div className="flexing">
                                                <Form.Group className="mb-3" controlId="formBasicPostTitle">
                                                    <Form.Label className="form__label">Full Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        required
                                                        placeholder="Enter your full name"
                                                        name="fullname"
                                                        value={fullname}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPostTitle">
                                                    <Form.Label className="form__label">Enter email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        required
                                                        placeholder="example@gmail.com"
                                                        name="email"
                                                        value={email}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </div>

                                            <div className="flexing">
                                                <Form.Group className="mb-3" controlId="formBasicPostTitle">
                                                    <Form.Label className="form__label">Phone number</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        required
                                                        placeholder="phone number"
                                                        name="number"
                                                        value={number}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPostTitle">
                                                    <Form.Label className="form__label">Date of Birth</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        required
                                                        placeholder="Enter your date of birth"
                                                        name="date"
                                                        value={date}
                                                        onChange={handleChange}
                                                    ></Form.Control>

                                                </Form.Group>
                                            </div>

                                            <div className="flexing">
                                                <Form.Group className="mb-3" controlId="formBasicImageLink">
                                                    <Form.Label className="form__label">Region</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        required
                                                        placeholder="enter your region"
                                                        name="region"
                                                        value={region}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label className="form__label">Availability</Form.Label>
                                                    <select
                                                        type="option"
                                                        required
                                                        placeholder="specify your availability"
                                                        name="availability"
                                                        value={availability}
                                                        onChange={handleChange}
                                                    >
                                                        <option>part-time</option>
                                                        <option>full-time</option>
                                                    </select>
                                                </Form.Group>
                                            </div>

                                            <div>
                                                <Modal.Footer className="flexing submit-option">
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Cancel
                                                    </Button>
                                                    <Button variant="primary" type="submit">
                                                        {editMode ? "Update" : "Submit"}
                                                    </Button>
                                                </Modal.Footer>
                                            </div>

                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </div>
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