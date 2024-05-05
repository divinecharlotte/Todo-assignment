import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/reducers';

// Mocking the Redux store state
const mockStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: {
    // You can initialize your state here if needed
    todos: [],
  },
});

export default mockStore;
