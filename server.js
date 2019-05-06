const express = require('express')
const serveIndex = require('serve-index');
const app = express()
const port = 80

app.use('/.well-known', express.static('.well-known'), serveIndex('.well-known'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
