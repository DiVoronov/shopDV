
const TelegramBot = require('node-telegram-bot-api');
const Message = require('node-telegram-bot-api');
const WebAppInfo = require('node-telegram-bot-api');
const KeyboardButton = require('node-telegram-bot-api');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

const token = require('./env');

const bot = new TelegramBot(token, {polling: true});

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  console.log('BODY GET:', req.body),
  res.send('Hello World!')
});

app.post('/send_bot', async (req, res) => {
  console.log('receiving data ...');
  // console.log('body is ', req.body);
  
  console.log('BODY POST:', req.body);
  const { queryId, cart, user } = req.body;
  try {
    const finalList = cart.map( (item, index) => `${index + 1}: ${item.title}`);
    const finalListWithoutIndex = cart.map( (item, index) => `${item.title}`);

    await bot.answerWebAppQuery(queryId, {
      type: 'article', 
      id: queryId, 
      title: 'success', 
      input_message_content: {
        message_text: `your cart FROM answerWebAppQuery is: ${finalList.join('; ')}`
      }
    });
    await bot.sendMessage(user.id, `Your cart is:`);
    finalListWithoutIndex.map( (item, index) => bot.sendMessage(user.id, `${index + 1}: ${item}`));

    return res.status(200).json({});
  } catch (error) {
    
    // await bot.sendMessage(user.id, `your cart ERROR !!!!!  is: ${JSON.stringify({data: req.body.cart})}`);

    return res.status(500).json({});

  }
  // bot.answerWebAppQuery(queryID);
  // res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


bot.setMyCommands([
  {command: '/start', description: 'Начать'},
  {command: '/info', description: 'Информация о запросах'},
  {command: '/send', description: 'Информация о запросах'},

]);

const webAppData = new WebAppInfo(token);
const webAppDataURL = webAppData.url = 'https://divoronov.github.io/shopDV/';
console.log(webAppDataURL);

bot.on('message', async message => {
  const nameUser = message.from.username;
  const textUser = message.text;
  const chatID = message.chat.id;
  const webAppData = message.web_app_data;
  // idChatFromWebApp = chatID;
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
  } else if (textUser?.match(/your cart FROM answerWebAppQuery/gm)) {
    console.log('webAppData', webAppData);
    await bot.sendMessage(chatID, `Your order was saved by ShopDV_Bot`)

  }
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

