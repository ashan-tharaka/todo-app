import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function TodosDetails({ todo }) {
  const handleDelete = async () => {
    const response = await fetch("/api/todos/" + todo._id, {
      method: "DELETE",
    });

    const json = await response.json();
    if (response.ok) {
      alert("One Todo is deleted");

      window.location.reload();
    }
  };

  return (
    <div>
      <div className="row">
        <Card style={{ width: "60vw" }}>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.content}</Card.Text>
            <Link
              to={{
                pathname: "/modal",
                state: todo,
              }}
              className="btn btn-primary"
            >
              Update
            </Link>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TodosDetails;
