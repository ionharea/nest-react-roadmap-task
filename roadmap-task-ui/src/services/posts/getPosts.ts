import axios from 'axios';
import { Post } from '../../types';
import { BASE_API_URL, DEF_LIMIT, DEF_PAGE } from '../constants';

export const getUserPosts = async (userId: string, page = DEF_PAGE, limit = DEF_LIMIT) => {
  try {
    const { data } = await axios.get<Post[]>(`${BASE_API_URL}/users/${userId}/posts?_page=${page}&_limit=${limit}`);
    return data;
  } catch(error) {
    return [];
  }
};
