import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isOpen: boolean;
}

const initialState: InitialState = {
  isOpen: true,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    closeNotification: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
