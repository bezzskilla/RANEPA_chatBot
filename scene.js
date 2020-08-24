const { Telegraf } = require('telegraf')
const { Extra, Markup, Stage, session } = Telegraf
const Scene = require('telegraf/scenes/base')
const { UniversityModel } = require('./seed.js')

class SceneGenerator {
  firstScene() {
    const firstEnter = new Scene('firstEnter')
    firstEnter.enter(async (ctx) => {
      await ctx.replyWithHTML('Расскажи нам, какие предметы ты сдавал и на какие баллы!\n\n Введи свой балл за <b>русский язык</b>')
    })
    firstEnter.on('text', async (ctx) => {
      const currentReply = Number(ctx.message.text)
      if (currentReply && currentReply > 0 && currentReply <= 100) { //минимальный балл за русский язык
        ctx.session.currentScore = currentReply
        ctx.session.subjects.push('Русский язык')
        ctx.scene.enter('SecondEnter')
      }
      else {
        await ctx.replyWithHTML('Напиши свой <b>реальный</b> балл')
        ctx.scene.reenter()
      }
    })
    firstEnter.on('message', (ctx) => ctx.replyWithHTML('Напиши пожалуйста свой балл <b>цифрами</b>'))
    return firstEnter
  }
  secondScene() {
    const SecondEnter = new Scene('SecondEnter')
    SecondEnter.enter(async (ctx) => {
      await ctx.reply('Cпасибо за ответ, теперь выбери предмет по выбору:', Markup
        .keyboard(ctx.session.allSubjects)
        .oneTime()
        .resize()
        .extra()
      )
    })
    SecondEnter.on('text', async (ctx) => {
      ctx.session.allSubjects = ctx.session.allSubjects.flat()
      if ((ctx.session.allSubjects.includes(ctx.message.text))){
        ctx.session.subjects.push(ctx.message.text)
        ctx.scene.enter('ThirdEnter')
      } else {
        ctx.replyWithHTML('Выбери один из <b>предложенных</b> предеметов')
        ctx.scene.reenter()
      }
    })
    SecondEnter.on('message', (ctx) => ctx.replyWithHTML('Выбери один из <b>предложенных</b> предеметов'))
    return SecondEnter
  }
  thirdScene() {
    const ThirdEnter = new Scene('ThirdEnter')
    ThirdEnter.enter(async (ctx) => {
      await ctx.reply(`Теперь введи количество баллов, которое ты получил(а) по предмету '${ctx.session.subjects[1]}'`)
    })
    ThirdEnter.on('text', async (ctx) => {
      const currentReply = Number(ctx.message.text)
      if (currentReply && currentReply > 0 && currentReply <= 100) { //минимальный балл 
        ctx.session.currentScore += currentReply
        ctx.scene.enter('ForthEnter')
      }
      else {
        await ctx.replyWithHTML('Напиши свой <b>реальный</b> балл')
        ctx.scene.reenter()
      }
    })
    ThirdEnter.on('message', (ctx) => ctx.replyWithHTML('Напиши пожалуйста свой балл <b>цифрами</b>'))
    return ThirdEnter
  }
  forthScene() {
    const ForthEnter = new Scene('ForthEnter')
    ForthEnter.enter(async (ctx) => {
      ctx.session.allSubjects.splice(ctx.session.allSubjects.indexOf(ctx.session.subjects[1]), 1)
      for (let i = 0; i < 3; i++) {
        ctx.session.quiteAll[i] = ctx.session.allSubjects.slice(i * 3, i * 3 + 3);
      }
      await ctx.reply('Cпасибо за ответ. Какой у тебя еще был предмет по выбору?', Markup
        .keyboard(ctx.session.quiteAll)
        .oneTime()
        .resize()
        .extra()
      )
    })
    ForthEnter.on('text', async (ctx) => {
      if ((ctx.session.allSubjects.includes(ctx.message.text))) { 
        ctx.session.subjects.push(ctx.message.text)
        ctx.scene.enter('FifthEnter')
      } else {
        ctx.replyWithHTML('Выбери один из <b>предложенных</b> предеметов')
        ctx.scene.reenter()
      }
    })
    ForthEnter.on('message', (ctx) => ctx.replyWithHTML('Выбери один из <b>предложенных</b> предеметов'))
    return ForthEnter
  }
  fifthScene() {
    const FifthEnter = new Scene('FifthEnter')
    FifthEnter.enter(async (ctx) => {
      await ctx.reply(`Теперь введи количество баллов, которое ты получил(а) по предмету '${ctx.session.subjects[2]}'`)
      ctx.session.subjects.sort()
    })
    FifthEnter.on('text', async (ctx) => {
      const currentReply = Number(ctx.message.text)
      if (currentReply && currentReply > 0 && currentReply <= 100) { //минимальный балл 
        ctx.session.currentScore += currentReply
        ctx.scene.enter('SixthEnter')
      }
      else {
        await ctx.replyWithHTML('Напиши свой <b>реальный</b> балл')
        ctx.scene.reenter()
      }
    })
    FifthEnter.on('message', (ctx) => ctx.replyWithHTML('Напиши пожалуйста свой балл <b>цифрами</b>'))
    return FifthEnter
  }
  sixthScene() {
    const SixthEnter = new Scene('SixthEnter')
    SixthEnter.enter(async (ctx) => {
      let allUnniversities = await UniversityModel.find()
      for (let i = 0; i < allUnniversities.length; i++) {
        allUnniversities[i].main.forEach(el => {
          if (el.subjects.sort().includes(ctx.session.subjects[0]) &&
            el.subjects.sort().includes(ctx.session.subjects[1]) &&
            el.subjects.sort().includes(ctx.session.subjects[2])) {
            ctx.session.answer.push(el)
          }
        });
      }
      ctx.session.answer = ctx.session.answer.map(el => {
        if (el && typeof el.passingScore === 'number') {
          if (el.passingScore - 10 < ctx.session.currentScore)
            return el
        }
      })
      // console.log(ctx.session.answer)
      if (ctx.session.answer.length == 0) {
        await ctx.reply('Для вас программ не найдено\n\n1.возможно программ с таким набором предметов не существует\n2.возможно недостаточно баллов\n\n попробуйте поискать через /searchCommerce')
      }
      else {
        ctx.session.answer.sort(function (a, b) { //сортировка по цене; переделать на сортировку по проходному баллу
          if (a.cost > b.cost) {
            return 1;
          }
          if (a.cost < b.cost) {
            return -1;
          }
          return 0;
        })
        ctx.session.answer.forEach((el, i) => {
          if (el != undefined)
          if (i <= 10)
            ctx.session.realAnswer1 += `<b>Код направления: ${el.codeOfdirection}</b>\n<a href='${el.url}'>${el.nameOfdirection}</a>\nПроходной балл: ${el.passingScore}\nСтоимость: ${el.cost}₽\n\n`
          else {
            ctx.session.realAnswer2 += `<b>Код направления: ${el.codeOfdirection}</b>\n<a href='${el.url}'>${el.nameOfdirection}</a>\nПроходной балл: ${el.passingScore}\nСтоимость: ${el.cost}₽\n\n`
          }
        })
        if (ctx.session.realAnswer2.length > 0) {
          await ctx.replyWithHTML(ctx.session.realAnswer1)
          await ctx.replyWithHTML(ctx.session.realAnswer2)
        }
        else {
          await ctx.replyWithHTML(ctx.session.realAnswer1)
        }
      }
    })
    return SixthEnter
  }
  comFirstScene() {
    const comFirstEnter = new Scene('comFirstEnter')

    comFirstEnter.enter(async (ctx) => {
      await ctx.reply('Укажи, какой предмет ты сдавал, кроме русского', Markup
        .keyboard(ctx.session.allSubjectsCom)
        .oneTime()
        .resize()
        .extra()
      )
    })
    comFirstEnter.on('text', async (ctx) => {
      ctx.session.allSubjectsCom = ctx.session.allSubjectsCom.flat()
      if ((ctx.session.allSubjectsCom.includes(ctx.message.text))) {
        ctx.session.subjectsCom.push('Русский язык')
        ctx.session.subjectsCom.push(ctx.message.text)
        ctx.scene.enter('comSecondEnter')
      } else {
        await ctx.reply('Выбери один из предложенных предеметов')
        ctx.scene.reenter()
      }
    })
    comFirstEnter.on('message', (ctx) => ctx.reply('Выбери один из предложенных предеметов'))
    return comFirstEnter
  }
  comSecondScene() {
    const comSecondEnter = new Scene('comSecondEnter')
    comSecondEnter.enter(async (ctx) => {
      ctx.session.allSubjectsCom.splice(ctx.session.allSubjectsCom.indexOf(ctx.session.subjectsCom[1]), 1)
      for (let i = 0; i < 3; i++) {
        ctx.session.quiteAllCom[i] = ctx.session.allSubjectsCom.slice(i * 3, i * 3 + 3);
      }
      await ctx.reply('Укажи последний, третий предмет', Markup
        .keyboard(ctx.session.quiteAllCom)
        .oneTime()
        .resize()
        .extra()
      )
    })
    comSecondEnter.on('text', async (ctx) => {
      ctx.session.quiteAllCom = ctx.session.quiteAllCom.flat()
      if (ctx.session.quiteAllCom.includes(ctx.message.text)) {
        ctx.session.subjectsCom.push(ctx.message.text)
        ctx.session.subjectsCom.sort()
        ctx.scene.enter('comThirdEnter')
      } else {
        ctx.reply('Выбери один из предложенных предеметов')
        ctx.scene.reenter()
      }
    })
    comSecondEnter.on('message', async (ctx) => await ctx.reply('Выбери один из предложенных предеметов'))
    return comSecondEnter
  }
  comThirdScene() {
    const comThirdEnter = new Scene('comThirdEnter')
    comThirdEnter.enter(async (ctx) => {
      let allUnniversities = await UniversityModel.find()
      for (let i = 0; i < allUnniversities.length; i++) {
        allUnniversities[i].main.forEach(el => {
          if (el.subjects.sort().includes(ctx.session.subjectsCom[0]) &&
            el.subjects.sort().includes(ctx.session.subjectsCom[1]) &&
            el.subjects.sort().includes(ctx.session.subjectsCom[2])) {
            ctx.session.answerCom.push(el)
          }
        });
      }
      ctx.session.answerCom.sort(function (a, b) { //сортировка по цене
        if (a.cost > b.cost) {
          return 1;
        }
        if (a.cost < b.cost) {
          return -1;
        }
        return 0;
      })
      if (ctx.session.answerCom.length == 0) {
        await ctx.reply('Программы с таким набором предметов не реализуются в РАНХиГС\n\nПопробуйте еще раз с другим набором программ\n\n/searchCommerce')
      }
      else {
        ctx.session.answerCom.forEach((el, i) => {
          if (i <= 10)
            ctx.session.realAnswerCom1 += `<b>Код направления: ${el.codeOfdirection}</b>\n<a href='${el.url}'>${el.nameOfdirection}</a>\nПроходной балл: ${el.passingScore}\nСтоимость: ${el.cost}₽\n\n`
          else {
            ctx.session.realAnswerCom2 += `<b>Код направления: ${el.codeOfdirection}</b>\n<a href='${el.url}'>${el.nameOfdirection}</a>\nПроходной балл: ${el.passingScore}\nСтоимость: ${el.cost}₽\n\n`
          }
        })
        if (ctx.session.realAnswerCom2.length > 0) {
          await ctx.replyWithHTML(ctx.session.realAnswerCom1)
          await ctx.replyWithHTML(ctx.session.realAnswerCom2)
        }
        else {
          await ctx.replyWithHTML(ctx.session.realAnswerCom1)
        }
      }
    })
    return comThirdEnter
  }

  magScene() {
    const MagEnter = new Scene('MagEnter')
    MagEnter.enter(async (ctx) => {
      await ctx.reply('Как только будет актуальная информация по магистратуре, эта вкладка будет доделана')
    })
    return MagEnter
  }
}


module.exports = SceneGenerator;
