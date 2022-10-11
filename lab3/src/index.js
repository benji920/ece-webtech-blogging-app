
const express = require('express')
const router = require('./routes');
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json()) // for parsing application/json

app.use('/', router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
