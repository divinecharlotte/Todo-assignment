import { createSlice } from '@reduxjs/toolkit';
const savedTodos = JSON.parse(localStorage.getItem('todos'));


const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: savedTodos ||  [
    { id: 1, text: 'Todo 1', status: 'To do' },
    { id: 2, text: 'Todo 2', status: 'To do' },
    { id: 3, text: 'Todo 3', status: 'To do' },
    { id: 4, text: 'Todo 4', status: 'To do' },
    { id: 5, text: 'Todo 5', status: 'To do' },
    { id: 6, text: 'Todo 6', status: 'To do' },
    { id: 7, text: 'Todo 7', status: 'To do' },
    { id: 8, text: 'Todo 8', status: 'To do' },
    { id: 9, text: 'Todo 9', status: 'To do' }
  ]},
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        status: "To do",
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodoStatus: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, updateTodo, updateTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;

