import { Injectable } from '@nestjs/common'; 
import { PrismaClient, User } from '@prisma/client'; 

const prisma =  new PrismaClient();

@Injectable()
export class UserService {
  constructor() {}

  async createUser(data: User): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  async findAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async findUserById(userId: number): Promise<User> {
    return prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async findUserByEmailAndPass(email: string, pass: string): Promise<User> {
    return prisma.user.findUnique({
      where: { email: email, pass: pass },
    });
  }  

  async updateUser(userId: number, data: { name?: string }): Promise<User> {
    return prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async deleteUser(userId: number): Promise<User> {
    return prisma.user.delete({
      where: { id: userId },
    });
  }
}