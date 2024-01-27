import { configureStore } from '@reduxjs/toolkit';
import testslice from './testslice';

export const store = configureStore({
  reducer: {
    test: testslice,
  },
});

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
