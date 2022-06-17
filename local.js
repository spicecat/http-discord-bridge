require('dotenv-json')()
const app = require('./app'), { PORT } = require('./var')

app.listen(PORT, console.log('Listening at port:', PORT))