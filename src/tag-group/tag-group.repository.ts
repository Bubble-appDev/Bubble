import {EntityRepository, Repository} from "typeorm";
import {TagGroupEntity} from "./entities/tag-group.entity";

@EntityRepository(TagGroupEntity)
export class TagGroupRepository extends Repository<TagGroupEntity> {
    findById(id: number): Promise<TagGroupEntity> {
        return this.createQueryBuilder('tag-groups')
            .where('tags.id == :id', {id:id})
            .getOne()
    }

    findByTitle(title: string): Promise<TagGroupEntity> {
        return this.createQueryBuilder('tag-groups')
            .where('tags.title == :title', {title:title})
            .getOne()
    }
}