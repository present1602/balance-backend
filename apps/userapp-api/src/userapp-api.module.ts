import { Module } from '@nestjs/common';
import { UserappApiController } from './userapp-api.controller';
import { UserappApiService } from './userapp-api.service';

@Module({
  imports: [],
  controllers: [UserappApiController],
  providers: [UserappApiService],
})
export class UserappApiModule {}
