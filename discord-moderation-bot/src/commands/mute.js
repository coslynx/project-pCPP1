// File: mute.js

const Discord = require('discord.js');

module.exports = {
  name: 'mute',
  description: 'Mute a user in the server',
  execute(message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('You do not have permission to use this command.');
    }

    const target = message.mentions.users.first();
    if (target) {
      const member = message.guild.member(target);
      if (member) {
        member.roles.add('MutedRoleID').then(() => {
          message.channel.send(`${target} has been muted.`);
        }).catch((err) => {
          console.error(err);
          message.channel.send('There was an error muting the user.');
        });
      } else {
        message.channel.send('That user is not in this server.');
      }
    } else {
      message.channel.send('Please mention the user you want to mute.');
    }
  }
};