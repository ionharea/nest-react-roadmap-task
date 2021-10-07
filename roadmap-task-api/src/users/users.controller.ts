import {
  Controller,
  Param,
  Get,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindOneParams } from '../pipes/findOneParams';
import { UsersService } from './users.service';
import { PostsService } from '../posts/posts.service';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();

    if (!users)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return users;
  }

  @Get('/:userId')
  async getUser(@Param() params: Pick<FindOneParams, 'userId'>) {
    const user = await this.usersService.getUser(parseInt(params.userId));

    if (!user)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return user;
  }

  @Get('/:userId/posts')
  async getUserPosts(@Param() params: Pick<FindOneParams, 'userId'>) {
    const userPosts = await this.postsService.getUserPosts(
      parseInt(params.userId),
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
      parseInt(params.userId),
      parseInt(params.postId),
    );

    if (!userPost)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return userPost;
  }
}
