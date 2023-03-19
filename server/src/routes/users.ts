import { Router, type Request, type Response } from 'express'
import User from '../models/user'

const router = Router()

router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (msg) {
        res.status(500).send(`FAILED TO RETRIEVE USERS:\n${msg as string}`)
    }
})

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id

    try {
        const user = await User.findById(id)
        if (user == null) {
            res.status(400).send('User not found.')
            return
        }
        res.status(200).json(user)
    } catch (msg) {
        res.status(500).send(`FAILED TO RETRIEVE USER:\n${msg as string}`)
    }
})

router.post('/', async (req: Request, res: Response): Promise<void> => {
    const { name, email, age } = req.body

    const newUser = new User({
        name,
        email,
        age
    })

    try {
        await newUser.save()
        res.status(204).send()
    } catch (msg) {
        res.status(500).send(`FAILED TO REGISTER USER:\n${msg as string}`)
    }
})

router.put('/:id', async (req: Request, res: Response): Promise<void> => {
    const { name, email, age } = req.body
    const id = req.params.id

    try {
        const user = await User.findById(id)
        if (user == null) {
            res.status(400).send('User not found.')
            return
        }

        const updatedUser = { name, email, age }

        await User.updateOne({ _id: id }, updatedUser)
        res.status(204).send()
    } catch (msg) {
        res.status(500).send(`FAILED TO UPDATE USER:\n${msg as string}`)
    }
})

router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id

    try {
        const user = await User.findById(id)
        if (user == null) {
            res.status(400).send('User not found.')
            return
        }
        await User.deleteOne({ _id: id })
        res.status(204).send()
    } catch (msg) {
        res.status(500).send(`FAILED TO DELETE USER:\n${msg as string}`)
    }
})

export default router
