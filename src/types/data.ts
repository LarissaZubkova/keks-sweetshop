import { FilterSortType, FilterSortDate } from '../const';

export type ShopsInfo = {
  FIRST_SHOP: Shop;
  SECOND_SHOP: Shop;
  PRODUCTION: Shop;
}

export type Shop = {
  name: string;
address: [number, number];
}

export type SortType = {
  rating: FilterSortType;
  date: FilterSortDate;
}
