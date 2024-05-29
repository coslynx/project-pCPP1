// File: thirdPartyTools.js

const Discord = require('discord.js');
const { google } = require('googleapis');
const { OPENAI_API_KEY } = process.env;
const axios = require('axios');

const client = new Discord.Client();
const googleClient = new google.auth.JWT({
  keyFile: 'path/to/keyfile.json',
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  if (message.content.startsWith('!toxicity')) {
    const text = message.content.slice('!toxicity'.length).trim();
    const toxicityScore = await getToxicityScore(text);
    message.channel.send(`Toxicity score for "${text}" is: ${toxicityScore}`);
  }
});

async function getToxicityScore(text) {
  const url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${process.env.PERSPECTIVE_API_KEY}`;
  const requestBody = {
    comment: { text: text },
    requestedAttributes: { TOXICITY: {} },
  };

  try {
    const response = await axios.post(url, requestBody);
    return response.data.attributeScores.TOXICITY.summaryScore.value;
  } catch (error) {
    console.error('Error getting toxicity score:', error);
    return null;
  }
}

client.login('your-bot-token');