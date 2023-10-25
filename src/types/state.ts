import { store } from '../store/index';
import { CakeCard } from './Cake';
import { AuthorizationStatus } from '../const';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type ProductsProcess = {
    products: CakeCard[];
    isProductsLoading: boolean;
    hasProductsError: boolean;
}

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    avatarUrl: string;
    email: string;
}
