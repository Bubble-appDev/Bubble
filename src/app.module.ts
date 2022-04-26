import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { RegistrationBotModule } from './auth/registration-bot/registration-bot.module';
import { TagGroupModule } from './tag-group/tag-group.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TagRepository} from "./tag/repositories/tag.repository";
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [
      // TypeOrmModule.forRoot([
      //    TagRepository
      // ]),
      AuthModule,
      UserModule,
      TagModule,
      RegistrationBotModule,
      TagGroupModule,
      SubscriptionModule
  ],
  controllers: [
      AppController
  ],
  providers: [
      AppService
  ],
})
export class AppModule {}
