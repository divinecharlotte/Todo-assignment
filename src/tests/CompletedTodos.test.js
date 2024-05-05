import React from 'react';
import { render,fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import CompletedTodos from '../components/CompletedTodos';
import store from '../redux/store';
import TodoItem from '../components/TodoItem';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('TodoList Component', () => {
    const todo = {
        id: 1,
        text: 'Test Todo',
        status: 'To do',
      };
      const onRemove = jest.fn();
      const onEdit = jest.fn();
      const onChangeStatus = jest.fn();
    
  test('renders correct number of TodoItem components', () => {
    const mockCompletedTodos = [
      { id: 3, text: 'Task 3', status: 'Completed' },
    ];

    useSelector.mockReturnValue(mockCompletedTodos);

    render(
      <Provider store={store}>
        <CompletedTodos />
      </Provider>
    );

 
    mockCompletedTodos.forEach(todo => {
        expect(screen.getByText(todo.text)).toBeInTheDocument();
        expect(screen.getByText(todo.status)).toBeInTheDocument();
      })
    });
    test('calls onRemove function when remove button is clicked', () => {
        render(
          <TodoItem todo={todo} onRemove={onRemove} onEdit={onEdit} onChangeStatus={onChangeStatus} />
        );
    
        fireEvent.click(screen.getByLabelText('Remove'));
    
        expect(onRemove).toHaveBeenCalledWith(todo.id);
    });

    test('calls edit function when edit button is clicked', () => {
        render(
          <TodoItem todo={todo} onRemove={onRemove} onEdit={onEdit} onChangeStatus={onChangeStatus} />
        );
    
        fireEvent.click(screen.getByLabelText('Edit'));
    
        expect(onEdit).toHaveBeenCalledWith(todo.id,todo.text);
    });
    
})
