import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { FindOneParams } from '../../pipes/findOneParams';
import { PostsService } from './posts.service';
import { CommentsService } from '../comments/comments.service';

@Controller()
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly commentsService: CommentsService,
  ) {}

  @Get()
  async getPosts() {
    const posts = await this.postsService.getPosts();

    if (!posts)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return posts;
  }

  @Get('/:postId')
  async getPost(@Param() params: FindOneParams) {
    const post = await this.postsService.getPost(parseInt(params.postId));

    if (!post)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return post;
  }

  @Get('/:postId/comments')
  async getPostComments(@Param() params: FindOneParams) {
    const post = await this.commentsService.getPostComments(
      parseInt(params.postId),
    );

    if (!post)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return post;
  }

  @Get('/:postId/comments/:commentId')
  async getPostComment(@Param() params: FindOneParams) {
    const post = await this.commentsService.getPostComment(
      parseInt(params.postId),
      parseInt(params.commentId),
    );

    if (!post)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return post;
  }
}
