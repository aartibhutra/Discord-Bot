require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// create a virtual client , with the help of the client we interact with the discord api
// intents are used to specify which events we want to receive from the discord api(like giving a permission to the bot to read messages in a channel)
const client = new Client({ intents: [
    GatewayIntentBits.Guilds , 
    GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent] });

// setup listeners for the client
client.on('messageCreate' , (message) => {
    // console.log(message.content); // log the message content to the console
    if(message.author.bot) return; // ignore messages from bots
    message.reply({
        content : "Hi From the bot!",
    });
});

// login to the discord api using the bot token
client.login(process.env.DISCORD_TOKEN);
