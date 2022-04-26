import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('tag-groups')
export class TagGroupEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column("character varying")
    title: string
}