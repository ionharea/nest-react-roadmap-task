import {
  Controller,
  Param,
  Query,
  Get,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindOneParams, QueryParams } from '../../pipes/findOneParams';
import { PostsService } from './posts.service';
import { CommentsService } from '../comments/comments.service';

@Controller()
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly commentsService: CommentsService,
  ) {}

  @Get()
  async getPosts(@Query() query: QueryParams) {
    const posts = await this.postsService.getPosts(query._page, query._limit);

    if (!posts)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return posts;
  }

  @Get('/:postId')
  async getPost(@Param() params: FindOneParams) {
    const post = await this.postsService.getPost(params.postId);

    if (!post)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return post;
  }

  @Get('/:postId/comments')
  async getPostComments(@Param() params: FindOneParams) {
    const comments = await this.commentsService.getPostComments(params.postId);

    if (!comments)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return comments;
  }

  @Get('/:postId/comments/:commentId')
  async getPostComment(@Param() params: FindOneParams) {
    const comment = await this.commentsService.getPostComment(
      params.postId,
      params.commentId,
    );

    if (!comment)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return comment;
  }
}
