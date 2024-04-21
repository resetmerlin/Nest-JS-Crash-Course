import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    console.log(sortDesc);
    return { username: 'Anson', email: 'ason@anson.com' };
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Anson',
        email: 'anson@anson.com',
        posts: [
          { id: 1, title: 'Post1' },
          { id: 2, title: 'Post2' },
          { id: 3, title: 'Post3' },
          { id: 4, title: 'Post4' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'POSTS',
        Comments: [],
      },
    ];
  }
  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userDate: CreateUserDto) {
    console.log(userDate);
    return {};
  }

  @Get(':id/:postId')
  getUserByPostId(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id);
    return { id, postId };
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}
