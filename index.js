require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const command = require("./Commands");

client.on('ready', () => {
    console.log("The Client is Ready!");
    command(client, 'ping', message => {
        message.channel.send("pong");
    })
});

client.login(process.env.DISCORDJS_TOKEN);