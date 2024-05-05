// import { render, screen } from '@testing-library/react';
// import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Nav from '../components/Nav';

describe('Nav Component', () => {
  test('renders "All Tasks" link', () => {
    render(
      <Router>
        <Provider store={store}>
          <Nav />
        </Provider>
      </Router>
    );

    const allTasksLink = screen.getByRole('link', { name: /All Tasks/i });
    expect(allTasksLink).toBeInTheDocument();
  });

  test('renders "To do" link', () => {
    render(
      <Router>
        <Provider store={store}>
          <Nav />
        </Provider>
      </Router>
    );

    const todoLink = screen.getByRole('link', { name: /To do/i });
    expect(todoLink).toBeInTheDocument();
  });

  test('renders "In Progress" link', () => {
    render(
      <Router>
        <Provider store={store}>
          <Nav />
        </Provider>
      </Router>
    );

    const inProgressLink = screen.getByRole('link', { name: /In Progress/i });
    expect(inProgressLink).toBeInTheDocument();
  });

  test('renders "Completed" link', () => {
    render(
      <Router>
        <Provider store={store}>
          <Nav />
        </Provider>
      </Router>
    );

    const completedLink = screen.getByRole('link', { name: /Completed/i });
    expect(completedLink).toBeInTheDocument();
  });

  test('renders "+ New Task" link', () => {
    render(
      <Router>
        <Provider store={store}>
          <Nav />
        </Provider>
      </Router>
    );

    const addTodoLink = screen.getByRole('link', { name: /\+ New Task/i });
    expect(addTodoLink).toBeInTheDocument();
  });
});

