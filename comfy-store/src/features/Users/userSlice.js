import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  cupcake: 'cupcake',
  dark: 'dark',
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.cupcake;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: { username: 'Johnny Test' },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged Out');
    },
    toggleTheme: (state) => {
      const { dark, cupcake } = themes;
      state.theme = state.theme === dark ? cupcake : dark;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
