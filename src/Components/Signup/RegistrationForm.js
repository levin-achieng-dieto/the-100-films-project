import React, { useState, useEffect } from "react";
import "./RegistrationForm.css"
import { Button, Modal, Form } from "react-bootstrap"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css";

const api = "http://localhost:4000/registers";

const initialState = {
    fullname: "",
    email: "",
    number: "",
    date: "",
    region: "",
    availability: "",
};


function RegistrationForm({ posts, loadPosts }) {
    const [show, setShow] = useState(false);
    const [state, setState] = useState(initialState);
    const [userId, setUserId] = useState(null);
    const [editMode, setEditMode] = useState(false);


    // object destructuring
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
                toast.success("Post Added Succesfully");
                // restore the form input to default with no data
                setState({ fullname: "", email: "", number: "", date: "", region: "", availability: "" });
                // close modal after sucessfull submission
                handleClose();
                // rerender the loadPosts function
                loadPosts();
            } else {
                axios.patch(`${api}/${userId}`, state);
                toast.success("Updates Succesfully");
                // restore the form input to default with no data
                setState({ fullname: "", email: "", number: "", date: "", region: "", availability: "" });
                // close modal after sucessfull submission
                handleClose();
                // rerender the loadPosts function
                loadPosts();
                setUserId(null);
                setEditMode(false);

            }
        }
    }


    return (
        <>
            <div className="registration-form">
                <div className="registration">
                    <h3>Join The Program</h3>
                    <div className="reg-button">
                        <Button variant="secondary" onClick={handleShow}>Register Now</Button>
                    </div>
                </div>
            </div>

            {/* <Login /> */}
            <div className="parent-container">
                <div className="container-six">
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
            </div>

        </>
    );
};

export default RegistrationForm
