import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  test: string;
}

const initialState: InitialState = {
  test: '',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
      console.log(state.test);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTest } = testSlice.actions;

export default testSlice.reducer;
