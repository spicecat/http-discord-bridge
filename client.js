const { Client } = require('discord.js-selfbot-v13'), { TOKEN, BOT_ID } = require('./var')

const client = new Client()
let bot = undefined

client.once('ready', async () => {
    console.log('Logged in as:', client.user.username)
    bot = await client.users.fetch(BOT_ID)
    bot.send('!help')
})
client.on('messageCreate', async msg => {
    // console.log(msg)
})

client.login(TOKEN)

client.help = () => {
    bot.send('!help')
}

module.exports = client