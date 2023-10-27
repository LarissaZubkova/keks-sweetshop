import { CakeCard } from '../types/product';
import { RANDOM_MAX_COUNT, FILE_TYPES, DateFormat, FirstLevelFilter, CategoryFilter, SecondLevelFilter, TypeFilter } from '../const';
import dayjs from 'dayjs';
export function validateEmail(email: string) {
  if (
    !email ||
      !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email) ||
      false
  ) {
    return false;
  }

  return true;
}

export function validatePassword(password: string) {
  if (
    !password ||
      password.length < 2 ||
      !/\d/.test(password) ||
      !/\D/i.test(password) ||
      false
  ) {
    return false;
  }

  return true;
}

export function validateName(name: string) {
  return name.length >= 1;
}

export function validateAvatar(avatar: File) {
  if (avatar.size === 0) {
    return true;
  }

  const fileName = avatar.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  return matches && avatar.size <= 10000000;
}

export function getPrice(price: number) {
  return price.toLocaleString('ru-RU',);
}

export function getRandomCakes(cakes: CakeCard[]) {
  return [...cakes].sort(() => Math.random() - 0.5).slice(0, RANDOM_MAX_COUNT);
}

export function getDateFormat(date: string) {
  const dateTime = dayjs(date).format(DateFormat.DATE_TIME_FORMAT);
  const ratingDate = dayjs(date).format(DateFormat.DATE_FORMAT);

  return {dateTime, ratingDate};
}

export const filterFirstLevel = {
  [FirstLevelFilter.Bisque]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === CategoryFilter.Bisque),
  [FirstLevelFilter.Cheesecake]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === CategoryFilter.Cheesecake),
  [FirstLevelFilter.Dessert]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === CategoryFilter.Dessert),
  [FirstLevelFilter.Shortbread]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === CategoryFilter.Shortbread),
};

const filterSecondLevel = {
  [SecondLevelFilter.Chocolate]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === TypeFilter.Chocolate),
  [SecondLevelFilter.Lemon]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === TypeFilter.Lemon),
  [SecondLevelFilter.NewYork]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === TypeFilter.NewYork),
  [SecondLevelFilter.Vanilla]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === TypeFilter.Vanilla),
  [SecondLevelFilter.Vegetarian]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === TypeFilter.Vegetarian),
};

export function filterByType(secondLevel: SecondLevelFilter[], cakes: CakeCard[]) {
  return secondLevel.map((filter) => filterSecondLevel[filter](cakes)).flat();
}
