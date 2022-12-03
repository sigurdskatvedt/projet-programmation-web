import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  square1: false,
  square2: false,
  square3: false,
  complete: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    toggleFill: (state) => {
      //Should find more elegant way of doing it than this
      if (!state.square1) {
        state.square1 = true;
      } else if (!state.square2) {
        state.square2 = true;
      } else if (!state.square3) {
        state.square3 = true;
      } else {
        state.complete = true;
      }
    },
  },
});

export const { toggleFill } = tasksSlice.actions;
export default tasksSlice.reducer;
