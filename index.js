const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', (message) => {
    const logs = message.guild.channels.cache.get("channel id");
    const embed2 = new Discord.MessageEmbed()
    .setTitle("NEW SPAM")
    .setDescription(`${message.author} has posted a spam link in ${message.channel}\nContent was: ${message.content}`)
    .setTimestamp();
    const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .addField("Message deleted", `${message.author} spam isn't allowed.`) 
    .setTimestamp();
    if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
      message.delete()
        .then(message.channel.send(embed))
        logs.send(embed2);
    }
  });
  
  client.login("YOURTOKEN")
