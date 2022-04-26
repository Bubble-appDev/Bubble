import { Test, TestingModule } from '@nestjs/testing';
import { TagGroupService } from './tag-group.service';

describe('TagGroupService', () => {
  let service: TagGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagGroupService],
    }).compile();

    service = module.get<TagGroupService>(TagGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
