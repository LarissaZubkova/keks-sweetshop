import { createSlice } from '@reduxjs/toolkit';
import { ReviewProcess } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchLastReviewAction } from '../api-actions';

const initialState: ReviewProcess = {
  lastReview: null,
  hasError: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLastReviewAction.fulfilled, (state, action) => {
        state.hasError = false;
        state.lastReview = action.payload;
      })
      .addCase(fetchLastReviewAction.rejected, (state) => {
        state.hasError = true;
      });
  }
});
