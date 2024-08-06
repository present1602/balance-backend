import { Controller, Get } from '@nestjs/common';
import { UserappApiService } from './userapp-api.service';

@Controller()
export class UserappApiController {
  constructor(private readonly userappApiService: UserappApiService) {}

  @Get()
  getHello(): string {
    return this.userappApiService.getHello();
  }
}
