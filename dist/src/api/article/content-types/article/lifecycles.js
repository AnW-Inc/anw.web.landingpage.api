"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reading_time_1 = __importDefault(require("reading-time"));
exports.default = {
    async beforeCreate(event) {
        var _a;
        const { params: { data }, } = event;
        const { content } = data;
        if (content && (content === null || content === void 0 ? void 0 : content.length) > 0) {
            data.readingTime = ((_a = (0, reading_time_1.default)(content)) === null || _a === void 0 ? void 0 : _a.text) || null;
        }
    },
    async beforeUpdate(event) {
        var _a;
        const { params: { data }, } = event;
        const { content } = data;
        if (content && (content === null || content === void 0 ? void 0 : content.length) > 0) {
            data.readingTime = ((_a = (0, reading_time_1.default)(content)) === null || _a === void 0 ? void 0 : _a.text) || null;
        }
    },
};
