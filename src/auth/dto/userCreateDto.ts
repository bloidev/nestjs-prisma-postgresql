import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
    
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly pass: string;
}