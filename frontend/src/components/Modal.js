import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
function Modal({ todo }) {
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const updateTodo = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/todos/" + todo._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(todo),
    });

    alert(response.method);

    const json = await response.json();
    alert(todo);

    if (!response.ok) {
      console.log("Not Updated");
    }

    if (response.ok) {
      setTitle(title);
      setContent(content);

      alert("Todo Updated", json);
      window.location.reload();
    }
  };

  return (
    <div>
      <div className="container" id="addnote">
        <div className="row">
          <div className="col-8">
            <h2>Update Todo</h2>
            <div className="container">
              <Form onSubmit={updateTodo}>
                <Form.Group className="mb-3">
                  <Form.Label>Update Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title of Todo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <>
                  <Form.Label>Update Note</Form.Label>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "175px" }}
                    />
                  </FloatingLabel>
                </>
                <br />
                <Button variant="success" type="submit">
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
