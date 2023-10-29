import { createSlice } from '@reduxjs/toolkit';
import { FavoritesProcess } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchFavoritesAction, fetchAddFavoriteAction, fetchDeleteFavoriteAction } from '../api-actions';

const initialState: FavoritesProcess = {
  favorites: [],
  isFavoritesLoading: false,
  hasFavoritesError: false,
  hasAddFAvoritesError: false,
  hasDeleteFavoritesError: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
        state.hasFavoritesError = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
        state.hasFavoritesError = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoritesLoading = false;
        state.hasFavoritesError = true;
      })
      .addCase(fetchAddFavoriteAction.fulfilled, (state, action) => {
        state.hasAddFAvoritesError = false;
        state.favorites.push(action.payload);
      })
      .addCase(fetchAddFavoriteAction.rejected, (state) => {
        state.hasAddFAvoritesError = true;
      })
      .addCase(fetchDeleteFavoriteAction.fulfilled, (state, action) => {
        state.hasDeleteFavoritesError = false;
        state.favorites = state.favorites.filter((cake) => cake.id !== action.payload.id);
      })
      .addCase(fetchDeleteFavoriteAction.rejected, (state) => {
        state.hasDeleteFavoritesError = true;
      });
  }
});
