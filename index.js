const { Client, GatewayIntentBits } = require('discord.js');

// create a virtual client , with the help of the client we interact with the discord api
// intents are used to specify which events we want to receive from the discord api(like giving a permission to the bot to read messages in a channel)
const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages] });