import { createSlice } from '@reduxjs/toolkit';
import { UserProcess } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../const';
import { checkAuthAction, loginAction, logoutAction, registrationAction } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  avatarUrl: '',
  email: '',
  isAlreadyExist: false,
  hasError: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAlreadyExist = false;
        state.hasError = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAlreadyExist = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAlreadyExist = false;
        state.hasError = false;
        state.avatarUrl = action.payload.avatarUrl;
        state.email = action.payload.email;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAlreadyExist = false;
        state.hasError = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAlreadyExist = false;
        state.hasError = false;
      })
      .addCase(registrationAction.fulfilled, (state) => {
        state.isAlreadyExist = false;
        state.hasError = false;
      })
      .addCase(registrationAction.rejected, (state, action) => {
        state.hasError = true;
        state.isAlreadyExist = false;

        if (action.error.message?.includes('409')) {
          state.isAlreadyExist = true;
          state.hasError = false;
        }
      });
  }
});
