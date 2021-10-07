import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Comment } from '../../types/comment';

@Injectable()
export class CommentsService {
  constructor(private readonly configService: ConfigService) {}

  private apiUrl = this.configService.get('TYPICODE_URL');

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

  getPostComments = async (postId: number) => {
    try {
      const { data }: { data: Comment[] } = await axios.get(
        `${this.apiUrl}/posts/${postId}/comments`,
      );
      if (!data) return null;

      return data;
    } catch {
      return null;
    }
  };

  getPostComment = async (postId: number, commentId: number) => {
    try {
      const postComments = await this.getPostComments(postId);
      if (!postComments) return null;

      const postComment: Comment | undefined = postComments.find(
        (comment) => comment.id === commentId,
      );
      return postComment ?? {};
    } catch {
      return null;
    }
  };
}
