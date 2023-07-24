import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface Counter {
  isLoading: boolean;
  errMsg: string;
}

const initialState: Counter = {
  isLoading: false,
  errMsg: '',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorMsg: (state, action: PayloadAction<string>) => {
      state.errMsg = action.payload;
    },
  },
});

export const { setLoading, setErrorMsg } = generalSlice.actions;

export default generalSlice.reducer;
