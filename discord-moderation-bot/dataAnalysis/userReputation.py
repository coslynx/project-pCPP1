```python
# userReputation.py

class UserReputation:
    def __init__(self):
        self.user_reputation = {}

    def update_reputation(self, user_id, reputation_points):
        if user_id in self.user_reputation:
            self.user_reputation[user_id] += reputation_points
        else:
            self.user_reputation[user_id] = reputation_points

    def get_reputation(self, user_id):
        return self.user_reputation.get(user_id, 0)

    def reset_reputation(self, user_id):
        if user_id in self.user_reputation:
            del self.user_reputation[user_id]

    def get_top_users(self, num_users):
        sorted_users = sorted(self.user_reputation.items(), key=lambda x: x[1], reverse=True)
        return sorted_users[:num_users]
```