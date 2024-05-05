import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import TodoItem from "../components/TodoItem";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("TodoList Component", () => {
  const todo = {
    id: 1,
    text: "Test Todo",
    status: "To do",
  };
  const onRemove = jest.fn();
  const onEdit = jest.fn();
  const onChangeStatus = jest.fn();

  test("calls onRemove function when remove button is clicked", () => {
    render(
      <TodoItem
        todo={todo}
        onRemove={onRemove}
        onEdit={onEdit}
        onChangeStatus={onChangeStatus}
      />
    );

    fireEvent.click(screen.getByLabelText("Remove"));

    expect(onRemove).toHaveBeenCalledWith(todo.id);
  });

  test("calls edit function when edit button is clicked", () => {
    render(
      <TodoItem
        todo={todo}
        onRemove={onRemove}
        onEdit={onEdit}
        onChangeStatus={onChangeStatus}
      />
    );

    fireEvent.click(screen.getByLabelText("Edit"));

    expect(onEdit).toHaveBeenCalledWith(todo.id, todo.text);
  });
});
