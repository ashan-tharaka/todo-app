import { useEffect, useState } from "react";
import TodosDetails from "./TodosDetails";

function Todos() {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos/");
      const json = await response.json();

      if (response.ok) {
        setTodos(json);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <div className="todos">
        <h1>My Todos</h1>
        {todos &&
          todos.map((todo) => <TodosDetails todo={todo} key={todo._id} />)}
      </div>
    </div>
  );
}

export default Todos;
