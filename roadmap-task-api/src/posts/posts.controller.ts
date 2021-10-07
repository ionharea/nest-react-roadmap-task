import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { FindOneParams } from '../pipes/findOneParams';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('')
  async getPosts() {
    const posts = await this.postsService.getPosts();

    if (!posts)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return posts;
  }

  @Get('/:postId')
  async getPost(@Param() params: Pick<FindOneParams, 'postId'>) {
    const post = await this.postsService.getPost(parseInt(params.postId));

    if (!post)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return post;
  }
}
