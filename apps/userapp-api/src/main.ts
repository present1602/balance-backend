import { NestFactory } from '@nestjs/core';
import { UserappApiModule } from './userapp-api.module';

async function bootstrap() {
  const app = await NestFactory.create(UserappApiModule);
  await app.listen(3000);
}
bootstrap();
