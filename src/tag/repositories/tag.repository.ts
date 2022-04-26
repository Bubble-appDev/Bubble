import {EntityRepository, Repository} from "typeorm";
import {TagEntity} from "../entities/tag.entity";

@EntityRepository(TagEntity)
export class TagRepository extends Repository<TagEntity> {
    findById(id: number): Promise<TagEntity> {
        return this.createQueryBuilder('tags')
            .where('tags.id == :id', {id:id})
            .getOne()
    }

    findByTitle(title: string): Promise<TagEntity> {
        return this.createQueryBuilder('tags')
            .where('tags.title == :title', {title:title})
            .getOne()
    }
}