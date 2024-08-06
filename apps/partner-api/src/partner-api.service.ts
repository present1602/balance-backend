import { Injectable } from '@nestjs/common';

@Injectable()
export class PartnerApiService {
  getHello(): string {
    return 'Hello World! PARTNER';
  }
}
