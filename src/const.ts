import { ShopsInfo } from './types/data';

export const BACKEND_URL = 'https://grading.design.pages.academy/v0/keks';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'keks-token';
export const USER_EMAIL_KEY_NAME = 'Email';
export const USER_AVATAR_KEY_NAME = 'avatar-url';
export const RANDOM_MAX_COUNT = 3;
export const DEFAULT_LAST_DIGITS_COUNT = 499;
export const DESCRIPTION_MAX_LENGTH = 140;
export const URL_MARKER_SHOP = 'img/content/map-marker2.svg';
export const URL_MARKER_PRODUCTION = 'img/content/map-marker1.svg';
export const DEFAULT_ZOOM = 14;
export const DEFAULT_CARDS_COUNT = 6;
export const DEFAULT_REVIEWS_COUNT = 2;
export const FILE_TYPES = ['jpg', 'png'];

export enum AppRoute {
    Main = '/',
    LogIn = '/logIn',
    SignUp = '/SignUp',
    Catalog = '/Catalog',
    Favorites = '/Favourites',
    Product = '/ProductPage/:id',
}

export enum FirstLevelFilter {
    Bisque = 'Бисквит',
    Dessert = 'Десерт',
    Cheesecake = 'Чизкейк',
    Shortbread = 'Песочное',
}

export enum CategoryFilter {
  Bisque = 'bisque',
  Dessert = 'dessert',
  Cheesecake = 'cheesecake',
  Shortbread = 'shortbread',
}

export enum SecondLevelFilter {
  Chocolate = 'Шоколадный',
  Vegetarian = 'Вегетарианский',
  NewYork = 'Нью-Йорк',
  Lemon = 'Лимонный',
  Vanilla = 'Ваниль',
}

export enum TypeFilter {
  Chocolate = 'chocolate',
  Vegetarian = 'vegetarian',
  NewYork = 'new-york',
  Lemon = 'lemon',
  Vanilla = 'Ваниль',
}

export enum APIRout {
    Products = '/products',
    Product = '/products/:id',
    Favorites = '/favorites',
    Login = 'users/login',
    Registration = 'users/registration',
    Logout = 'users/logout',
    Avatar = '/users/upload',
    LastReview = 'reviews/getLast',
    Review = '/reviews/',
}

export enum NameSpace {
    Cakes = 'CAKES',
    CakeCard = 'CAKE_CARD',
    User = 'USER',
    Review = 'REVIEW',
    Filters = 'FILTERS',
    Favorites = 'FAVORITES',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum FilterSortType {
    All = 'Любой',
    High = 'Высокий',
    Low = 'Низкий',
}

export enum FilterSortDate {
  Top = 'сортировка по возрастанию',
  Down = 'сортировка по убыванию',
}

export const Shops: ShopsInfo = {
  FIRST_SHOP: {
    name: 'Кондитерская 1',
    address: [59.970969, 30.316252]
  },
  SECOND_SHOP: {
    name: 'Кондитерская 2',
    address: [59.967947, 30.274708]
  },
  PRODUCTION: {
    name: 'Производство',
    address: [59.960380, 30.308725]
  },
};

export const DateFormat = {
  DATE_TIME_FORMAT: 'YYYY-MM-DD',
  DATE_FORMAT: 'DD.MM',
};
