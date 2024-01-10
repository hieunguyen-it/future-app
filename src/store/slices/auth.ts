import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



interface AuthSliceProps {
  waitAuthCheck: boolean;
  isAuthenticated: boolean | undefined;
}

export const authInitialState: AuthSliceProps = {
  waitAuthCheck: true,
  isAuthenticated: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    noAccessToken: () => ({
      ...authInitialState,
      waitAuthCheck: false,
      isAuthenticated: false,
    }),

    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

  },
});

export const selectAuth = ({ auth }: { auth: AuthSliceProps }) => auth;

export const selectWaitAuthCheck = ({ auth }: { auth: AuthSliceProps }) => auth.waitAuthCheck;

export const selectIsAuthenticated = ({ auth }: { auth: AuthSliceProps }) => auth.isAuthenticated;

export const { setAuthenticated } = authSlice.actions;

export const authReducer = persistReducer(
  {
    key: 'rtk:auth',
    storage,
  },
  authSlice.reducer,
);
