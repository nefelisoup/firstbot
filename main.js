const Discord = require('discord.js');
const client = new Discord.Client();



client.once('ready', () => {
    console.log('wsp im online')
});



client.login(process.env.token);