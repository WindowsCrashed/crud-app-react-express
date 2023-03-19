import express from 'express'
import cors from 'cors'
import router from './routes/router'
import './config/db'

const PORT = 3001
const app = express()

app.use(express.json())
app.use(cors())

router(app)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})
