import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './common/logger/logger.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/AuthModule';
import { UserModule } from './modules/user/user.module';
import { config } from './config/config';

@Module({
  imports: [
    MongooseModule.forRoot(config.databaseUrl), // Replace with your actual MongoDB connection string
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
  exports: [LoggerService],
})
export class AppModule {}
