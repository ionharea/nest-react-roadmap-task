import axios from 'axios';
import { Post } from '../../types';
import { BASE_API_URL } from '../constants';

export const getPost = async (postId: string) => {
  try {
    const { data } = await axios.get<Post>(`${BASE_API_URL}/posts/${postId}`);
    return data;
  } catch(error) {
    return {} as Post;
  }
};
