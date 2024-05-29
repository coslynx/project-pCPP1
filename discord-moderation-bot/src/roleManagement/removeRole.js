// File: removeRole.js

const Discord = require('discord.js');

module.exports = {
  name: 'removeRole',
  description: 'Remove a role from a user',
  execute(message, args) {
    if (!message.member.hasPermission('MANAGE_ROLES')) {
      return message.reply('You do not have permission to use this command.');
    }

    const targetUser = message.mentions.users.first();
    if (!targetUser) {
      return message.reply('Please mention a user to remove the role from.');
    }

    const roleName = args[1];
    const role = message.guild.roles.cache.find(role => role.name === roleName);
    if (!role) {
      return message.reply('Could not find that role.');
    }

    const member = message.guild.members.cache.get(targetUser.id);

    if (member.roles.cache.has(role.id)) {
      member.roles.remove(role);
      message.channel.send(`Successfully removed the role ${role.name} from ${targetUser.username}`);
    } else {
      message.reply(`${targetUser.username} does not have the ${role.name} role.`);
    }
  }
};