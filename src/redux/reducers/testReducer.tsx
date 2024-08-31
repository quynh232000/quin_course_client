import { createSlice } from '@reduxjs/toolkit';

interface SomeState {
  someValue: number;
}

const initialState: SomeState = {
  someValue: 0,
};

const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    increment(state) {
      state.someValue += 1;
    },
    decrement(state) {
      state.someValue -= 1;
    },
    // Other reducers can be defined here
  },
});

export const { increment, decrement } = someSlice.actions;
export default someSlice.reducer;