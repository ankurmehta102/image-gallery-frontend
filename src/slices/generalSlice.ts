import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface Counter {
  isLoading: boolean;
}

const initialState: Counter = {
  isLoading: false,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = generalSlice.actions;

export default generalSlice.reducer;
