"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    "strapi::errors",
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    // onlyoffice-strapi plugin
                    "script-src": ["'self'", "https:", "http:"],
                    "frame-src": ["'self'", "https:", "http:"],
                    // s3 upload plugin
                    "connect-src": ["'self'", "https:"],
                    "img-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        // 'yourBucketName.s3.yourRegion.amazonaws.com',
                        process.env.CDN_URL ||
                            `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
                    ],
                    "media-src": [
                        "'self'",
                        "data:",
                        "blob:",
                        process.env.CDN_URL ||
                            `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
                    ],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    "strapi::poweredBy",
    {
        name: "strapi::cors",
        config: {
            enabled: true,
            headers: "*",
            origin: [
                "http://localhost:3000",
                "http://localhost:1337",
                "https://api.9385.games",
                "https://9385.games",
                "https://dev.9385.games",
            ],
        },
    },
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
