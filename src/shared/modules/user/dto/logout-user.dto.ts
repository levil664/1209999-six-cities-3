import { IsString } from 'class-validator';
import { LogoutUserMessage } from './logout-user.messages.js';

export class LogoutUserDto {
  @IsString({ message: LogoutUserMessage.token.invalidFormat })
  public token: string;
}
