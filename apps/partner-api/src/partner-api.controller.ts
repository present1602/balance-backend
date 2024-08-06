import { Controller, Get } from '@nestjs/common';
import { PartnerApiService } from './partner-api.service';

@Controller()
export class PartnerApiController {
  constructor(private readonly partnerApiService: PartnerApiService) {}

  @Get()
  getHello(): string {
    return this.partnerApiService.getHello();
  }
}
