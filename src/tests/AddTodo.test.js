import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo';

describe('AddTodo Component', () => {
  it('renders input field and button', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodo onAddTodo={mockOnAddTodo} />);

    const inputElement = screen.getByPlaceholderText('Add a todo...');
    const buttonElement = screen.getByRole('button', { name: 'Add' });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onAddTodo function when button is clicked', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodo onAddTodo={mockOnAddTodo} />);

    const inputElement = screen.getByPlaceholderText('Add a todo...');
    const buttonElement = screen.getByRole('button', { name: 'Add' });

    fireEvent.change(inputElement, { target: { value: 'New todo item' } });
    fireEvent.click(buttonElement);
    

    expect(mockOnAddTodo).toHaveBeenCalledWith('New todo item');
  });
});
