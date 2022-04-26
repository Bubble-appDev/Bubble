import { Injectable } from '@nestjs/common';
import {Telegraf} from "telegraf";

@Injectable()
export class RegistrationBotService {
    private bot: Telegraf;
    constructor() {
        this.bot = new Telegraf(process.env.REGISTRATION_BOT_TOKEN)
    }

    onStart() {
        this.bot.start((ctx) => ctx.reply('hello world!'))
        return console.log('bot')
    }
}