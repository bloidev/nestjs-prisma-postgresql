import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { User } from '@prisma/client';

// localhost:3000/auth/login - POST body: {email, pass}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
) {}

  @Post('login')
  async login(@Body() credentials: { email: string, pass: string }): Promise<{ token: string }> {    
    
    const user = await this.userService.findUserByEmailAndPass(credentials.email, credentials.pass);
    
    console.log(user)

    if(user){
      const token = await this.authService.generateToken((await (user)).id);
      console.log(token)      
      return { 
        token        
      };
    }   else{
      throw new HttpException('Usuario o contraseña incorrectos', 401);
    } 
  }

  @Post('register')
  async create(@Body() user : Omit<User, "id">) : Promise<{ status: "ok" | "error"}> {
    
    console.log(user);
    const result = await this.userService.createUser(user);

    return { status: "ok"}
  }
}