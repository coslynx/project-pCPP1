```javascript
// index.js

// Import required modules
const Discord = require('discord.js');

// Create a new Discord client
const client = new Discord.Client();

// Bot token
const token = 'YOUR_DISCORD_TOKEN_HERE';

// Event listener for when the bot is ready
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener for incoming messages
client.on('message', message => {
    // Your message handling logic here
});

// Log in to Discord with the bot token
client.login(token);
```