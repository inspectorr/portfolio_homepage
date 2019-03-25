const texts = {
  ru: {
    menu: ['Портфолио', 'Контакты'],
    blocks: [
      {
        title: 'Личные проекты',
        items: [
          {
            title: 'The Little Spaceship',
            brief: 'Браузерная мини-игра, написанная на чистом JS. Полностью адаптирована под мобильные устройства, мультитач. Астероиды генерируются процедурно. Внимание: он моргает!',
          },
          {
            title: 'Simple Draw',
            brief: 'Веб-приложение для рисования на React. Для генерации линий используются кривые Безье, встроенные в Canvas API. Приложение адаптировано под мобильные устройства.',
          },
        ],
      },
      {
        title: 'Другое',
        items: [
          {
            title: 'Конфигуратор',
            brief: 'Тестовый конфигуратор автомобиля на React Native. Для генерации моделей используется Firebase. Запускается в браузере с помощью библиотеки react-native-web.',
          },
          {
            title: 'Telegram Charts',
            brief: 'Конкурсная работа для March Coding Competition 2019 от Telegram. Написана на чистом JS, для рисования графиков применен SVG. В силу некоторых обстоятельств так и не была закончена.',
          },
        ],
      }
    ],

    button: 'открыть',
    copyrightName: 'Верхотуров Роман',
  },

  en: {
    menu: ['Portfolio', 'Contacts'],
    blocks: [
      {
        title: 'Personal projects',
        items: [
          {
            title: 'The Little Spaceship',
            brief: 'A browser mini-game written in pure JS. Fully adapted for mobile devices, multitouch. Asteroids are generating procedurally. Warning: he blinks!',
          },
          {
            title: 'Simple Draw',
            brief: 'A web application for drawing on React. Bezier curves from Canvas API are used to generate lines. The application is adapted for mobile devices.',
          },
        ],
      },
      {
        title: 'Other',
        items: [
          {
            title: 'Car configurator',
            brief: 'Test car configurator on React Native. Firebase is used to generate models. Runs in a browser using the react-native-web library.',
          },
          {
            title: 'Telegram Charts',
            brief: 'Submition for the March Coding Competition 2019 from Telegram. Written in pure JS, SVG is used for drawing. Wasn\'t finished due to certain circumstances.',
          },
        ],
      }
    ],

    button: 'open',
    copyrightName: 'Roman Verkhoturov',
  }
}



export default texts;
