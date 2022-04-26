import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {RegistrationBotModule} from "./auth/registration-bot/registration-bot.module";
import {RegistrationBotService} from "./auth/registration-bot/registration-bot.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bubble API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const registrationBotService = new RegistrationBotService()


  await app.listen(process.env.PORT);
  registrationBotService.onStart()
}
bootstrap();
