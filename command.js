const { REST, Routes } = require("discord.js");
const config = require("./config");

const commands = [
    {
      name: 'create',
      description: 'creates a new short URL',
    },
  ];

const rest = new REST({ version: '10' }).setToken(config.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
  
        await rest.put(Routes.applicationCommands(config.CLIENT_ID), { body: commands });
  
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
