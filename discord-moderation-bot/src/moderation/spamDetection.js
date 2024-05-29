// File: spamDetection.js

const Discord = require('discord.js');

module.exports = {
  checkSpam: (message) => {
    // Logic to check for spam in the message
    const content = message.content.toLowerCase();
    const spamWords = ['spam', 'promotion', 'sale', 'discount'];
    
    if (spamWords.some(word => content.includes(word))) {
      message.delete();
      message.channel.send(`${message.author}, please refrain from spamming.`);
    }
  }
};