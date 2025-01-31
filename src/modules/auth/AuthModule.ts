import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { GoogleOAuthStrategy } from './oauth.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [PassportModule.register({ session: false }), UserModule],
  controllers: [AuthController],
  providers: [GoogleOAuthStrategy],
})
export class AuthModule {}
