const { Telegraf } = require('telegraf')
const dotenv = require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const mongoose = require('mongoose')
const { UniversityModel, UserModel } = require('./mongo')
const { Extra, Markup, Stage, session } = Telegraf

const SceneGenerator = require('./scene')
const curScene = new SceneGenerator()
const firstScene = curScene.firstScene()  //введи баллы за русский
const secondScene = curScene.secondScene() //1 доп предмет
const thirdScene = curScene.thirdScene()  //баллы за 1 доп предмет
const forthScene = curScene.forthScene()  //2 доп предмет
const fifthScene = curScene.fifthScene()  //баллы за 2 доп предмет
const sixthScene = curScene.sixthScene()  //вывод информации о бюджете
const comFirstScene = curScene.comFirstScene() //коммерция выбор 2 доп предмета
const comSecondScene = curScene.comSecondScene() //коммерция выбор 3 доп предмета
const comThirdScene = curScene.comThirdScene() //вывод информации о коммерции
const magScene = curScene.magScene() //магистратура

const stage = new Stage([firstScene, secondScene, thirdScene, forthScene, fifthScene, sixthScene, comFirstScene, comSecondScene, comThirdScene, magScene])

//__________________________________________________________________BD
const connectionAddress = "mongodb://localhost/solo";
mongoose.connect(connectionAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Ошибка соединения с MongoDB"));
//__________________________________________________________________BD

//__________________________________________________________________middleware
bot.use(session())
bot.use(Telegraf.log(async (info) => {
  let ourjson = JSON.parse(info);
  let a = await UserModel.find({ username: ourjson.message.from.username })
  if (a.length == 0) {
    await UserModel.create({
      first_name: ourjson.message.from.first_name,
      last_name: ourjson.message.from.last_name,
      username: ourjson.message.from.username,
      language_code: ourjson.message.from.language_code
    })
  }
}))
bot.use(stage.middleware())
//__________________________________________________________________middleware

bot.command('searchBudjet', async (ctx) => {
  ctx.session.currentScore = 0;
  ctx.session.subjects = [];
  ctx.session.quiteAll = [];
  ctx.session.answer = [];
  ctx.session.realAnswer1 = '';
  ctx.session.realAnswer2 = '';
  ctx.session.allSubjects = [
    ['Математика', 'Физика', 'Иностранный язык', 'Химия'],
    ['История', 'Обществознание', 'Биология'],
    ['Информатика и ИКТ', 'География', 'Литература']
  ];
  ctx.scene.enter('firstEnter')
})
bot.command('searchCommerce', async (ctx) => {
  ctx.session.subjectsCom = [];
  ctx.session.quiteAllCom = [];
  ctx.session.answerCom = [];
  ctx.session.realAnswerCom1 = '';
  ctx.session.realAnswerCom2 = '';
  ctx.session.allSubjectsCom = [
    ['Математика', 'Физика', 'Иностранный язык', 'Химия'],
    ['История', 'Обществознание', 'Биология'],
    ['Информатика и ИКТ', 'География', 'Литература']
  ];

  ctx.scene.enter('comFirstEnter')
})
bot.command('searchMagistratura', async (ctx) => {
  ctx.scene.enter('MagEnter')
  //магистратура
})
bot.start((ctx) => ctx.replyWithHTML('<b>Доброго времени суток, Абитуриент!</b>\nЭтот бот поможет тебе выбрать путь в <b>РАНХиГС</b>.\nНажми /help, чтобы узнать возможности'))
bot.help((ctx) => ctx.reply('Нажми:\n/searchBudjet\n/searchCommerce\n/searchMagistratura'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
