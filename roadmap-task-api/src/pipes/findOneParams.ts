import { IsNumberString, ValidateIf } from 'class-validator';

export class FindOneParams {
  @ValidateIf((o) => o.userId)
  @IsNumberString()
  userId: string;

  @ValidateIf((o) => o.postId)
  @IsNumberString()
  postId: string;

  @ValidateIf((o) => o.commentId)
  @IsNumberString()
  commentId: string;
}

export class QueryParams {
  @ValidateIf((o) => o._page)
  @IsNumberString()
  _page: string;

  @ValidateIf((o) => o._limit)
  @IsNumberString()
  _limit: string;
}
