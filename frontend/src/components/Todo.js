import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";

function Todo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const addTodo = async (e) => {
    e.preventDefault();

    const todo = { title, content };
    const response = await fetch("/api/todos/", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      console.log("Not added");
    }

    if (response.ok) {
      setTitle("");
      setContent("");
      setError(null);

      alert("New Todo Added", json);
      window.location.reload();
    }
  };
  return (
    <div>
      <div className="container" id="addnote">
        <div className="row">
          <div className="col-8">
            <h2>Add Todo</h2>
            <div className="container">
              <Form onSubmit={addTodo}>
                <Form.Group className="mb-3">
                  <Form.Label>Add Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title of Todo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <>
                  <Form.Label>Add Note</Form.Label>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Notes..."
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
                  Add
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
