import React from "react";
import "./Modal.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
function Modal({ setOpenModal, todo }) {
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  const updateTodo = () => {};

  return (
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="title">
        <h1>Are You Sure You Want to Update?</h1>
      </div>
      <div className="body">
        <Form onSubmit={updateTodo}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title of Todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <>
            <Form.Label>Note</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea2"
              
              value={content}
              onChange={(e) => setContent(e.target.value)}
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "60px" }}
              />
            </FloatingLabel>
          </>
          <br />

          <Button
            variant="danger"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Modal;
