import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {AllExceptionsFilter} from './common/exception/exception.filter';
import * as dotenv from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
