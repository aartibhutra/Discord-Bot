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
    if(message.content.startsWith('create')){
        const url = message.content.split("create")[1]; // get the url from the message
        return message.reply({
            content : "Generating a short ID for you!" + url,
        });
    }
    message.reply({
        content : "Hi From the bot!",
    });
});

// its for a command you are making for the bot
client.on('interactionCreate' , interaction => {
    console.log(interaction);
    interaction.reply("Pong!!");
});

// login to the discord api using the bot token
client.login(process.env.DISCORD_TOKEN);
