import React, { useState, useEffect } from "react";

import { Button, Modal, Form } from "react-bootstrap"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"


// import Login from "../Login/Login"


const api = "http://localhost:9292/registered_members";

const initialState = {
    fullname: "",
    email: "",
    number: "",
    date: "",
    region: "",
    availability: "",
};


function Signup({ posts, loadPosts }) {
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

            <ToastContainer />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h3 className="text-center">Registration Form</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPostTitle">
                            <Form.Label className="form__label">Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your full name"
                                name="fullname"
                                value={fullname}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPostTitle">
                            <Form.Label className="form__label">Enter email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPostTitle">
                            <Form.Label className="form__label">Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="phone number"
                                name="number"
                                value={number}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPostTitle">
                            <Form.Label className="form__label">Date of Birth</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your date of birth"
                                name="date"
                                value={date}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImageLink">
                            <Form.Label className="form__label">Region</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter your region"
                                name="region"
                                value={region}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Label className="form__label">Availability</Form.Label>
                        <Form.Control
                            // as="textarea"
                            type="text"
                            placeholder="specify your availability"
                            // style={{ height: "200px" }}
                            name="availability"
                            value={availability}
                            onChange={handleChange}
                        />
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                {editMode ? "Update" : "Post"}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Signup



// import React, { useState } from "react";
// import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// import { Button, Modal, Form } from "react-bootstrap";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// import Login from "../Login/Login";

// const api = "http://localhost:9292/registered_members";

// // default state
// const initialState = {
//     title: "",
//     image: "",
//     short_story: "",
// };

// const Signup = ({ posts, loadPosts }) => {
//     const [show, setShow] = useState(false);
//     const [state, setState] = useState(initialState);
//     const [userId, setUserId] = useState(null);
//     const [editMode, setEditMode] = useState(false);
//     const [searchInput, setSearchInput] = useState("");
//     const [filteredResults, setFilteredResults] = useState([]);

//     // object destructuring
//     const { title, image, short_story } = state;

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     // enable us to input data on the input fields
//     function handleChange(e) {
//         const { name, value } = e.target;
//         setState({ ...state, [name]: value });
//     }

//     // handle the form submission
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (!title || !image || !short_story) {
//             toast.error("Please fill all input fields");
//         } else {
//             if (!editMode) {
//                 axios.post(api, state);
//                 toast.success("Post Added Succesfully");
//                 // restore the form input to default with no data
//                 setState({ title: "", image: "", short_story: "" });
//                 // close modal after sucessfull submission
//                 handleClose();
//                 // rerender the loadPosts function
//                 loadPosts();
//             } else {
//                 axios.patch(`${api}/${userId}`, state);
//                 toast.success("Updates Succesfully");
//                 // restore the form input to default with no data
//                 setState({ title: "", image: "", short_story: "" });
//                 // close modal after sucessfull submission
//                 handleClose();
//                 // rerender the loadPosts function
//                 loadPosts();
//                 setUserId(null);
//                 setEditMode(false);

//             }
//         }
//     }

//     const handleUpdate = (id) => {
//         const singleUser = posts.find((item) => item.id === id);
//         setState({ ...singleUser });
//         setUserId(id);
//         setEditMode(true);
//         handleShow();
//         // rerender the loadPosts function
//         loadPosts();
//     };

//     // handle the delete operation
//     const handleDelete = async (id) => {
//         if (window.confirm("Are you sure want to delete this post?")) {
//             axios.delete(`${api}/${id}`);
//             toast.success("deleted successfully");
//             // rerender the loadPosts function
//             loadPosts();
//         }
//     };

//     // const [BlogList, setbloglist]=useState([])
//     // useEffect(() => {
//     //   effect
//     //   return () => {
//     //     cleanup
//     //   };
//     // }, [input]);
//     // search filter
//     const searchItems = (searchValue) => {
//         setSearchInput(searchValue);
//         if (searchInput !== "") {
//             const filteredData = posts.filter((item) => {
//                 return Object.values(item)
//                     .join("")
//                     .toLowerCase()
//                     .includes(searchInput.toLowerCase());
//             });
//             setFilteredResults(filteredData);
//         } else {
//             setFilteredResults(posts);
//         }
//     };
//     return (
//         <>
//             <div className="row d-flex align-items-center">
//                 <div className="col-md-8">
//                     <Button variant="secondary" onClick={handleShow}>
//                         Create New Post
//                     </Button>
//                 </div>
//                 <div className="col-md-4">
//                     <form action="">
//                         <div className="blog__search">
//                             <input
//                                 type="search"
//                                 className="header-search-input"
//                                 placeholder="Search post"
//                                 onChange={(e) => searchItems(e.target.value)}
//                             />
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <Login />
//             <div className="row">
//                 {searchInput.length > 1
//                     ? filteredResults.map(({ title, image, short_story, id }) => {
//                         return (
//                             <div className="col-md-4" key={id}>
//                                 <div className="post__wrapper">
//                                     <h3 className="p-2 text-center">{title}</h3>
//                                     <div className="post__image">
//                                         <img src={image} alt={title}></img>
//                                     </div>
//                                     <p className="story__desc">{short_story}</p>
//                                     <div className="action__icons">
//                                         <div
//                                             className="post__edit"
//                                             onClick={() => handleUpdate(id)}
//                                         >
//                                             <BsFillPencilFill />
//                                         </div>
//                                         <div
//                                             className="post__delete"
//                                             onClick={() => handleDelete(id)}
//                                         >
//                                             <BsFillTrashFill />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })
//                     : posts.map(({ title, image, short_story, id }) => {
//                         return (
//                             <div className="col-md-4" key={id}>
//                                 <div className="post__wrapper">
//                                     <h3 className="p-2 text-center">{title}</h3>
//                                     <div className="post__image">
//                                         <img src={image} alt={title}></img>
//                                     </div>
//                                     <p className="story__desc">{short_story}</p>
//                                     <div className="action__icons">
//                                         <div
//                                             className="post__edit"
//                                             onClick={() => handleUpdate(id)}
//                                         >
//                                             <BsFillPencilFill />
//                                         </div>
//                                         <div
//                                             className="post__delete"
//                                             onClick={() => handleDelete(id)}
//                                         >
//                                             <BsFillTrashFill />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//             </div>

//             {/* toast action message notification */}
//             <ToastContainer />

//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Header>
//                     <Modal.Title>
//                         <h3 className="text-center">Create Your New Post</h3>
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group className="mb-3" controlId="formBasicPostTitle">
//                             <Form.Label className="form__label">Post Title</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter blog title"
//                                 name="title"
//                                 value={title}
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="formBasicImageLink">
//                             <Form.Label className="form__label">Image link</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Paste your blog image here"
//                                 name="image"
//                                 value={image}
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Label className="form__label">Story of your post</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             placeholder="Write you stories here"
//                             style={{ height: "200px" }}
//                             name="short_story"
//                             value={short_story}
//                             onChange={handleChange}
//                         />
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Cancel
//                             </Button>
//                             <Button variant="primary" type="submit">
//                                 {editMode ? "Update" : "Post"}
//                             </Button>
//                         </Modal.Footer>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// };

// export default Signup;