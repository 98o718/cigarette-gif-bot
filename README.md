<h1 align="center">Welcome to slack-gif-bot 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> The Slack bot which sends cigarette and food gifs using netlify serverless functions

## Install

```sh
npm install
```

## Configuration

1. Config `GIPHY_API_KEY` and `GIPHY_BASE_URL` environment variables in your netlify site settings
1. Add Slack bot commands with `https://your-slack-bot-domain/.netlify/functions/cigarette-gif` and `https://your-slack-bot-domain/.netlify/functions/food-gif` request URLs

## Deploy

```sh
npm run deploy
```

## Author

🤓 **Max Kalyakin**

* Github: [@98o718](https://github.com/98o718)

## Show your support

Give a ⭐️ if this project helped you!
