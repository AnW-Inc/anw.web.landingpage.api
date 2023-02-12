import AuthLogo from "./extensions/auth-logo.png";
import MenuLogo from "./extensions/logo.png";
import favicon from "./extensions/logo.ico";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },
    translations: {
      en: {
        "HomePage.helmet.title": "Homepage | AnW CMS",
        "Settings.profile.form.section.helmet.title": "User profile | AnW CMS",
        "app.components.ListPluginsPage.helmet.title": "List plugins | AnW CMS",
        "app.components.LeftMenu.navbrand.title": "AnW CMS",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.button.login.strapi": "Log in via AnW CMS",
        "Auth.form.register.subtitle":
          "Credentials are only used to authenticate in AnW CMS. All saved data will be stored in your database.",
        "Auth.form.welcome.subtitle": "Log in to your AnW CMS account",
        "Auth.form.welcome.title": "Welcome to AnW!",
        "HomePage.welcome.congrats.content":
          "You are logged in as the first administrator. To discover the powerful features provided by AnW CMS,",
        "Settings.permissions.users.listview.header.subtitle":
          "All the users who have access to the AnW CMS admin panel",
        "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi":
          "Made by AnW CMS",
        "app.components.BlockLink.blog.content":
          "Read the latest news about AnW CMS and the ecosystem.",
        "app.components.BlockLink.tutorial.content":
          "Follow step-by-step instructions to use and customize AnW CMS.",
        "app.components.HomePage.welcomeBlock.content":
          "Congrats! You are logged as the first administrator. To discover the powerful features provided by AnW CMS, we recommend you to create your first Content type!",
        "app.components.HomePage.welcomeBlock.content.again":
          "We hope you are making progress on your project! Feel free to read the latest news about AnW CMS. We are giving our best to improve the product based on your feedback.",
        "app.components.UpgradePlanModal.text-strapi":
          "of AnW CMS by upgrading your plan to the",
        "components.AutoReloadBlocker.description":
          "Run AnW CMS with one of the following commands:",
        "global.plugins.sentry.description":
          "Send AnW CMS error events to Sentry.",
        "notification.version.update.message":
          "A new version of Strapi is available!",
      },
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
