import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming you have a rootReducer

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, devTools, etc. as needed
});

export default store;