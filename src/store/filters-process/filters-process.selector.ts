import { FirstLevelFilter, NameSpace, SecondLevelFilter } from '../../const';
import { State } from '../../types/state';

export const getFirstLevelFilter = (state: Pick<State, NameSpace.Filters>): FirstLevelFilter | null => state[NameSpace.Filters].firstLevel;
export const getSecondLevelFilter = (state: Pick<State, NameSpace.Filters>): SecondLevelFilter[] | [] => state[NameSpace.Filters].secondLevel;
