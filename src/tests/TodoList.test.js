import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import store from '../redux/store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('TodoList Component', () => {
  test('renders correct number of TodoItem components', () => {
    const mockTodos = [
      { id: 1, text: 'Task 1', status: 'To do' },
      { id: 2, text: 'Task 2', status: 'In Progress' },
      { id: 3, text: 'Task 3', status: 'Completed' },
    ];

    useSelector.mockReturnValue(mockTodos);

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

 
    mockTodos.forEach(todo => {
        expect(screen.getByText(todo.text)).toBeInTheDocument();
        expect(screen.getByText(todo.status)).toBeInTheDocument();
      })
    });
})
