import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoading: boolean;
  userToken: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  userToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    signOut: (state) => {
      state.userToken = null;
    },
  },
});

export const { startLoading, finishLoading, setToken, signOut } = authSlice.actions;
export default authSlice.reducer;