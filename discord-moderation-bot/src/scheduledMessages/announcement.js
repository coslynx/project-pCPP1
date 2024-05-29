// announcement.js

const Discord = require('discord.js');

module.exports = {
  name: 'announcement',
  description: 'Schedule an announcement message',

  execute(message, args) {
    // Check if user has permission to schedule announcements
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('You do not have permission to schedule announcements.');
    }

    // Parse arguments for announcement details
    const announcementChannel = message.mentions.channels.first();
    if (!announcementChannel) {
      return message.reply('Please mention a valid channel to send the announcement.');
    }

    const announcementContent = args.slice(1).join(' ');
    if (!announcementContent) {
      return message.reply('Please provide the announcement message content.');
    }

    // Send announcement message to specified channel
    announcementChannel.send(announcementContent);
  }
}; 

// This file handles the scheduling and sending of announcement messages in the specified channel.