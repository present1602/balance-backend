import { Test, TestingModule } from '@nestjs/testing';
import { PartnerApiController } from './partner-api.controller';
import { PartnerApiService } from './partner-api.service';

describe('PartnerApiController', () => {
  let partnerApiController: PartnerApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PartnerApiController],
      providers: [PartnerApiService],
    }).compile();

    partnerApiController = app.get<PartnerApiController>(PartnerApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(partnerApiController.getHello()).toBe('Hello World!');
    });
  });
});
