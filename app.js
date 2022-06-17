const express = require('express'), cors = require('cors'), client = require('./client')

const app = express()

app.use((_, res, next) => {
    res.removeHeader('X-Powered-By')
    next()
})
app.use(cors())
app.use(express.json())

app.get('/ping', (_req, res) => {
    client.help()
    res.status(200).send('pong')
})

module.exports = app