export const startMessage = 'Фуфтыфу! ЁжикБот на связи =]';

export const helpMessage = `Фуф. Вот, что я уже умею:
1) Фу
2) Фуфты
3) Фуфтыфу
4) Номер ёжика в каталогизаторе ёжиков
5) Ёжик
6) @icebrest, @dvvsbrest`;

export const getCommands = (randomHedgehogNumber: number) => ({
  reply_markup: {
    keyboard: [
      ['Фу', 'Фуфты', 'Фуфтыфу'],
      ['Ёжик', `${randomHedgehogNumber}`],
    ],
  },
});

export const randomHedgehogMessages = ['ёжик', 'ежик'];

export const getHedgehog = (number: number, { url, where, who, when }: {
  url: string,
  where: string,
  who: string,
  when: string,
}) => `Ёжик №${number}: ${url}

Фуфтыдосье
Приехал из: ${where}
Привёз: ${who}
В фуфтысемье с ${when}`;

export const hedgehogsMaxCount = (count: string) =>
  `Столько ёжиков у меня пока нет :( Есть только ${count} фуфтыёжиков (=`;

export const simplePhrases = [
  {
    message: 'фуфтыфу',
    answer: 'И тебе фуфтыфу, добрчеловек.',
  },
  {
    message: 'фуфты',
    answer: 'Фуфты-фуфты',
  },
  {
    message: 'фу',
    answer: 'Фу!',
  },
];

export const finalPhrase = (name: string) => `Фуфтыфу, ${name}! ЁжикБот на связи =] Я не шплю тут.`;