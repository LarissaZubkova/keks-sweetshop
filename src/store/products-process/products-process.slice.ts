import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ProductsProcess } from '../../types/state';
import { fetchCakesAction, fetchCategoriesAction } from '../api-actions';

const initialState: ProductsProcess = {
  products: [],
  categories: [],
  isProductsLoading: false,
  hasProductsError: false,
};

export const productsProcess = createSlice({
  name: NameSpace.Cakes,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCakesAction.pending, (state) => {
        state.isProductsLoading = true;
        state.hasProductsError = false;
      })
      .addCase(fetchCakesAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductsLoading = false;
        state.hasProductsError = false;
      })
      .addCase(fetchCakesAction.rejected, (state) => {
        state.hasProductsError = true;
        state.isProductsLoading = false;
      })
      .addCase(fetchCategoriesAction.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  }
});
