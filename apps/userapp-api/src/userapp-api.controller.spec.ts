import { Test, TestingModule } from '@nestjs/testing';
import { UserappApiController } from './userapp-api.controller';
import { UserappApiService } from './userapp-api.service';

describe('UserappApiController', () => {
  let userappApiController: UserappApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserappApiController],
      providers: [UserappApiService],
    }).compile();

    userappApiController = app.get<UserappApiController>(UserappApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userappApiController.getHello()).toBe('Hello World!');
    });
  });
});
