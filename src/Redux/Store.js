


import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../Redux/Reducer';

export const store = configureStore({  
  reducer: {
    tasks: tasksReducer,
  },
});


