import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationBotController } from './registration-bot.controller';

describe('RegistrationBotController', () => {
  let controller: RegistrationBotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrationBotController],
    }).compile();

    controller = module.get<RegistrationBotController>(RegistrationBotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
