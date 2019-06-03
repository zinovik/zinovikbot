import 'babel-polyfill';

import { sendMessage } from '../telegram/index';

// TODO: Add request for monitoring

exports.handler = async (event: any, context: any, callback: any) => {
  try {
    const bodyParsed = JSON.parse(event.body);

    await sendMessage(bodyParsed.message.chat.id, event.body);
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    };
  }

  return {
    statusCode: 200,
    body: event.body,
  };
};

// export const addCallback = (bot: { sendMessage: (channelId: string, text: string) => Promise<void> }) => {
//   bot.on('callback_query', (callbackQuery) => {
//     if (!callbackQuery.message) {
//       return;
//     }

//     let text = callbackQuery.message.text || '';

//     switch (callbackQuery.data) {
//       case 'monday':
//         text += '\nПН';
//         break;
//       case 'tuesday':
//         text += '\nВТ';
//         break;
//       case 'wednesday':
//         text += '\nСР';
//         break;
//       case 'thursday':
//         text += '\nЧТ';
//         break;
//       case 'friday':
//         text += '\nПТ';
//         break;
//       case 'saturday':
//         text += '\nСБ';
//         break;
//       case 'sunday':
//         text += '\nВС';
//         break;
//     }

//     bot.editMessageText(text, {
//       ...DAYS_OF_WEEK_BUTTONS,
//       chat_id: callbackQuery.message.chat.id,
//       message_id: callbackQuery.message.message_id,
//     });
//   });
// };
