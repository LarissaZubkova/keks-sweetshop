import { FilterSortDate, FilterSortType, FirstLevelFilter, NameSpace, SecondLevelFilter } from '../../const';
import { State } from '../../types/state';

export const getFirstLevelFilter = (state: Pick<State, NameSpace.Filters>): FirstLevelFilter | null => state[NameSpace.Filters].firstLevel;
export const getSecondLevelFilter = (state: Pick<State, NameSpace.Filters>): SecondLevelFilter[] => state[NameSpace.Filters].secondLevel;
export const getSortingTypeByRating = (state: Pick<State, NameSpace.Filters>): FilterSortType => state[NameSpace.Filters].sortingByRating;
export const getSortingTypeByDate = (state: Pick<State, NameSpace.Filters>): FilterSortDate => state[NameSpace.Filters].sortingByDate;
