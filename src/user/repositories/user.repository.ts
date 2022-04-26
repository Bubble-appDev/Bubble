import {EntityRepository, Repository} from "typeorm";
import {UserEntity} from "../entities/user.entity";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    async findOneByEmail(email: string): Promise<UserEntity | undefined> {
        return this.findOne({
            where: {
                email: email
            }
        })
    }

    async findOneByPhone(phone_number: string): Promise<UserEntity | undefined> {
        return this.findOne({
            where: {
                phone_number: phone_number
            }
        })
    }

    async findOneByUsername(username: string): Promise<UserEntity | undefined>{
        return this.findOne({
            where: {
                username: username
            }
        })
    }
}