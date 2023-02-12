"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cronTasks = require("@webbio/strapi-plugin-scheduler/cron-task");
exports.default = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    cron: {
        enabled: true,
        tasks: cronTasks,
    },
    app: {
        keys: env.array("APP_KEYS"),
    },
});
