import { ShopsInfo } from './types/data';

export const BACKEND_URL = 'https://grading.design.pages.academy/v0/keks';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'keks-token';
export const USER_EMAIL_KEY_NAME = 'Email';
export const USER_AVATAR_KEY_NAME = 'avatar-url';
export const RANDOM_MAX_COUNT = 3;
export const REVIEW_MAX_LENGTH = 500;
export const DEFAULT_LAST_DIGITS_COUNT = 499;
export const DESCRIPTION_MAX_LENGTH = 140;
export const REGISTRATION_NAME_MIN_LENGTH = 1;
export const PASSWORD_MIN_LENGTH = 2;
export const URL_MARKER_SHOP = 'img/content/map-marker2.svg';
export const URL_MARKER_PRODUCTION = 'img/content/map-marker1.svg';
export const DEFAULT_ZOOM = 14;
export const DEFAULT_CARDS_COUNT = 6;
export const DEFAULT_REVIEWS_COUNT = 2;
export const FILE_TYPES = ['jpg', 'png'];
export const STARS_COUNT = 5;

export const Rating = {
  GOOD: 4,
  BAD: 3,
};

export const FavoritesButtonSize = {
  BIG: {
    width: 51,
    height: 41,
  },
  SMALL: {
    width: 45,
    height: 37,
  }
};

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
  HoneyCake = 'Медовый',
  Tart = 'Тарт',
  FunnelCake = 'Mуравейник',
  BasketCake = 'Корзинка',
  ChocolateMuffin = 'Шоколадный маффин',
  BrandMuffin = 'Фирменный маффин',
}

export const TypeByFirstLevelFilter = {
  [FirstLevelFilter.Bisque]: [SecondLevelFilter.Chocolate, SecondLevelFilter.Vanilla, SecondLevelFilter.Vegetarian, SecondLevelFilter.HoneyCake],
  [FirstLevelFilter.Dessert]: [SecondLevelFilter.ChocolateMuffin, SecondLevelFilter.BrandMuffin],
  [FirstLevelFilter.Cheesecake]: [SecondLevelFilter.Chocolate, SecondLevelFilter.Vanilla, SecondLevelFilter.Vegetarian, SecondLevelFilter.Lemon, SecondLevelFilter.NewYork],
  [FirstLevelFilter.Shortbread]: [SecondLevelFilter.Tart, SecondLevelFilter.FunnelCake, SecondLevelFilter.BasketCake],
};

export enum TypeFilter {
  Chocolate = 'chocolate',
  Vegetarian = 'vegetarian',
  NewYork = 'new-york',
  Lemon = 'lemon',
  Vanilla = 'vanilla',
  HoneyCake = 'honey-cake',
  Tart = 'tart',
  FunnelCake = 'funnel-cake',
  BasketCake = 'basket-cake',
  ChocolateMuffin = 'chocolate-muffin',
  BrandMuffin = 'brand-muffin',
}

export enum APIRout {
  Products = '/products',
  Categories = '/categories',
  Product = '/products/:id',
  Favorites = '/favorites',
  Login = 'users/login',
  Registration = 'users/registration',
  Logout = 'users/logout',
  Avatar = 'users/upload',
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
    address: [59.970969, 30.316252],
    place: 'ул. Профессора Попова, 9-15',
  },
  SECOND_SHOP: {
    name: 'Кондитерская 2',
    address: [59.967947, 30.274708],
    place: 'Спортивная площадка, д. 10, литер А, пом. 428, Вязовая ул.',
  },
  PRODUCTION: {
    name: 'Производство',
    address: [59.960380, 30.308725],
    place: 'ул. Ленина, 10-8',
  },
};

export const DateFormat = {
  DATE_TIME_FORMAT: 'YYYY-MM-DD',
  DATE_FORMAT: 'DD.MM',
};
