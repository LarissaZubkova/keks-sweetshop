import dayjs from 'dayjs';
import { CategoryFilter, DEFAULT_LAST_DIGITS_COUNT, DateFormat, FILE_TYPES, FilterSortDate, FilterSortType, FirstLevelFilter, PASSWORD_MIN_LENGTH, RANDOM_MAX_COUNT, REGISTRATION_NAME_MIN_LENGTH, REVIEW_MAX_LENGTH, Rating, SecondLevelFilter, TypeFilter } from '../const';
import { CakeCard } from '../types/product';
import { Review } from '../types/review';

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
      password.length < PASSWORD_MIN_LENGTH ||
      !/\d/.test(password) ||
      !/\D/i.test(password) ||
      false
  ) {
    return false;
  }

  return true;
}

export function validateName(name: string) {
  return name.length >= REGISTRATION_NAME_MIN_LENGTH;
}

export function validateAvatar(avatar: File) {
  if (!avatar.name) {
    return true;
  } else {
    const fileName = avatar.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    return matches && avatar.size <= 1024 * 1024 ;
  }
}

export function getFormat(data: number) {
  return data.toLocaleString('ru-RU');
}

export function getRandomCakes(cakes: CakeCard[]) {
  return [...cakes].sort(() => Math.random() - 0.5).slice(0, RANDOM_MAX_COUNT);
}

export function getDateFormat(date: string) {
  const dateTime = dayjs(date).format(DateFormat.DATE_TIME_FORMAT);
  const ratingDate = dayjs(date).format(DateFormat.DATE_FORMAT);

  return {dateTime, ratingDate};
}

function sortByTop(reviewA: Review, reviewB: Review) {
  return dayjs(reviewB.isoDate).diff(reviewA.isoDate);
}

function sortByDown(reviewA: Review, reviewB: Review) {
  return dayjs(reviewA.isoDate).diff(reviewB.isoDate);
}

export const filterFirstLevel = {
  [FirstLevelFilter.Bisque]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === CategoryFilter.Bisque),
  [FirstLevelFilter.Cheesecake]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === CategoryFilter.Cheesecake),
  [FirstLevelFilter.Dessert]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === CategoryFilter.Dessert),
  [FirstLevelFilter.Shortbread]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.category === CategoryFilter.Shortbread),
};

const filterSecondLevel = {
  [SecondLevelFilter.Chocolate]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.Chocolate),
  [SecondLevelFilter.Lemon]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.Lemon),
  [SecondLevelFilter.NewYork]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.NewYork),
  [SecondLevelFilter.Vanilla]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.Vanilla),
  [SecondLevelFilter.Vegetarian]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.Vegetarian),
  [SecondLevelFilter.BasketCake]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.BasketCake),
  [SecondLevelFilter.BrandMuffin]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.BrandMuffin),
  [SecondLevelFilter.ChocolateMuffin]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.ChocolateMuffin),
  [SecondLevelFilter.FunnelCake]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.FunnelCake),
  [SecondLevelFilter.HoneyCake]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.HoneyCake),
  [SecondLevelFilter.Tart]: (cakes: CakeCard[]) => cakes.filter((cake) => cake.type === TypeFilter.Tart),
};

export const sortByRating = {
  [FilterSortType.All]: (reviews: Review[]) => reviews,
  [FilterSortType.High]: (reviews: Review[]) => [...reviews].filter((review) => review.rating > 3),
  [FilterSortType.Low]: (reviews: Review[]) => [...reviews].filter((review) => review.rating < 4),
};

export const sortByDate = {
  [FilterSortDate.Top]: (reviews: Review[]) => [...reviews].sort(sortByTop),
  [FilterSortDate.Down]: (reviews: Review[]) => [...reviews].sort(sortByDown),
};

export function filterByType(secondLevel: SecondLevelFilter[], cakes: CakeCard[]) {
  return secondLevel.map((filter) => filterSecondLevel[filter](cakes)).flat();
}

export function validatePositive(positive: string, rating: number) {
  if (rating > Rating.BAD) {
    return Boolean(positive) && positive.length <= REVIEW_MAX_LENGTH;
  }
  return true;
}

export function validateNegative(negative: string, rating: number) {
  if (rating < Rating.GOOD && rating > 0) {
    return Boolean(negative) && negative.length <= REVIEW_MAX_LENGTH;
  }
  return true;
}

export function displayAvailableDigits(digits: string): number {
  return DEFAULT_LAST_DIGITS_COUNT - digits.length;
}

export function getLetter(count: number) {
  switch (count) {
    case 1:
      return '';
    case 2:
    case 3:
      return 'а';
    default:
      return 'ов';
  }
}
