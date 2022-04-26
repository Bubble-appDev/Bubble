import 'dotenv/config';

import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.REGISTRATION_BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('test');
});

bot.launch().then(() => console.log('bot started'));
