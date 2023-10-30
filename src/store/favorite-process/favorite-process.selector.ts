import { NameSpace } from '../../const';
import { CakeFullCard } from '../../types/product';
import { State } from '../../types/state';

export const getFavorites = (state: Pick<State, NameSpace.Favorites>): CakeFullCard[] => state[NameSpace.Favorites].favorites;
export const getFavoritesLoadingStatus = (state: Pick<State, NameSpace.Favorites>) => state[NameSpace.Favorites].isFavoritesLoading;
export const getFavoritesErrorStatus = (state: Pick<State, NameSpace.Favorites>) => state[NameSpace.Favorites].hasFavoritesError;
export const getAddStatusError = (state: Pick<State, NameSpace.Favorites>) => state[NameSpace.Favorites].hasAddFAvoritesError;
export const getDeleteStatusError = (state: Pick<State, NameSpace.Favorites>) => state[NameSpace.Favorites].hasDeleteFavoritesError;
