import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';

// localhost:3000/auth/login - POST body: {email, pass}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
) {}

  @Post('login')
  async login(@Body() credentials: { email: string, pass: string }): Promise<{ token: string }> {    
    const user = this.userService.findUserByEmailAndPass(credentials.email, credentials.pass);    

    if( user){
      const token = await this.authService.generateToken((await (user)).id);
      
      return { 
        token        
      };
    }    

    // HttpException.createBody()    
  }
}