import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create")
  async createUser(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get("all")
  async findAllUsers(): Promise<User[]> {
    const result = this.userService.findAllUsers();
    console.log(result)
    return result;
  }

  @Get(':id')
  async findUserById(@Param('id') userId: string): Promise<User> {
    return this.userService.findUserById(+userId);
  }

  @Put(':id')
  async updateUser(@Param('id') userId: string, @Body() userData: { name?: string }): Promise<User> {
    return this.userService.updateUser(+userId, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<User> {
    return this.userService.deleteUser(+userId);
  }
}