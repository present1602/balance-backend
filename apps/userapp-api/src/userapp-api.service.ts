import { Injectable } from '@nestjs/common';

@Injectable()
export class UserappApiService {
  getHello(): string {
    return 'Hello World! USER';
  }
}
