import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice'; // Import user slice
import skillReducer from './features/skillSlice'; // Import skill slice

export const store = configureStore({
  reducer: {
    user: userReducer,
    skill: skillReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
