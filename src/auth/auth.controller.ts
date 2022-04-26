import {Controller, Post, Request} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ApiTags} from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @ApiTags('Auth')
    @Post('/registration')
    async registration(@Request() req) {

    }
}
