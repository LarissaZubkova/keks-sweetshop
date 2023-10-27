import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersProcess} from '../../types/state';
import { NameSpace,FirstLevelFilter, SecondLevelFilter } from '../../const';

const initialState: FiltersProcess = {
  firstLevel: null,
  secondLevel: [],
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
    }
  },
});

export const {setFirstLevelFilter, setSecondLevelFilter, resetSecondFilter} = filtersProcess.actions;
