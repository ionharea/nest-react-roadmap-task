import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './modules/posts/posts.module';
import { RouterModule } from '@nestjs/core';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RouterModule.register([
      {
        path: 'dashboard',
        module: AppModule,
        children: [
          {
            path: 'users',
            module: UsersModule,
          },
          {
            path: 'posts',
            module: PostsModule,
          },
          {
            path: 'comments',
            module: CommentsModule,
          },
        ],
      },
    ]),
    UsersModule,
    PostsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
