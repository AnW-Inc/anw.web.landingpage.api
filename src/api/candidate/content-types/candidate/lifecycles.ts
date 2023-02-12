import TelegramBot from "node-telegram-bot-api";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const token = "6029910668:AAEq5GAPBKkJg8gPd1G69gjBvdv-Xu4PCq8"; // anw_inc_bot
const bot = new TelegramBot(token, { polling: true });
const groupChatID = "-770069955";
//XỬ LÝ CMD
bot.onText(/\//, async function processCMD(msg) {
  let content = msg.text || null;
  content = content.replace("/", "");

  content = content.split(" ");
  let command = content.shift();
  let context = content.join(" ");
  const chatId = msg.chat.id || msg.from.id || null;
  if (command === "start") {
    bot.sendMessage(chatId, `Hello ace [${chatId}]`);
  }

  if (command === "interview") {
    if (msg?.reply_to_message?.from?.is_bot) {
      const email = msg?.reply_to_message?.text
        ?.match(/(📧 Email: )+([\w-\.]+@[\w-]+\.+[\w-]{2,4})/gim)?.[0]
        ?.replace("📧 Email: ", "");

      if (email) {
        if (dayjs(context, "HH:mm:ss DD:MM:YYYY").isValid() === false) {
          bot.sendMessage(
            groupChatID,
            "Âu nâu sai format <b>HH:mm:ss DD:MM:YYYY rồiii</b>",
            { parse_mode: "HTML" }
          );
        } else {
          const date = dayjs(context, "HH:mm:ss DD-MM-YYYY");
          bot.sendMessage(
            groupChatID,
            `
            Successfully sent an email to schedule an interview <b>at ${date.format(
              "HH:mm:ss on DD-MM-YYYY"
            )}</b> to <b>${email}</b>.\r\n
We will send a notification message when the candidate agrees to the appointment or 15 minutes before the interview
            `,
            { parse_mode: "HTML" }
          );
        }
      }
    }
    // console.log("msggg", msg, context);
  }
});

export default {
  async afterCreate(event) {
    const { result, params } = event;
    // const {data ={
    //   cv,
    //   career,
    //   name,
    // }} =params
    const candidate = await strapi.db
      .query("api::candidate.candidate")
      .findOne({
        where: { id: result.id },
        populate: ["career", "cv"],
      });

    // const { fetch } = strapi.plugins.upload.services["upload"];
    // const dbFile = await fetch({ id: "5fc94314f0bf8afd27d5bad9" });
    bot.sendMessage(
      groupChatID,
      `
    <b>[AnW Career]</b>
    \r\nWe have a new candidate for the position: \r\n<b>${candidate.career.title} - ${candidate.career.location} - ${candidate.career.type}</b>

    \r\n -  Candidate Id: ${candidate.id}
    \r\n\r- 👤 Name: ${candidate.name}
    \r\n- 📞 Phone: ${candidate.phone}
    \r\n- 📧 Email: <a href="mailto:${candidate.email}">${candidate.email}</a>
    \r\n- 📁 CV file: https://5686-171-247-189-98.ngrok.io${candidate.cv.url}
    \r\n- 📝 Message: ${candidate.message}
    `,
      { parse_mode: "HTML" }
    );

    // do something to the result;
  },
};
