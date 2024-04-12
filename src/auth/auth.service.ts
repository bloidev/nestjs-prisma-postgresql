import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly jwtSecret = 'tu-secreto-secreto'; // Cambia esto con una clave secreta segura en un entorno de producción

  async generateToken(userId: number): Promise<string> {
    const payload = { userId };
    return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });
  }
}