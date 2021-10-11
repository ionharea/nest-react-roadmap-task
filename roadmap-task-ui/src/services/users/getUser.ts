import axios from 'axios';
import { User } from '../../types';
import { BASE_API_URL } from '../constants';

export const getUser = async (userId: string) => {
  try {
    const { data } = await axios.get<User>(`${BASE_API_URL}/users/${userId}`);
    return data;
  } catch(error) {
    return {} as User;
  }
};
