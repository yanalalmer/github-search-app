import { atom } from 'recoil';

interface User {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  twitter_username: string;
  html_url: string;
  blog: string;
  company: string;
}

export const searchValueState = atom<string>({
  key: 'SearchValue',
  default: 'yanalalmer',
});

export const userState = atom<User | null>({
  key: 'User',
  default: null,
});

export const loadingState = atom<boolean>({
  key: 'Loading',
  default: true,
});

export const errorState = atom<string | null>({
  key: 'Error',
  default: null,
});
