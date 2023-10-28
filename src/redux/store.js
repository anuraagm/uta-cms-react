import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: loadState(), // Load state from localStorage
});

store.subscribe(() => {
  const stateToSave = store.getState();
  try {
    localStorage.setItem('reduxState', JSON.stringify(stateToSave));
  } catch (error) {
    // Handle any errors when saving to localStorage
  }
});

export default store;
