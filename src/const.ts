export const BACKEND_URL = 'https://grading.design.pages.academy/v0/keks';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'keks-token';
export const USER_EMAIL_KEY_NAME = 'Email';
export const USER_AVATAR_KEY_NAME = 'avatar-url';
export const RANDOM_MAX_COUNT = 3;
export const URL_MARKER_SHOP = 'img/content/map-marker2.svg';
export const URL_MARKER_PRODUCTION = 'img/content/map-marker1.svg';
export const DEFAULT_LOCATION = [59.970969, 30.316252];

export enum AppRoute {
    Main = '/',
    LogIn = '/logIn',
    SignUp = '/SignUp',
    Catalog = '/Catalog',
    Favorites = '/Favourites',
    Product = '/ProductPage/:id',
}

export enum FirstLevelFilter {
    Biscuit = 'Бисквит',
    Dessert = 'Десерт',
    Cheesecake = 'Чизкейк',
    Shortbread = 'Песочное',
}

export enum APIRout {
    Products = '/products',
    Product = '/products/:id',
    Login = '/login',
    Logout = '/logout',
}

export enum NameSpace {
    Cakes = 'CAKES',
    CakeCard = 'CAKE_CARD',
    User = 'USER',
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

export const Shops = {
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
