import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
    role: null,
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    clearAuthToken: (state) => {
      state.authToken = null;
    },
    clearUserRole: (state) => {
      state.role = null;
    },
  },
});

export const { setUserRole, setAuthToken, clearAuthToken, clearUserRole } = authSlice.actions;
export default authSlice.reducer;
