import { combineReducers } from '@reduxjs/toolkit';
import someReducer from './testReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  someReducer,
  authReducer,
  appReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;