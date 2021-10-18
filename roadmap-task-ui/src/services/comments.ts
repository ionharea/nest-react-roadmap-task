import axios from 'axios';
import { Comment } from '../types';
import { BASE_API_URL, DEF_LIMIT, DEF_PAGE } from './constants';

export const getPostComments = async (postId: string, page = DEF_PAGE, limit = DEF_LIMIT) => {
  try {
    const { data } = await axios.get<Comment[]>(`${BASE_API_URL}/posts/${postId}/comments?_page=${page}&_limit=${limit}`);
    return data;
  } catch(error) {
    return [];
  }
};
