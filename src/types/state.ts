import { store } from '../store/index';
import { CakeCard, CakeFullCard } from './product';
import { AuthorizationStatus, FirstLevelFilter, SecondLevelFilter } from '../const';
import { LastReview } from './review';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type ProductsProcess = {
    products: CakeCard[];
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
    lastReview: LastReview | null;
    hasError: boolean;
}

export type FiltersProcess = {
  firstLevel: FirstLevelFilter | null;
  secondLevel: SecondLevelFilter[] | [];
}
