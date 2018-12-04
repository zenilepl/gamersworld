const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("518581800725905423");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send("مشرف السيرفر Gamer's World"), 4000) 
}
});

client.login(process.env.BOT_TOKEN);
