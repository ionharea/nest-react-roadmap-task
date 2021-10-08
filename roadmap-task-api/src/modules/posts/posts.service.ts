import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Post } from '../../types/post';
import {
  DEF_LIMIT,
  DEF_PAGE,
} from '../../global/constants/defPaginationParams';

@Injectable()
export class PostsService {
  constructor(private readonly configService: ConfigService) {}

  private apiUrl = this.configService.get('TYPICODE_URL');

  getPosts = async (page = DEF_PAGE, limit = DEF_LIMIT) => {
    try {
      const { data }: { data: Post[] } = await axios.get(
        `${this.apiUrl}/posts?_page=${page}&_limit=${limit}`,
      );
      return data;
    } catch {
      return null;
    }
  };

  getPost = async (postId: string) => {
    try {
      const { data }: { data: Post } = await axios.get(
        `${this.apiUrl}/posts/${postId}`,
      );
      return data;
    } catch (err) {
      return null;
    }
  };

  getUserPosts = async (userId: string, page = DEF_PAGE, limit = DEF_LIMIT) => {
    try {
      const { data: posts }: { data: Post[] } = await axios.get(
        `${this.apiUrl}/users/${userId}/posts?_page=${page}&_limit=${limit}`,
      );
      return posts;
    } catch {
      return null;
    }
  };

  getUserPost = async (userId: string, postId: string) => {
    try {
      const { data: posts }: { data: Post[] } = await axios.get(
        `${this.apiUrl}/users/${userId}/posts`,
      );
      if (posts.length === 0 || postId.split('.').length > 1) return {};

      const userPost = posts.find((post) => post.id === parseInt(postId));
      return userPost ?? {};
    } catch {
      return null;
    }
  };
}
