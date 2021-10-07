import {
  Controller,
  Param,
  Get,
  InternalServerErrorException,
} from '@nestjs/common';
import { FindOneParams } from '../../pipes/findOneParams';
import { CommentsService } from './comments.service';

@Controller()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async getComments() {
    const comments = await this.commentsService.getComments();

    if (!comments)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return comments;
  }

  @Get('/:commentId')
  async getComment(@Param() params: FindOneParams) {
    const comment = await this.commentsService.getComment(
      parseInt(params.commentId),
    );

    if (!comment)
      throw new InternalServerErrorException(
        'Oops, something went wrong, could not fetch the data form the external API',
      );

    return comment;
  }
}
