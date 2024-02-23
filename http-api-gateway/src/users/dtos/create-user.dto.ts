import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  displayName?: string;

  @IsString()
  email: string;
}
