const express = require('express')
const app = express()
const routes = require('./lib/index.js')

routes.setup(app);

app.listen(3000, () => console.log('Port 3000'))
