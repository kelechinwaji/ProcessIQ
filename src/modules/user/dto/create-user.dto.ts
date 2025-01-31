import { IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  displayName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUrl()
  photo: string;
}
