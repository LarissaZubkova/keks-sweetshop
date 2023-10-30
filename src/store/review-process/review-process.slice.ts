import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewProcess } from '../../types/state';
import { fetchLastReviewAction, fetchReviewsAction, fetchSendReviewAction } from '../api-actions';

const initialState: ReviewProcess = {
  lastReview: null,
  reviews: [],
  isReviewsLoading: false,
  hasReviewsError: false,
  hasError: false,
  isReviewSending: false,
  hasSendingError: false,
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
      })
      .addCase(fetchSendReviewAction.pending, (state) => {
        state.hasSendingError = false;
        state.isReviewSending = true;
      })
      .addCase(fetchSendReviewAction.fulfilled, (state) => {
        state.hasSendingError = false;
        state.isReviewSending = false;
      })
      .addCase(fetchSendReviewAction.rejected, (state) => {
        state.hasSendingError = true;
        state.isReviewSending = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.hasReviewsError = false;
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.hasReviewsError = false;
        state.isReviewsLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasReviewsError = true;
        state.isReviewsLoading = false;
      });
  }
});
