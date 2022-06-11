import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkingStatus: () => ({
      message: 'Under Construction',
    }),
  },
});

export const { checkingStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
