// File: warn.js

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.startsWith('!warn')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.send('You have been warned for violating the rules.');
                message.channel.send(`${user.tag} has been warned.`);
            } else {
                message.channel.send('That user is not in this server.');
            }
        } else {
            message.channel.send('You need to mention a user to warn.');
        }
    }
});

client.login('your-token-here');