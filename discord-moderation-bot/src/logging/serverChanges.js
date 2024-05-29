// File: serverChanges.js

const fs = require('fs');

const logServerChanges = (changeType, details) => {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - ${changeType}: ${details}\n`;

    fs.appendFile('serverChanges.log', logEntry, (err) => {
        if (err) {
            console.error('Error logging server changes:', err);
        }
    });
};

module.exports = {
    logServerChanges,
};