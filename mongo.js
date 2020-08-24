const mongoose = require('mongoose')

// const connectionAddress = "mongodb://localhost/solo";
// mongoose.connect(connectionAddress, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "Ошибка соединения с MongoDB"));

mongoose.pluralize(null);

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  language_code: String,
});

const uniSchema = new mongoose.Schema({
  nameOfUniversity: String,
  link: String,
  location: String,
  selfAchivment: String,
  main: [Object]
});

const UniversityModel = mongoose.model('University', uniSchema);
const UserModel = mongoose.model('User', userSchema);

async function seed() {
  await UniversityModel.create({
    nameOfUniversity: "Институт экономики, математики и информационных технологий / ЭМИТ",
    link: 'http://www.ef.ranepa.ru/',
    location: 'Москва',
    // selfAchivment: 'https://www.ranepa.ru/images/docs/pk/2020/id-bak-2020.pdf',
    main: [{
      codeOfdirection: "09.03.03",
      nameOfdirection: 'Прикладная информатика в экономике',
      subjects: ['Математика', 'Информатика и ИКТ', 'Русский язык'],
      passingScore: 258,
      cost: 300000,
      amountOfbudget: 12,
      amountOfPaid: 25,
      url: 'http://www.ef.ranepa.ru/program/pie/'
    },
    {
      codeOfdirection: "09.03.03",
      nameOfdirection: 'Прикладная информатика в информационной безопасности',
      subjects: ['Математика', 'Физика', 'Русский язык'],
      passingScore: 241,
      cost: 300000,
      amountOfbudget: 3,
      amountOfPaid: 15,
      url: 'http://www.ef.ranepa.ru/program/pii/'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Экономика и финансы',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 262,
      cost: 300000,
      amountOfbudget: 55,
      amountOfPaid: 30,
      url: 'http://www.ef.ranepa.ru/program/ec/'
    },
    // {
    //   codeOfdirection: "38.03.01",
    //   nameOfdirection: 'Прикладная математика и экономика',
    //   // subjects: ['Математика', 'Физика', 'Русский язык'],
    //   passingScore: 245,
    //   cost: 300000,
    //   amountOfbudget: 0,
    //   amountOfPaid: 15,
    //   url: 'http://www.ef.ranepa.ru/program/pmii/'
    // },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Системный анализ и экономика (Совместная программа РАНХиГС И МФТИ)',
      subjects: ['Математика', 'Информатика и ИКТ', 'Русский язык'],
      passingScore: 267,
      cost: 300000,
      amountOfbudget: 5,
      amountOfPaid: 25,
      url: 'http://www.ef.ranepa.ru/program/sovbac/'
    },
    // {
    //   codeOfdirection: "38.03.01",
    //   nameOfdirection: 'Цифровая экономика',
    //   // subjects: ['Математика', 'Физика', 'Русский язык'],
    //   passingScore: 264,
    //   cost: 300000,
    //   amountOfbudget: 10,
    //   amountOfPaid: 25,
    //   url: 'http://www.ef.ranepa.ru/program/cifroec/'
    // },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Национальная экономика и государственное регулирование',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 266,
      cost: 360000,
      amountOfbudget: 5,
      amountOfPaid: 40,
      url: 'http://www.ef.ranepa.ru/program/ne/'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Мировая экономика и внешнеэкономическая деятельность',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 'Зачислены победители олимпиад',
      cost: 380000,
      amountOfbudget: 5,
      amountOfPaid: 40,
      url: 'http://www.ef.ranepa.ru/program/mirec/'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Экономика предприятий и организаций',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 264,
      cost: 360000,
      amountOfbudget: 5,
      amountOfPaid: 25,
      url: 'http://www.ef.ranepa.ru/program/epo/'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Экономика и управление бизнесом',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 265,
      cost: 360000,
      amountOfbudget: 5,
      amountOfPaid: 40,
      url: 'http://www.ef.ranepa.ru/program/km/'
    },
    {
      codeOfdirection: "38.03.05",
      nameOfdirection: 'Бизнес-аналитика',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 268,
      cost: 285000,
      amountOfbudget: 10,
      amountOfPaid: 50,
      url: 'http://www.ef.ranepa.ru/program/bia/'
    },
    {
      codeOfdirection: "38.03.05",
      nameOfdirection: 'Информационные системы в бизнесе и логистике',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 264,
      cost: 285000,
      amountOfbudget: 5,
      amountOfPaid: 30,
      url: 'http://www.ef.ranepa.ru/program/bis/'
    },
      // {
      //   codeOfdirection: "38.03.05",
      //   nameOfdirection: 'Цифровой бизнес ',
      //   // subjects: ['Математика', 'Физика', 'Русский язык'],
      //   passingScore: 'не было бюджета',
      // такой программы нет на сайте института
      // }
    ]
  })
  await UniversityModel.create({
    nameOfUniversity: "Факультет Финансов и Банковского дела / ФФБ",
    link: 'https://ffb.ranepa.ru/',
    location: 'Москва',
    main: [{
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Финансы и кредит',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 350000,
      amountOfbudget: 15,
      // amountOfPaid: 25,
      url: 'https://ffb.ranepa.ru/bacalavriat/programma/finansy-i-kredit.html'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Учет, анализ и аудит',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 350000,
      amountOfbudget: 15,
      // amountOfPaid: 25,
      url: 'https://ffb.ranepa.ru/bacalavriat/programma/uchet-analiz-i-audit.html'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Деньги, банки, финансовые рынки',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 350000,
      amountOfbudget: 15,
      // amountOfPaid: 25,
      url: 'https://ffb.ranepa.ru/bacalavriat/programma/dengi-banki-finansovye-rynki.html'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Финансовые рынки и цифровые технологии',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 350000,
      amountOfbudget: 15,
      // amountOfPaid: 25,
      url: 'https://ffb.ranepa.ru/bacalavriat/programma/globalnye-finansy-i-risk-menedzhment.html'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Международные финансовые организации в глобальной экономике',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 350000,
      amountOfbudget: 15,
      // amountOfPaid: 25,
      url: 'https://ffb.ranepa.ru/bacalavriat/programma/globalnye-finansy-i-risk-menedzhment.html'
    }
    ]
  })
  await UniversityModel.create({
    nameOfUniversity: "Факультет «Высшая школа корпоративного управления» / ВШКУ",
    link: 'https://emba.ranepa.ru/',
    location: 'Москва',
    main: [{
      codeOfdirection: "38.03.06",
      nameOfdirection: 'Логистика в торговой деятельности',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 300000,
      amountOfbudget: 10,
      // amountOfPaid: 25,
      url: 'https://emba.ranepa.ru/vysshee-obrazovanie/bakalavriat.html'
    },
    {
      codeOfdirection: "38.03.06",
      nameOfdirection: 'Международная коммерция',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 300000,
      amountOfbudget: 10,
      // amountOfPaid: 25,
      url: 'https://emba.ranepa.ru/vysshee-obrazovanie/bakalavriat.html'
    },
    {
      codeOfdirection: "38.03.06",
      nameOfdirection: 'Управление финансами во внешнеторговой деятельности',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 300000,
      amountOfbudget: 10,
      // amountOfPaid: 25,
      url: 'https://emba.ranepa.ru/vysshee-obrazovanie/bakalavriat.html'
    },
    {
      codeOfdirection: "38.03.06",
      nameOfdirection: 'Технологии продаж в современном бизнесе',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 280000,
      amountOfbudget: 10,
      // amountOfPaid: 25,
      url: 'https://emba.ranepa.ru/vysshee-obrazovanie/bakalavriat.html'
    }
    ]
  })
  await UniversityModel.create({
    nameOfUniversity: "Высшая школа финансов и менеджмента / ВШФМ",
    link: 'http://www.shfm.ranepa.ru/',
    location: 'Москва',
    main: [{
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Финансовый менеджмент',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 315000,
      // amountOfbudget: 15,
      // amountOfPaid: 25,
      url: 'http://www.shfm.ranepa.ru/programs/bachelor'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Финансовая математика и инвестиционный анализ',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 315000,
      // amountOfbudget: 15,
      // amountOfPaid: 25,
      url: 'http://www.shfm.ranepa.ru/programs/bachelor'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Инвестиционное проектирование и оценка бизнеса',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 257,
      cost: 315000,
      // amountOfbudget: 15,
      // amountOfPaid: 25,
      url: 'http://www.shfm.ranepa.ru/programs/bachelor'
    },
    ]
  })
  await UniversityModel.create({
    nameOfUniversity: "Институт финансов и устойчивого развития / ИФУР",
    link: 'https://ifur.ranepa.ru/',
    location: 'Москва',
    main: [{
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Финансы и инвестиции',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 300000,
      amountOfbudget: 5,
      // amountOfPaid: 25,
      url: 'https://ifur.ranepa.ru/abitur/bakalavriat/ekonomika-investitsii.php'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Бухгалтерский учет и экономический анализ',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 300000,
      amountOfbudget: 5,
      // amountOfPaid: 25,
      url: 'https://ifur.ranepa.ru/abitur/bakalavriat/ekonomika-finansovoe-konsultirovanie.php'
    },
    {
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Менеджмент объектов туристской инфраструктуры',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 257,
      cost: 320000,
      amountOfbudget: 12,
      amountOfPaid: 60,
      url: 'https://ifur.ranepa.ru/abitur/bakalavriat/menedzhment-turistskoy-industrii.php'
    },
    {
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Менеджмент спортивной индустрии',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 257,
      cost: 320000,
      amountOfbudget: 12,
      amountOfPaid: 60,
      url: 'https://ifur.ranepa.ru/abitur/bakalavriat/menedzhment-sportivnoy-industrii.php'
    },
    {
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Маркетинг и бренд-менеджмент',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 257,
      cost: 300000,
      amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'https://ifur.ranepa.ru/abitur/bakalavriat/menedzhment-marketing-i-brend-menedzhment.php'
    },
    {
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Управление проектами устойчивого развития',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 257,
      cost: 300000,
      amountOfbudget: 5,
      // amountOfPaid: 25,
      url: 'https://ifur.ranepa.ru/abitur/bakalavriat/menedzhment-upravlenie-proektami-ustoychivogo-razvitiya.php'
    },
    {
      codeOfdirection: "41.03.05",
      nameOfdirection: 'Международное сотрудничество на принципах устойчивого развития',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 289,
      cost: 320000,
      amountOfbudget: 5,
      // amountOfPaid: 25,
      url: 'https://ifur.ranepa.ru/abitur/bakalavriat/mezhdunarodnye-programmy-ustoychivogo-razvitiya.php'
    },
    ]
  })
  await UniversityModel.create({
    nameOfUniversity: "Институт управления регионального развития / ИУУР",
    link: 'http://iurr.ranepa.ru/',
    location: 'Москва',
    main: [{
      codeOfdirection: "27.03.02",
      nameOfdirection: 'Управление качеством в производственно-технологических системах',
      subjects: ['Математика', 'Физика', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 180000,
      amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'http://iurr.ranepa.ru/bakalavriat/upravlenie-kachestvom/profil-upravlenie-kachestvom-v-proizvodstvenno-texnologicheskix-sistemax/'
    },
    {
      codeOfdirection: "27.03.02",
      nameOfdirection: 'Управление качеством в энергетике',
      subjects: ['Математика', 'Физика', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 180000,
      amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'http://iurr.ranepa.ru/bakalavriat/upravlenie-kachestvom/profil-upravlenie-kachestvom-v-energetike/'
    },
    {
      codeOfdirection: "27.03.02",
      nameOfdirection: 'Управление качеством и информационно-аналитические системы',
      subjects: ['Математика', 'Физика', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 180000,
      amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'http://iurr.ranepa.ru/bakalavriat/upravlenie-kachestvom/profil-upravlenie-kachestvom-i-informacionno-analiticheskie-sistemy/'
    },
    {
      codeOfdirection: "27.03.02",
      nameOfdirection: 'Управление качеством в строительстве',
      subjects: ['Математика', 'Физика', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 180000,
      amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'http://iurr.ranepa.ru/bakalavriat/upravlenie-kachestvom/profil-upravlenie-kachestvom-v-stroitelstve/'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Управление рисками и страховая деятельность',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 300000,
      // amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'http://iurr.ranepa.ru/bakalavriat/ekonomika/38-03-01-ekonomika-bakalavriat-profil-upravlenie-riskami-i-straxovaya-deyatelnost/'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Торговая политика',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 300000,
      // amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'http://iurr.ranepa.ru/bakalavriat/ekonomika/38-03-01-ekonomika-bakalavriat-profil-torgovaya-politika/'
    },
    {
      codeOfdirection: "38.03.01",
      nameOfdirection: 'Экономика в топливно-энергетическом комплексе',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 261,
      cost: 300000,
      // amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'http://iurr.ranepa.ru/bakalavriat/ekonomika/38-03-01-ekonomika-bakalavriat-profil-ekonomika-v-toplivno-energeticheskom-komplekse/'
    },
    {
      codeOfdirection: "41.03.05",
      nameOfdirection: 'Международные экономические отношения в условиях глобализации',
      subjects: ['Иностранный язык', 'История', 'Русский язык'],
      passingScore: 289,
      cost: 320000,
      // amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'http://iurr.ranepa.ru/bakalavriat/mezhdunarodnye-otnosheniya/'
    }
    ]
  })
  await UniversityModel.create({
    nameOfUniversity: "Факультет экономических и социальных наук / ФЭСН",
    link: 'https://fesn.ranepa.ru/',
    location: 'Москва',
    main: [{
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Управление проектами',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 390000,
      // amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'https://fesn.ranepa.ru/2563'
    },
    {
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Корпоративное управление',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 390000,
      // amountOfbudget: 20,
      // amountOfPaid: 80,
      url: 'https://fesn.ranepa.ru/2562'
    },
    {
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Управление малым и средним бизнесом',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 390000,
      // amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'https://fesn.ranepa.ru/2561'
    }
    ]
  })
  await UniversityModel.create({
    nameOfUniversity: "Институт бизнеса и делового администрирования / ИБДА",
    link: 'https://ibda.ranepa.ru/',
    location: 'Москва',
    main: [{
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Международный менеджмент',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 265,
      cost: 515000,
      amountOfbudget: 15,
      amountOfPaid: 75,
      url: 'https://fmbda.ru/?utm_source=ibda_ranepa_ru'
    },
    {
      codeOfdirection: "38.03.02",
      nameOfdirection: 'Управление прорывными проектами в международном бизнесе',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 607000,
      amountOfbudget: 0,
      // amountOfPaid: 25,
      url: 'https://www.rfb-ibs.ru/'
    },
    {
      codeOfdirection: "38.03.03",
      nameOfdirection: 'Управление человеческими ресурсами в международном бизнесе',
      subjects: ['Математика', 'Иностранный язык', 'Русский язык', 'Обществознание'],
      passingScore: 'зачислены победители олимпиад',
      cost: 515000,
      amountOfbudget: 10,
      amountOfPaid: 20,
      url: 'https://fmbda.ru/?utm_source=ibda_ranepa_ru'
    },
    {
      codeOfdirection: "41.03.01",
      nameOfdirection: 'Экономическое и политическое развитие стран Востока',
      subjects: ['История', 'Иностранный язык', 'Русский язык'],
      passingScore: 286,
      cost: 420000,
      amountOfbudget: 6,
      // amountOfPaid: 25,
      url: 'https://www.mezhdunarodnik.com/?utm_source=ibda_ranepa_ru'
    },
    {
      codeOfdirection: "41.03.05",
      nameOfdirection: 'Международные отношения: политика, экономика, бизнес',
      subjects: ['История', 'Иностранный язык', 'Русский язык'],
      passingScore: 300,
      cost: 472000,
      amountOfbudget: 10,
      // amountOfPaid: 25,
      url: 'https://www.mezhdunarodnik.com/?utm_source=ibda_ranepa_ru'
    },
    ]
  })
  await UniversityModel.create({
    nameOfUniversity: "Институт права и национальной безопастности / ИПНБ",
    link: 'https://ilns.ranepa.ru/',
    location: 'Москва',
    main: [{
      codeOfdirection: "38.03.04",
      nameOfdirection: 'Безопасность сферы предоставления государственных и муниципальных услуг',
      subjects: ['Обществознание', 'Информатика и ИКТ', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 320000,
      amountOfbudget: 0,
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/gosudarstvennoe-i-munitsipalnoe-upravlenie'
    },
    {
      codeOfdirection: "40.03.01",
      nameOfdirection: 'Гражданско-правовой профиль',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 265,
      cost: 360000,
      // amountOfbudget: 0, >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/yurisprudentsiya'
    },
    {
      codeOfdirection: "40.03.01",
      nameOfdirection: 'Государственно-правовой профиль',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 265,
      cost: 360000,
      // amountOfbudget: 0, >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/yurisprudentsiya'
    },
    {
      codeOfdirection: "40.03.01",
      nameOfdirection: 'Информационно-правовой профиль',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 265,
      cost: 360000,
      // amountOfbudget: 0, >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/yurisprudentsiya'
    },
    {
      codeOfdirection: "40.03.01",
      nameOfdirection: 'Государственно-общественное партнерство при защите национальных интересов силами специальных организаций (казачество)',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 360000,
      amountOfbudget: 0,
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/yurisprudentsiya'
    },
    {
      codeOfdirection: "40.03.01",
      nameOfdirection: 'Международно-правовой профиль(Право глобальной интеграции с углуб. изучением иностранного языка)',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 410000,
      amountOfbudget: 0,
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/yurisprudentsiya'
    },
    {
      codeOfdirection: "40.03.01",
      nameOfdirection: 'Международно-правовой профиль(С углуб. изучением иностранного языка и права европейских организаций)',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 410000,
      amountOfbudget: 0,
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/yurisprudentsiya'
    },
    {
      codeOfdirection: "38.05.01",
      nameOfdirection: 'Экономико-правовое обеспечение экономической безопасности',
      subjects: ['Математика', 'Обществознание', 'Русский язык'],
      passingScore: 266,
      cost: 290000,
      // amountOfbudget: 0, >1 
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/ekonomicheskaya-bezopasnost'
    },
    {
      codeOfdirection: "38.05.02",
      nameOfdirection: 'Организация таможенного контроля',
      subjects: ['Обществознание', 'Иностранный язык', 'Русский язык'],
      passingScore: 279,
      cost: 290000,
      // amountOfbudget: 0, >1 
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/tamozhennoe-delo'
    },
    {
      codeOfdirection: "38.05.02",
      nameOfdirection: 'Таможенные платежи и валютное регулирование',
      subjects: ['Обществознание', 'Иностранный язык', 'Русский язык'],
      passingScore: 279,
      cost: 290000,
      // amountOfbudget: 0, >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/tamozhennoe-delo'
    },
    {
      codeOfdirection: "38.05.02",
      nameOfdirection: 'Внешнеторговая, транспортная и таможенная логистика',
      subjects: ['Обществознание', 'Иностранный язык', 'Русский язык'],
      passingScore: 279,
      cost: 290000,
      // amountOfbudget: 0, >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/tamozhennoe-delo'
    },
    {
      codeOfdirection: "40.05.01",
      nameOfdirection: 'Уголовно-правовая специализация',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 308,
      cost: 290000,
      // amountOfbudget: 0, >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/pravovoe-obespechenie-natsionalnoy-bezopasnosti'
    },
    {
      codeOfdirection: "40.05.01",
      nameOfdirection: 'Государственно-правовая специализация',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 308,
      cost: 290000,
      // amountOfbudget: 0,  >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/pravovoe-obespechenie-natsionalnoy-bezopasnosti'
    },
    {
      codeOfdirection: "40.05.01",
      nameOfdirection: 'Гражданско-правовая специализация',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 308,
      cost: 290000,
      // amountOfbudget: 0, >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/pravovoe-obespechenie-natsionalnoy-bezopasnosti'
    },
    {
      codeOfdirection: "40.05.01",
      nameOfdirection: 'Международно-правовая специализация',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 308,
      cost: 290000,
      // amountOfbudget: 0, >1
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/pravovoe-obespechenie-natsionalnoy-bezopasnosti'
    },
    {
      codeOfdirection: "40.05.04",
      nameOfdirection: 'Судебная деятельность',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 290000,
      amountOfbudget: 0,
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/sudebnaya-i-prokurorskaya-deyatelnost'
    },
    {
      codeOfdirection: "40.05.04",
      nameOfdirection: 'Прокурорская деятельность',
      subjects: ['Обществознание', 'История', 'Русский язык'],
      passingScore: 300, //нет бюджета
      cost: 290000,
      amountOfbudget: 0,
      // amountOfPaid: 75,
      url: 'https://ilns.ranepa.ru/postupayushchim/catalog/dir/sudebnaya-i-prokurorskaya-deyatelnost'
    }
    ]
  })
  //иом ион игсу
}

module.exports = { UniversityModel, UserModel };
