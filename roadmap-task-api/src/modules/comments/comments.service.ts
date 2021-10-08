import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Comment } from '../../types/comment';

@Injectable()
export class CommentsService {
  constructor(private readonly configService: ConfigService) {}

  private readonly apiUrl = this.configService.get('TYPICODE_URL');

  getComments = async () => {
    try {
      const { data }: { data: Comment[] } = await axios.get(
        `${this.apiUrl}/comments`,
      );
      return data;
    } catch {
      return null;
    }
  };

  getComment = async (commentId: number) => {
    try {
      const { data }: { data: Comment } = await axios.get(
        `${this.apiUrl}/comments/${commentId}`,
      );
      return data;
    } catch {
      return null;
    }
  };

  getPostComments = async (postId: string) => {
    try {
      const { data }: { data: Comment[] } = await axios.get(
        `${this.apiUrl}/posts/${postId}/comments`,
      );
      return data;
    } catch {
      return null;
    }
  };

  getPostComment = async (postId: string, commentId: string) => {
    try {
      const postComments = await this.getPostComments(postId);
      if (postComments.length === 0 || commentId.split('.').length > 1)
        return {};

      const postComment = postComments.find(
        (comment) => comment.id === parseInt(commentId),
      );
      return postComment ?? {};
    } catch {
      return null;
    }
  };
}
