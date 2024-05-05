import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

describe('TodoItem Component', () => {
  const todo = {
    id: 1,
    text: 'Test Todo',
    status: 'To do',
  };

  const onRemove = jest.fn();
  const onEdit = jest.fn();
  const onChangeStatus = jest.fn();

  test('renders todo text and status correctly', () => {
    render(
      <TodoItem todo={todo} onRemove={onRemove} onEdit={onEdit} onChangeStatus={onChangeStatus} />
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('To do')).toBeInTheDocument();
  });

  test('calls onRemove function when remove button is clicked', () => {
    render(
      <TodoItem todo={todo} onRemove={onRemove} onEdit={onEdit} onChangeStatus={onChangeStatus} />
    );

    fireEvent.click(screen.getByLabelText('Remove'));

    expect(onRemove).toHaveBeenCalledWith(1);
  });

  test('calls onEdit function when edit button is clicked', () => {
    render(
      <TodoItem todo={todo} onRemove={onRemove} onEdit={onEdit} onChangeStatus={onChangeStatus} />
    );

    fireEvent.click(screen.getByLabelText('Edit'));

    expect(onEdit).toHaveBeenCalledWith(1, 'Test Todo');
  });

  test('calls onChangeStatus function when change status button is clicked', () => {
    render(
      <TodoItem todo={todo} onRemove={onRemove} onEdit={onEdit} onChangeStatus={onChangeStatus} />
    );

    fireEvent.click(screen.getByLabelText('Complete'));

    expect(onChangeStatus).toHaveBeenCalledWith(1, 'To do');
  });
});
