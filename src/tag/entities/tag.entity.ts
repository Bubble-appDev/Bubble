import {Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {TagGroupEntity} from "../../tag-group/entities/tag-group.entity";

@Entity('tags')
export class TagEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "character varying"
    })
    title: string

    @OneToOne(() => TagGroupEntity)
    @JoinTable()
    tagGroup: TagGroupEntity
}