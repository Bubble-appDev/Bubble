import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TagRepository} from "./repositories/tag.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([
        // TagRepository
    ])
  ],
  controllers: [
      TagController
  ],
  providers: [
      TagService
  ]
})
export class TagModule {}
