import { USER_AVATAR_KEY_NAME, USER_EMAIL_KEY_NAME } from '../const';

export const saveAvatarUrl = (avatarUrl: string) => {
  localStorage.setItem(USER_AVATAR_KEY_NAME, avatarUrl);
};

export const dropAvatarUrl = (): void => {
  localStorage.removeItem(USER_AVATAR_KEY_NAME);
};

export const saveUserEmail = (email: string) => {
  localStorage.setItem(USER_EMAIL_KEY_NAME, email);
};

export const dropUserEmail = (): void => {
  localStorage.removeItem(USER_EMAIL_KEY_NAME);
};
