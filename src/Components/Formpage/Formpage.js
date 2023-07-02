import React from "react";
import "./Formpage.css"


function Formpage() {
    return (
        <>
            <h1>formpage</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPostTitle">
                    <Form.Label className="form__label">Post Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter blog title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImageLink">
                    <Form.Label className="form__label">Image link</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Paste your blog image here"
                        name="image"
                        value={image}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Label className="form__label">Story of your post</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Write you stories here"
                    style={{ height: "200px" }}
                    name="short_story"
                    value={short_story}
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
        </>
    )
}

export default Formpage;