import { NameSpace } from '../../const';
import { LastReview } from '../../types/review';
import { State } from '../../types/state';

export const getLastReview = (state: Pick<State, NameSpace.Review>): LastReview | null => state[NameSpace.Review].lastReview;
export const getLastReviewErrorStatus = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].hasError;
