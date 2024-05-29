```python
# botLogic.py

# Import necessary libraries and modules

import discord
from discord.ext import commands

# Define bot client
bot = commands.Bot(command_prefix='!')

# Events
@bot.event
async def on_ready():
    print('Bot is online and ready.')

# Command to warn a user
@bot.command()
async def warn(ctx, user: discord.Member, reason: str):
    await ctx.send(f'{user.mention} has been warned for {reason}.')

# Command to mute a user
@bot.command()
async def mute(ctx, user: discord.Member, duration: int, reason: str):
    await ctx.send(f'{user.mention} has been muted for {duration} minutes due to {reason}.')

# Command to kick a user
@bot.command()
async def kick(ctx, user: discord.Member, reason: str):
    await ctx.send(f'{user.mention} has been kicked for {reason}.')

# Command to ban a user
@bot.command()
async def ban(ctx, user: discord.Member, reason: str):
    await ctx.send(f'{user.mention} has been banned for {reason}.')

# Run the bot
bot.run('YOUR_DISCORD_TOKEN')
```