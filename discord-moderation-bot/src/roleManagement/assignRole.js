```js
// File: assignRole.js

// Function to assign a role to a user
function assignRole(user, role) {
    // Check if user and role are valid
    if (user && role) {
        // Logic to assign the role to the user
        console.log(`Assigned role ${role} to user ${user}`);
    } else {
        console.error("Invalid user or role provided");
    }
}

module.exports = assignRole;
```