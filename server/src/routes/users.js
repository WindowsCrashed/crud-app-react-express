const router = require('express').Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (msg) {
        res.status(500).send(`FAILED TO RETRIEVE USERS:\n${msg}`)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id)
        if (!user) return res.status(400).send('User not found.')
        res.status(200).json(user)
    } catch (msg) {
        res.status(500).send(`FAILED TO RETRIEVE USER:\n${msg}`)
    }
})

router.post('/', async (req, res) => {
    const { name, email, age } = req.body

    const newUser = new User({
        name, email, age
    })

    try {
        await newUser.save()
        res.status(204).send()
    } catch (msg) {
        res.status(500).send(`FAILED TO REGISTER USER:\n${msg}`)
    }
})

router.put('/:id', async (req, res) => {
    const { name, email, age } = req.body
    const id = req.params.id

    try {
        const user = await User.findById(id)     
        if (!user) return res.status(400).send('User not found.')

        const updatedUser = { name, email, age }

        await User.updateOne({ _id: id }, updatedUser)
        res.status(204).send()
    } catch (msg) {
        res.status(500).send(`FAILED TO UPDATE USER:\n${msg}`)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const user = await User.findById(id)     
        if (!user) return res.status(400).send('User not found.')
        await User.deleteOne(user)
        res.status(204).send()
    } catch (msg) {
        res.status(500).send(`FAILED TO DELETE USER:\n${msg}`)
    }
})

module.exports = router