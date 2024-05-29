```js
// profanityFilter.js

const filterProfanity = (message) => {
    const profaneWords = ['profane_word1', 'profane_word2', 'profane_word3']; // Add more profane words as needed
    const cleanMessage = message.toLowerCase();

    for (const word of profaneWords) {
        if (cleanMessage.includes(word)) {
            return true; // Profanity detected
        }
    }

    return false; // No profanity detected
};

module.exports = {
    filterProfanity,
};
```