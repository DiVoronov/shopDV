
const TelegramBot = require('node-telegram-bot-api');
const Message = require('node-telegram-bot-api');
const WebAppInfo = require('node-telegram-bot-api');
const KeyboardButton = require('node-telegram-bot-api');

const express = require('express');
const app = express();
const port = 3000;

const token = require('./env');

const bot = new TelegramBot(token, {polling: true});

let idChatFromWebApp = 304194410;

app.get('/', (req, res) => {
  // console.log(req.body),
  res.send('Hello World!')
});

app.post('/send_bot', (req, res) => {
  console.log('receiving data ...');
  // console.log('body is ', req.body);
  // console.log(req);
  // bot.onText()
  // bot.sendMessage(idChatFromWebApp, `your cart is: ${req.body}`);
  // bot.sendMessage(idChatFromWebApp, `your baseUrl is: ${req.baseUrl}`);
  // bot.sendMessage(idChatFromWebApp, `your ip is: ${req.ip}`);
  // bot.sendMessage(idChatFromWebApp, `your url is: ${req.url}`);
  // const queryID = req.body.queryID;
  console.log(req.body);
  // bot.answerWebAppQuery(queryID);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



// bot.setChatMenuButton({chat_id: idChatFromWebApp, menu_button: {
//   web_app: 'https://divoronov.github.io/shopDV/',

// }})
// chat_id: idChatFromWebApp, menu_button: {web_app: 'https://divoronov.github.io/shopDV/'}


// const buttons = bot.getChatMenuButton({chat_id: idChatFromWebApp});
// console.log('butt', buttons);

// const keyboardButton = new KeyboardButton(token);
// console.log('keyboard', keyboardButton.keyboard = ['ff', 34])

bot.setMyCommands([
  {command: '/start', description: 'Начать'},
  {command: '/info', description: 'Информация о запросах'},
  {command: '/send', description: 'Информация о запросах'},

]);

// const webAppInitData = new WebAppInitData(token);
// console.log(webAppInitData)

// for (key in webAppInitData) {
//   console.log(key)
// }


// const dataFromMessage = new Message(token);
// const i = dataFrom._events;
// console.log(Message.web_app_data);
// console.log(dataFrom.web_app_data);

// webAppInitData.on('web_app_data', msg => console.log(msg))
// webAppInitData.on('message', msg => console.log(msg))

// dataFromMessage.on('web_app_data', msg => console.log(msg))
// dataFromMessage.on('message', msg => console.log(msg))

// console.log('MESSAGE', dataFromMessage.text)

const webAppData = new WebAppInfo(token);
const webAppDataURL = webAppData.url = 'https://divoronov.github.io/shopDV/';
console.log(webAppDataURL);

bot.on('message', async message => {
  const nameUser = message.from.username;
  const textUser = message.text;
  const chatID = message.chat.id;
  idChatFromWebApp = chatID;
  console.log('chatID', chatID)

  if (textUser === '/start') {
    await bot.sendSticker(chatID, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/12.webp')
    await bot.sendMessage(chatID, `Hello, ${nameUser}.`, {
      reply_markup: {
        keyboard: [[{text: 'visit site', web_app: {url: 'https://divoronov.github.io/shopDV/'}}]]        
      },
      
    }).catch(err => err)
    // {text: 'visit site', web_app: 'https://divoronov.github.io/shopDV/'}
  } else if (textUser === '/info') {
    await bot.sendMessage(chatID, `You can choose service`)
  };
  // } else if (textUser === 'visit site') { 
  //   await bot.sendMessage(chatID, `https://divoronov.github.io/shopDV/`)
  // } else {
  //   await bot.sendMessage(chatID, `You send me: "${textUser}"`)
  // };
});



bot.on('web_app_data', async data => {
  const dataFromWebApp = JSON.parse(data.web_app_data.data);
  // console.log(dataFromWebApp);

  const responseToBotByOrder = `Dear, you have been ordered next options:`;

  const listOfOrder = () => {
    
    const arrayOfOrderTitle = dataFromWebApp.map( (order, index) => {
      return `${index + 1}. ${order.title}`;
    })

    return arrayOfOrderTitle;
  };
  await bot.sendMessage(data.chat.id, responseToBotByOrder);
  listOfOrder().map( async order => await bot.sendMessage(data.chat.id, order));

});

