import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { productsProcess } from './products-process/products-process.slice';
import { userProcess } from './user-process/user-process.slice';
import { productCardProcess } from './product-card-process/product-card-process.slise';
import { reviewProcess } from './review-process/review-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Cakes]: productsProcess.reducer,
  [NameSpace.CakeCard]: productCardProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
});
