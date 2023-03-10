const mongoose = require('mongoose')
const { db } = require('../../.env')

mongoose.connect(db.connectionString)
    .then(() => console.log('Connected to MongoDb.'))
    .catch(err => console.log(`ERROR: Failed to connect to MongoDb.\n${err}`))