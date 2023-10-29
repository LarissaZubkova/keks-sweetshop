import { NameSpace } from '../../const';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getLastReview = (state: Pick<State, NameSpace.Review>): Review | null => state[NameSpace.Review].lastReview;
export const getLastReviewErrorStatus = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].hasError;
export const getReviewSendingStatus = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].isReviewSending;
export const getSendingErrorStatus = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].hasSendingError;
export const getReviews = (state: Pick<State, NameSpace.Review>): Review[] | [] => state[NameSpace.Review].reviews;
export const getReviewsErrorStatus = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].hasReviewsError;
export const getReviewsLoadingStatus = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].isReviewsLoading;
