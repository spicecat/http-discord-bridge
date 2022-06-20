const { Client } = require('discord.js-selfbot-v13'), { TOKEN, TARGET_ID } = require('./var')

const client = new Client()
let target = undefined

client.once('ready', async () => {
    console.log('Logged in as:', client.user.username)
    target = await client.users.fetch(TARGET_ID)
    target.send('hello')
})
client.on('messageCreate', async msg => {
    // console.log(msg)
})

client.login(TOKEN)

client.help = () => {
    target.send('!help')
}

module.exports = client