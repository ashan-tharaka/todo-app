import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Todos from './components/Todos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/todos" element={<Todos/>}/>
        


      </Routes>

      </BrowserRouter>


      
    
    </div>
  );
}

export default App;
