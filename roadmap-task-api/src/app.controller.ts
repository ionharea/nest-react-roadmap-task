import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FindOneParams } from './pipes/findOneParams';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  async getUsers() {
    const users = await this.appService.getUsers();

    if (users) return users;

    throw new InternalServerErrorException(
      'Oops, something went wrong, could not fetch the data form the external API',
    );
  }

  @Get('/users/:id')
  async getUser(@Param() params: FindOneParams) {
    const user = await this.appService.getUser(params.id);

    if (user) return user;

    throw new InternalServerErrorException(
      'Oops, something went wrong, could not fetch the data form the external API',
    );
  }
}
