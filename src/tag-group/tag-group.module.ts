import { Module } from '@nestjs/common';
import { TagGroupService } from './tag-group.service';

@Module({
  providers: [TagGroupService]
})
export class TagGroupModule {}
