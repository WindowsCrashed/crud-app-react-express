import type { Express } from 'express'
import users from './users'

export default (app: Express): void => {
    app.use('/users', users)
}
