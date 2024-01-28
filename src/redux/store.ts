import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from './notification/notification';

export const store = configureStore({
  reducer: {
    notification: notificationSlice,
  },
});

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
