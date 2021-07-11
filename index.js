require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("The Client is Ready!");
});

client.login(process.env.DISCORDJS_TOKEN);