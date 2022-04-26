import { Injectable } from '@nestjs/common';
import {UserRepository} from "./repositories/user.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository
    ) {
    }

    async findOneByEmail(email: string): Promise<UserEntity | undefined> {
        return this.userRepository.findOne({
            where: {
                email: email
            }
        })
    }

    async findOneByPhone(phone_number: string): Promise<UserEntity | undefined> {
        return this.userRepository.findOne({
            where: {
                phone_number: phone_number
            }
        })
    }

    async findOneByUsername(username: string): Promise<UserEntity | undefined>{
        return this.userRepository.findOne({
            where: {
                username: username
            }
        })
    }
}
