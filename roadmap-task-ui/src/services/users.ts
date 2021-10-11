import { BASE_API_URL } from './constants/apiUrl';
import axios from 'axios';
import { User } from '../../../roadmap-task-api/src/types/user';

export const getUsers = async () => {
  try {
    const { data } = await axios.get<User[]>(`${BASE_API_URL}/users`);
    return data;
  } catch(error) {
    return [];
  }
};
