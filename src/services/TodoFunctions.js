import { addTodo, removeTodo, updateTodo, updateTodoStatus } from "../redux/reducers";

const TodoFunctions = {
  handleAddTodo: (text, setText, dispatch) => {
    if (text.trim()) {
      dispatch(addTodo({ text }));
      setText("");
    }
  },
  handleRemoveTodo: (id, dispatch) => {
    dispatch(removeTodo({ id }));
  },
  handleEditTodo: (id, text, dispatch) => {
    const newText = prompt("Enter new text", text);
    if (newText !== null && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }));
    }
  },
  handleChangeStatus: (id, currentStatus, dispatch) => {
    if (currentStatus === "To do") {
      const newStatus = "In Progress";
      dispatch(updateTodoStatus({ id, status: newStatus }));
    }
    if (currentStatus === "In Progress") {
      const newStatus = "Completed";
      dispatch(updateTodoStatus({ id, status: newStatus }));
    }
  },
};

export default TodoFunctions;
