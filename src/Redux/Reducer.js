
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [{id: 4, name:"Assignment Submission",rating: "4"}],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const {id,name,rating } = action.payload;
      //console.log(rating);
      const index = state.findIndex((task) => task.id === id);
      const updatedTask= {id,name,rating}
      state[index] = { ...updatedTask };
    },
    toggleTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].done = !state[index].done;
    },
    reorderTasks: (state, action) => {
      const [movedTask] = state.splice(action.payload.source.index, 1);
      state.splice(action.payload.destination.index, 0, movedTask);
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateTask,
  toggleTask,
  reorderTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
