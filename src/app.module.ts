import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './common/logger/logger.service';
import { OauthService } from './auth/oauth/oauth.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LoggerService, OauthService],
})
export class AppModule {}
