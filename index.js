const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Maruska!'))

app.listen(19967, () => console.log('Example app listening on port 3000!'))
