import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationBotService } from './registration-bot.service';

describe('RegistrationBotService', () => {
  let service: RegistrationBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationBotService],
    }).compile();

    service = module.get<RegistrationBotService>(RegistrationBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
