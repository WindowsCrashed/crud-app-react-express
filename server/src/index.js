const express = require('express')
const db = require('./config/db')
const router = require('./routes/router')

const PORT = 3001
const app = express()

app.use(express.json())

router(app)

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))