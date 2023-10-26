import { createSlice } from '@reduxjs/toolkit';
import { ProductCardProcess } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchProductCardAction } from '../api-actions';

const initialState: ProductCardProcess = {
  productCard: null,
  isProductCardLoading: false,
  hasProductCardError: false,
};

export const productCardProcess = createSlice({
  name: NameSpace.CakeCard,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductCardAction.pending, (state) => {
        state.isProductCardLoading = true;
        state.hasProductCardError = false;
      })
      .addCase(fetchProductCardAction.fulfilled, (state, action) => {
        state.productCard = action.payload;
        state.isProductCardLoading = false;
        state.hasProductCardError = false;
      })
      .addCase(fetchProductCardAction.rejected, (state) => {
        state.hasProductCardError = true;
        state.isProductCardLoading = false;
      });
  }
});
