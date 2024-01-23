import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  user: { username: 'Johnny Test' },
  theme: 'dark',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state) => {
      console.log('logout');
    },
    toggleTheme: (state) => {
      console.log('theme toggle');
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
