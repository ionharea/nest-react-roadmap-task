import { IsNumberString } from 'class-validator';

export class FindOneParams {
  @IsNumberString()
  userId: string;

  @IsNumberString()
  postId: string;
}
