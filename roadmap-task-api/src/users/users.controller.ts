import {
  Controller,
  Param,
  Get,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindOneParams } from '../pipes/findOneParams';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();

    if (!users)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return users;
  }

  @Get(':id')
  async getUser(@Param() params: FindOneParams) {
    const user = await this.usersService.getUser(params.id);

    if (!user)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return user;
  }
}
