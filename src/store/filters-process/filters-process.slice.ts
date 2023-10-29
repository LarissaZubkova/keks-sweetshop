import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersProcess} from '../../types/state';
import { NameSpace,FirstLevelFilter, SecondLevelFilter, FilterSortType, FilterSortDate } from '../../const';

const initialState: FiltersProcess = {
  firstLevel: null,
  secondLevel: [],
  sortingByRating: FilterSortType.All,
  sortingByDate: FilterSortDate.Top,
};

export const filtersProcess = createSlice({
  name: NameSpace.CakeCard,
  initialState,
  reducers: {
    setFirstLevelFilter: (state, action: PayloadAction<FirstLevelFilter | null>) => {
      state.firstLevel = action.payload;
    },
    setSecondLevelFilter: (state, action: PayloadAction<SecondLevelFilter | null>) => {
      if (state.secondLevel.includes(action.payload)) {
        state.secondLevel = state.secondLevel.filter((filter) => filter !== action.payload);
      } else {
        state.secondLevel.push(action.payload);
      }
    },
    resetSecondFilter: (state) => {
      state.secondLevel = [];
    },
    setSortingTypeByRating: (state, action: PayloadAction<FilterSortType>) => {
      state.sortingByRating = action.payload;
    },
    setSortingTypeByDate: (state, action: PayloadAction<FilterSortDate>) => {
      state.sortingByDate = action.payload;
    },
    resetSorting: (state) => {
      state.sortingByRating = FilterSortType.All;
      state.sortingByDate = FilterSortDate.Top;
    },
  },
});

export const {
  setFirstLevelFilter,
  setSecondLevelFilter,
  resetSecondFilter,
  setSortingTypeByDate,
  setSortingTypeByRating,
  resetSorting,
} = filtersProcess.actions;
