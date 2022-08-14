import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <Nav className="navbar navbar-light bg-dark  mb-4">
        <Link to="/">Home</Link>
        <h1>Todory</h1>
        <Link to="/todos">Show Todos</Link>
      </Nav>
    </div>
  );
}

export default Navbar;
