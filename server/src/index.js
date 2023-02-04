const express = require('express')
const cors = require('cors')
const db = require('./config/db')
const router = require('./routes/router')

const PORT = 3001
const app = express()

app.use(express.json())
app.use(cors())

router(app)

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))