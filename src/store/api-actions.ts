import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CakeCard, CakeFullCard } from '../types/cake';
import { State, AppDispatch } from '../types/state';
import { UserData } from '../types/user-data';
import { AuthData, RegistrationData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { dropAvatarUrl, saveAvatarUrl, dropUserEmail, saveUserEmail } from '../services/user';
import { APIRout, AppRoute } from '../const';
import { redirectToRoute } from './action';

export const fetchCakesAction = createAsyncThunk<CakeCard[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'product/fetchCakes',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<CakeCard[]>(APIRout.Products);
    return data;
  }
);

export const fetchProductCardAction = createAsyncThunk<CakeFullCard, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchProductCard',
  async(id, {extra: api}) => {
    const {data} = await api.get<CakeFullCard>(APIRout.Product.replace(':id', id));
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<UserData>(APIRout.Login);
      return data;
    },
  );

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'user/login',
    async (login, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(APIRout.Login, login);
      saveToken(data.token);
      saveAvatarUrl(String(data.avatarUrl));
      saveUserEmail(data.email);
      dispatch(redirectToRoute(AppRoute.Main));
      return data;
    },
  );

export const registrationAction = createAsyncThunk<UserData, RegistrationData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    }>(
      'user/registration',
      async (registration, {dispatch, extra: api}) => {
        const {data} = await api.post<UserData>(APIRout.Registration, registration);
        saveToken(data.token);
        saveAvatarUrl(String(data.avatarUrl));
        saveUserEmail(data.email);
        dispatch(redirectToRoute(AppRoute.Main));
        return data;
      },
    );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {
      extra: api}) => {
      await api.delete(APIRout.Logout);
      dropToken();
      dropAvatarUrl();
      dropUserEmail();
    },
  );
