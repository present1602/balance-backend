import { NestFactory } from '@nestjs/core';
import { PartnerApiModule } from './partner-api.module';

async function bootstrap() {
  const app = await NestFactory.create(PartnerApiModule);
  await app.listen(3001);
}
bootstrap();
