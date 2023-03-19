import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    age: Number
})

const model = mongoose.model('user', schema)

export default model
