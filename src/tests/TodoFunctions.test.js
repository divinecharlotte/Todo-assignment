import TodoFunctions from "../services/TodoFunctions";
import { addTodo, removeTodo, updateTodo, updateTodoStatus } from "../redux/reducers";

describe("TodoFunctions", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
  });

  describe("handleAddTodo", () => {
    test("adds todo if text is not empty", () => {
      const setTextMock = jest.fn();
      const text = "New Todo";
      TodoFunctions.handleAddTodo(text, setTextMock, dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith(addTodo({ text }));
      expect(setTextMock).toHaveBeenCalledWith("");
    });

    test("does not add todo if text is empty", () => {
      const setTextMock = jest.fn();
      const text = "";
      TodoFunctions.handleAddTodo(text, setTextMock, dispatchMock);
      expect(dispatchMock).not.toHaveBeenCalled();
      expect(setTextMock).not.toHaveBeenCalled();
    });
  });

  describe("handleRemoveTodo", () => {
    test("removes todo with given id", () => {
      const id = 1;
      TodoFunctions.handleRemoveTodo(id, dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith(removeTodo({ id }));
    });
  });

  describe("handleEditTodo", () => {
    test("updates todo text with new text", () => {
      const id = 1;
      const oldText = "Old Text";
      const newText = "New Text";
      global.prompt = jest.fn(() => newText);
      TodoFunctions.handleEditTodo(id, oldText, dispatchMock);
      expect(global.prompt).toHaveBeenCalledWith("Enter new text", oldText);
      expect(dispatchMock).toHaveBeenCalledWith(updateTodo({ id, text: newText }));
    });

    test("does not update todo if new text is empty", () => {
      const id = 1;
      const oldText = "Old Text";
      global.prompt = jest.fn(() => "");
      TodoFunctions.handleEditTodo(id, oldText, dispatchMock);
      expect(global.prompt).toHaveBeenCalledWith("Enter new text", oldText);
      expect(dispatchMock).not.toHaveBeenCalled();
    });

    test("does not update todo if prompt is canceled", () => {
      const id = 1;
      const oldText = "Old Text";
      global.prompt = jest.fn(() => null);
      TodoFunctions.handleEditTodo(id, oldText, dispatchMock);
      expect(global.prompt).toHaveBeenCalledWith("Enter new text", oldText);
      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });

  describe("handleChangeStatus", () => {
    test("changes status from 'To do' to 'In Progress'", () => {
      const id = 1;
      const currentStatus = "To do";
      TodoFunctions.handleChangeStatus(id, currentStatus, dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith(updateTodoStatus({ id, status: "In Progress" }));
    });

    test("changes status from 'In Progress' to 'Completed'", () => {
      const id = 1;
      const currentStatus = "In Progress";
      TodoFunctions.handleChangeStatus(id, currentStatus, dispatchMock);
      expect(dispatchMock).toHaveBeenCalledWith(updateTodoStatus({ id, status: "Completed" }));
    });

    test("does not change status for other cases", () => {
      const id = 1;
      const currentStatus = "Completed";
      TodoFunctions.handleChangeStatus(id, currentStatus, dispatchMock);
      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });
});
