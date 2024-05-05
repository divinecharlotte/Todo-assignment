// import './App.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/reducers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import CompletedTodos from "./components/CompletedTodos";
import InProgressTodos from "./components/InProgressTodos";
import Nav from "./components/Nav";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons';

function App() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const handleAddTodo = (text) => {
    dispatch(addTodo({ text }));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-full h-full p-6 min-h-screen ${darkMode ? 'bg-gray-900 text-black' : 'bg-gray-100 text-black'}`}>
      <BrowserRouter>
        <div className="flex justify-end mb-4">
          <button onClick={toggleDarkMode} className="bg-gray-200 text-black px-2 rounded">
            <FontAwesomeIcon icon={darkMode ? solidMoon : regularMoon} />
          </button>
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/completed" element={<CompletedTodos />} />
          <Route path="/in-progress" element={<InProgressTodos />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/add-todo" element={<AddTodo onAddTodo={handleAddTodo} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
