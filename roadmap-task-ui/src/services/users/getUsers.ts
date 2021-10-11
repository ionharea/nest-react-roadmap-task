import axios from 'axios';
import { User } from '../../types';
import { BASE_API_URL, DEF_LIMIT, DEF_PAGE } from '../constants';

export const getUsers = async (page = DEF_PAGE, limit = DEF_LIMIT) => {
  try {
    // This is another way of assigning a type to data, using generics, instead of :{data: User[]}
    const { data } = await axios.get<User[]>(`${BASE_API_URL}/users?_page=${page}&_limit=${limit}`);
    return data;
  } catch(error) {
    return [];
  }
};
