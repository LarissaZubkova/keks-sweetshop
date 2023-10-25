import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { productsProcess } from './products-process/products-process.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Cakes]: productsProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
