import { AuthorizationStatus, FilterSortDate, FilterSortType, FirstLevelFilter, SecondLevelFilter } from '../const';
import { store } from '../store/index';
import { CakeCard, CakeFullCard, Category } from './product';
import { Review } from './review';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type ProductsProcess = {
    products: CakeCard[];
    categories: Category[];
    isProductsLoading: boolean;
    hasProductsError: boolean;
}

export type ProductCardProcess = {
    productCard: CakeFullCard | null;
    isProductCardLoading: boolean;
    hasProductCardError: boolean;
}

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    avatarUrl: string;
    email: string;
    isAlreadyExist: boolean;
    hasError: boolean;
}

export type ReviewProcess = {
    lastReview: Review | null;
    reviews: Review[];
    isReviewsLoading: boolean;
    hasReviewsError: boolean;
    hasError: boolean;
    isReviewSending: boolean;
    hasSendingError: boolean;
}

export type FiltersProcess = {
  firstLevel: FirstLevelFilter | null;
  secondLevel: SecondLevelFilter[];
  sortingByRating: FilterSortType;
  sortingByDate: FilterSortDate;
}

export type FavoritesProcess = {
  favorites: CakeFullCard[];
  isFavoritesLoading: boolean;
  hasFavoritesError: boolean;
  hasAddFAvoritesError: boolean;
  hasDeleteFavoritesError: boolean;
}
