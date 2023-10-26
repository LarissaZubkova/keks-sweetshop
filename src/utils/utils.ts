import { CakeCard } from '../types/cake';
import { RANDOM_MAX_COUNT } from '../const';

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

export function validateAvatar(avatar: string) {
  return avatar;
}

export function getPrice(price: number) {
  return price.toLocaleString('ru-RU',);
}

export function getRandomCakes(cakes: CakeCard[]) {
  return [...cakes].sort(() => Math.random() - 0.5).slice(0, RANDOM_MAX_COUNT);
}
