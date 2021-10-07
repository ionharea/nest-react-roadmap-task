import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Post } from '../../types/post';

@Injectable()
export class PostsService {
  constructor(private readonly configService: ConfigService) {}

  private apiUrl = this.configService.get('TYPICODE_URL');

  getPosts = async () => {
    try {
      const { data }: { data: Post[] } = await axios.get(
        `${this.apiUrl}/posts`,
      );
      return data;
    } catch {
      return null;
    }
  };

  getPost = async (postId: number) => {
    try {
      const { data }: { data: Post } = await axios.get(
        `${this.apiUrl}/posts/${postId}`,
      );
      return data;
    } catch {
      return null;
    }
  };

  getUserPosts = async (userId: number) => {
    try {
      const posts = await this.getPosts();
      if (!posts) return null;

      return posts.filter((post) => post.userId === userId);
    } catch {
      return null;
    }
  };

  getUserPost = async (userId: number, postId: number) => {
    try {
      const posts = await this.getPosts();
      if (!posts) return null;

      const userPost: Post | undefined = posts.find(
        (post) => post.id === postId,
      );
      return userPost ?? {};
    } catch {
      return null;
    }
  };
}
