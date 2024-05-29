```javascript
// userActivities.js

const userActivities = {
  logUserActivity: (userId, activityType, details) => {
    // Log user activity to database or external service
    console.log(`User ${userId} performed ${activityType}: ${details}`);
  },

  getUserActivity: (userId) => {
    // Retrieve user activity from database or external service
    return `User ${userId} activity log retrieved successfully.`;
  },

  clearUserActivity: (userId) => {
    // Clear user activity from database or external service
    console.log(`User ${userId} activity log cleared.`);
  }
};

module.exports = userActivities;
```  