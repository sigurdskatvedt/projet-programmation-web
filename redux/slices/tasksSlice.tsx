import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  square1: null,
  square2: null,
  square3: null,
  square4: null,
  key: false,
  completed: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    toggleFill: (state, actions) => {
      //Should find more elegant way of doing it than this
      if (!state.square1) {
        state.square1 = actions.payload;
      } else if (!state.square2) {
        state.square2 = actions.payload;
      } else if (!state.square3) {
        state.square3 = actions.payload;
      } else {
        state.square4 = actions.payload;
        state.completed = true;
      }
    },
    toggleKey: (state) => {
      state.key = true;
    },
  },
});

export const { toggleFill, toggleKey } = tasksSlice.actions;
export default tasksSlice.reducer;
