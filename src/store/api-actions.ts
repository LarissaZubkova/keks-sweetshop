import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRout, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { dropAvatarUrl, dropUserEmail, saveAvatarUrl, saveUserEmail } from '../services/user';
import { AuthData, RegistrationData } from '../types/auth-data';
import { CakeCard, CakeFullCard, Category } from '../types/product';
import { FormData, Review } from '../types/review';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
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

export const fetchCategoriesAction = createAsyncThunk<Category[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/categories',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<Category[]>(APIRout.Categories);
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

export const fetchLastReviewAction = createAsyncThunk<Review, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/fetchLastReview',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<Review>(APIRout.LastReview);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/fetchReviews',
  async(id, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRout.Review}/${id}`);
    return data;
  }
);

export const fetchSendReviewAction = createAsyncThunk<void, {id: string; formData: FormData}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/fetchSendReview',
  async({id, formData}, {extra: api}) => {

    await api.post<void>(`${APIRout.Review}/${id}`, formData);

  }
);

export const fetchFavoritesAction = createAsyncThunk<CakeFullCard[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchFavorites',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<CakeFullCard[]>(APIRout.Favorites);
    return data;
  }
);

export const fetchAddFavoriteAction = createAsyncThunk<CakeFullCard, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchAddFavorite',
  async(id, {extra: api}) => {
    const {data} = await api.put<CakeFullCard>(`${APIRout.Favorites}/${id}`);
    return data;
  }
);

export const fetchDeleteFavoriteAction = createAsyncThunk<CakeFullCard, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchDeleteFavorite',
  async(id, {extra: api}) => {
    const {data} = await api.delete<CakeFullCard>(`${APIRout.Favorites}/${id}`);
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

export const fetchAvatarAction = createAsyncThunk<UserData, RegistrationData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    }>(
      'user/avatar',
      async (formData, {extra: api}) => {
        const {data} = await api.post<UserData>(APIRout.Avatar, formData, {headers: {'Content-Type': 'multipart/form-data'}});
        return data;

      },
    );

export const registrationAction = createAsyncThunk<UserData, RegistrationData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    }>(
      'user/registration',
      async (formData, {dispatch, extra: api}) => {
        const {name, email, password} = formData;
        const {data} = await api.post<UserData>(APIRout.Registration, {name, email, password});

        if(formData.avatar.name) {
          saveToken(data.token);
          dispatch(fetchAvatarAction(formData));
        }
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
