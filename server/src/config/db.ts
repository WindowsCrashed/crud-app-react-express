import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Connected to MongoDb.')
    })
    .catch(err => {
        console.log(`ERROR: Failed to connect to MongoDb.\n${err as string}`)
    })
