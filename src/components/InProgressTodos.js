import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoFunctions from "../services/TodoFunctions";

const InProgressTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const inProgressTodos = todos.filter((todo) => todo.status === "In Progress");

  return (
    <div>
      <ul className="flex flex-col  gap-5 py-5 lg:grid grid-cols-3">
        {inProgressTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => TodoFunctions.handleRemoveTodo(todo.id, dispatch)}
            onEdit={() =>
              TodoFunctions.handleEditTodo(todo.id, todo.text, dispatch)
            }
            onChangeStatus={() =>
              TodoFunctions.handleChangeStatus(todo.id, todo.status, dispatch)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default InProgressTodos;
