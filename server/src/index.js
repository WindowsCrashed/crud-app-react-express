const express = require('express')
const db = require('./config/db.js')

const PORT = 3000
const app = express()

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))