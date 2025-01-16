import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { GoogleOAuthStrategy } from './oauth.service';

@Module({
  imports: [PassportModule.register({ session: false })],
  controllers: [AuthController],
  providers: [GoogleOAuthStrategy],
})
export class AuthModule {}
