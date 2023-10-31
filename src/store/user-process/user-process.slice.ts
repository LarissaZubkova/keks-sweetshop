import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction, registrationAction } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  avatarUrl: '',
  email: '',
  isAlreadyExist: false,
  isLoading: false,
  hasError: false,
  isRegistrationSuccess: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAlreadyExist = false;
        state.hasError = false;
        state.avatarUrl = action.payload.avatarUrl;
        state.email = action.payload.email;
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
        state.hasError = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAlreadyExist = false;
        state.hasError = false;
      })
      .addCase(registrationAction.pending, (state) => {
        state.isAlreadyExist = false;
        state.isRegistrationSuccess = false;
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(registrationAction.fulfilled, (state) => {
        state.isAlreadyExist = false;
        state.isRegistrationSuccess = true;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(registrationAction.rejected, (state, action) => {
        state.hasError = true;
        state.isRegistrationSuccess = false;
        state.isAlreadyExist = false;
        state.isLoading = false;

        if (action.error.message?.includes('409')) {
          state.isAlreadyExist = true;
          state.isRegistrationSuccess = false;
          state.hasError = false;
          state.isLoading = false;
        }
      });
  }
});
