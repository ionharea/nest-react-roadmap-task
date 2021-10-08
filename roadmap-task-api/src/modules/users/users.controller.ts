import {
  Controller,
  Param,
  Get,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { FindOneParams, QueryParams } from '../../pipes/findOneParams';
import { UsersService } from './users.service';
import { PostsService } from '../posts/posts.service';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  @Get()
  async getUsers(@Query() query: QueryParams) {
    const users = await this.usersService.getUsers(query._page, query._limit);

    if (!users)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return users;
  }

  @Get('/:userId')
  async getUser(@Param() params: FindOneParams) {
    const user = await this.usersService.getUser(params.userId);

    if (!user)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return user;
  }

  @Get('/:userId/posts')
  async getUserPosts(
    @Param() params: FindOneParams,
    @Query() query: QueryParams,
  ) {
    const userPosts = await this.postsService.getUserPosts(
      params.userId,
      query._page,
      query._limit,
    );

    if (!userPosts)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return userPosts;
  }

  @Get('/:userId/posts/:postId')
  async getUserPost(@Param() params: FindOneParams) {
    const userPost = await this.postsService.getUserPost(
      params.userId,
      params.postId,
    );

    if (!userPost)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return userPost;
  }
}
