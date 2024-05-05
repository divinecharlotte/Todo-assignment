import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import CompletedTodos from '../components/CompletedTodos';
import store from '../redux/store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('TodoList Component', () => {
  test('renders correct number of TodoItem components', () => {
    const mockTodos = [
      { id: 3, text: 'Task 3', status: 'Completed' },
    ];

    useSelector.mockReturnValue(mockTodos);

    render(
      <Provider store={store}>
        <CompletedTodos />
      </Provider>
    );

 
    mockTodos.forEach(todo => {
        expect(screen.getByText(todo.text)).toBeInTheDocument();
        expect(screen.getByText(todo.status)).toBeInTheDocument();
      })
    });
    
})
