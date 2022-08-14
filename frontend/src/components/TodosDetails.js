import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate} from 'react-router-dom';
import { useState } from "react";
import Modal from "./Modal";

function TodosDetails({ todo }) {
  let navigate=useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleUpdate=async(e)=>{
    e.preventDefault();
    // eslint-disable-next-line react-hooks/rules-of-hooks
 

    



  }
  return (
    <div>
      
      <div className="row">
        <Card style={{ width: "60vw" }}>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.content}</Card.Text>
            <Button variant="primary"  onClick={() => {
          setModalOpen(true);
        }}>Update</Button>
           {modalOpen && <Modal setOpenModal={setModalOpen} todo={todo} key={todo._id} />}
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


