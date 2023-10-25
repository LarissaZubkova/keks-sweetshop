export const BACKEND_URL = 'https://grading.design.pages.academy/v0/keks';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'keks-token';
export const USER_EMAIL_KEY_NAME = 'Email';
export const USER_AVATAR_KEY_NAME = 'avatar-url';
export const RANDOM_MAX_COUNT = 3;

export enum AppRoute {
    Main = '/',
    LogIn = '/logIn',
    SignUp = '/SignUp',
    Catalog = '/Catalog',
    Favorites = '/Favourites',
}

export enum FirstLevelFilter {
    Biscuit = 'Бисквит',
    Dessert = 'Десерт',
    Cheesecake = 'Чизкейк',
    Shortbread = 'Песочное',
}

export enum APIRout {
    Products = '/products',
    Login = '/login',
    Logout = '/logout',
}

export enum NameSpace {
    Cakes = 'CAKES',
    User = 'USER',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
