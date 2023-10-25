import { CakeCard } from '../types/Cake';
import { RANDOM_MAX_COUNT } from '../const';

export function validateEmail(email: string | undefined) {
  if (
    !email ||
      !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email) ||
      false
  ) {
    return false;
  }

  return true;
}


export function validatePassword(password: string | undefined) {
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

export function getPrice(price: number) {
  return price.toLocaleString('ru-RU',);
}


export function getRandomCakes(cakes: CakeCard[]) {
  return [...cakes].sort(() => Math.random() - 0.5).slice(0, RANDOM_MAX_COUNT);
}
