"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const dayjs_1 = __importDefault(require("dayjs"));
const customParseFormat_1 = __importDefault(require("dayjs/plugin/customParseFormat"));
dayjs_1.default.extend(customParseFormat_1.default);
const token = "5604398490:AAHXgi6kd49_RtgyJe_DUOa83tCRSWpKLWc"; // nova studio bot
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
const groupChatID = "-770069955";
//XỬ LÝ CMD
bot.onText(/\//, async function processCMD(msg) {
    var _a, _b, _c, _d, _e, _f;
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
        if ((_b = (_a = msg === null || msg === void 0 ? void 0 : msg.reply_to_message) === null || _a === void 0 ? void 0 : _a.from) === null || _b === void 0 ? void 0 : _b.is_bot) {
            const email = (_f = (_e = (_d = (_c = msg === null || msg === void 0 ? void 0 : msg.reply_to_message) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.match(/(📧 Email: )+([\w-\.]+@[\w-]+\.+[\w-]{2,4})/gim)) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.replace("📧 Email: ", "");
            if (email) {
                if ((0, dayjs_1.default)(context, "HH:mm:ss DD:MM:YYYY").isValid() === false) {
                    bot.sendMessage(groupChatID, "Âu nâu sai format <b>HH:mm:ss DD:MM:YYYY rồiii</b>", { parse_mode: "HTML" });
                }
                else {
                    const date = (0, dayjs_1.default)(context, "HH:mm:ss DD-MM-YYYY");
                    bot.sendMessage(groupChatID, `
            Successfully sent an email to schedule an interview <b>at ${date.format('HH:mm:ss on DD-MM-YYYY')}</b> to <b>${email}</b>.\r\n
We will send a notification message when the candidate agrees to the appointment or 15 minutes before the interview
            `, { parse_mode: "HTML" });
                }
            }
        }
        // console.log("msggg", msg, context);
    }
});
exports.default = {
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
        bot.sendMessage(groupChatID, `
    <b>[Nova Studio Career]</b>
    \r\nWe have a new candidate for the position: \r\n<b>${candidate.career.title} - ${candidate.career.location} - ${candidate.career.type}</b>

    \r\n -  Candidate Id: ${candidate.id}
    \r\n\r- 👤 Name: ${candidate.name}
    \r\n- 📞 Phone: ${candidate.phone}
    \r\n- 📧 Email: <a href="mailto:${candidate.email}">${candidate.email}</a>
    \r\n- 📁 CV file: https://5686-171-247-189-98.ngrok.io${candidate.cv.url}
    \r\n- 📝 Message: ${candidate.message}
    `, { parse_mode: "HTML" });
        // do something to the result;
    },
};
