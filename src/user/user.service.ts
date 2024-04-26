import { Injectable } from '@nestjs/common'; 
import { PrismaClient, User } from '@prisma/client'; 
import { UserCreateDto } from 'src/auth/dto/userCreateDto';

const prisma =  new PrismaClient();

@Injectable()
export class UserService {
  constructor() {}

  async createUser(data: UserCreateDto): Promise<User> {
    return prisma.user.create({ 
      data: {
        email: data.email,
        name: data.name,
        pass: data.pass
      }
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
    
    return await prisma.user.findUnique({
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