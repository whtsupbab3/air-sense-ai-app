import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'utils/types';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, signOut } = userSlice.actions;
export default userSlice.reducer;