import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { CakeFullCard } from '../../types/cake';

export const getProductCard = (state: Pick<State, NameSpace.CakeCard>): CakeFullCard | null => state[NameSpace.CakeCard].productCard;
export const getProductCardLoadingStatus = (state: Pick<State, NameSpace.CakeCard>): boolean => state[NameSpace.CakeCard].isProductCardLoading;
export const getProductCardErrorStatus = (state: Pick<State, NameSpace.CakeCard>): boolean => state[NameSpace.CakeCard].hasProductCardError;
