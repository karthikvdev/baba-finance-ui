import { createSlice } from '@reduxjs/toolkit';
export interface User {
  token: string;
  email: string;
  isOnboarding: boolean;
  isDisclosed: boolean;
}
const initialState: User = {
  token: localStorage.getItem('refresh_token') || '',
  email: '',
  isOnboarding: false,
  isDisclosed: localStorage.getItem('disclosure') !== 'true',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      return { ...state, email: action.payload };
    },
    setToken: (state, action) => {
      return { ...state, token: action.payload };
    },
    setOnboarding: (state, action) => {
      return { ...state, isOnboarding: action.payload };
    },
    setIsDisclosed: (state, action) => {
      return { ...state, isDisclosed: action.payload };
    },
  },
});
// Action creators are generated for each case reducer function
export const { setToken, setEmail, setOnboarding, setIsDisclosed } =
  userSlice.actions;

export default userSlice.reducer;
