import { Module } from '@nestjs/common';
import { RegistrationBotService } from './registration-bot.service';
import { RegistrationBotController } from './registration-bot.controller';

@Module({
  providers: [RegistrationBotService],
  controllers: [RegistrationBotController]
})
export class RegistrationBotModule {}
