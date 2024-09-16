'use server';
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const getUserData = async (username: string) => {
  const response = await axios.get(`${BASE_URL}${username}`);
  return response.data;
};
