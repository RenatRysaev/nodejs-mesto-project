// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config();

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF = "origin/main",
} = process.env;

console.log("DEPLOY_USER", DEPLOY_USER);

module.exports = {
  apps: [
    {
      name: "api-service",
      script: "./dist/app.js",
    },
  ],

  // Настройка деплоя
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: "https://github.com/RenatRysaev/nodejs-mesto-project.git",
      path: DEPLOY_PATH,
      "pre-deploy": `scp .env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      "post-deploy": "npm i && npm run build",
    },
  },
};
