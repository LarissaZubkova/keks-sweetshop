import { NameSpace } from '../../const';
import { CakeCard, Category } from '../../types/product';
import { State } from '../../types/state';

export const getProducts = (state: Pick<State, NameSpace.Cakes>): CakeCard[] => state[NameSpace.Cakes].products;
export const getProductsLoadingStatus = (state: Pick<State, NameSpace.Cakes>): boolean => state[NameSpace.Cakes].isProductsLoading;
export const getProductsErrorStatus = (state: Pick<State, NameSpace.Cakes>): boolean => state[NameSpace.Cakes].hasProductsError;
export const getCategories = (state: Pick<State, NameSpace.Cakes>): Category[] => state[NameSpace.Cakes].categories;
