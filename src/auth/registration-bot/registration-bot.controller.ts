import { Controller } from '@nestjs/common';
import {RegistrationBotService} from "./registration-bot.service";

@Controller('registration-bot')
export class RegistrationBotController {
    constructor(
        private readonly registrationBotService: RegistrationBotService
    ) {
    }
}
