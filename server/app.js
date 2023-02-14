
const TelegramBot = require('node-telegram-bot-api');

const token = require('./env');

const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([
  {command: '/start', description: 'Начать'},
  {command: '/info', description: 'Информация о запросах'},

]);

bot.on('message', async message => {
  const nameUser = message.from.username;
  const textUser = message.text;
  const chatID = message.chat.id;

  if (textUser === '/start') {
    await bot.sendSticker(chatID, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/12.webp')
    await bot.sendMessage(chatID, `Hello, ${nameUser}.`)
  } else if (textUser === '/info') {
    await bot.sendMessage(chatID, `You can choose service`)

  } else {
    await bot.sendMessage(chatID, `You send me: "${textUser}"`)
  };
});