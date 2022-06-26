import express from 'express'

export const userRoutes = express.Router()

const getAllUser = (req: express.Request, res: express.Response) => {
 throw new Error('not implemented')
}

const createUser = (req: express.Request, res: express.Response) => {
 throw new Error('not implemented')
}

const getUser = (req: express.Request, res: express.Response) => {
 throw new Error('not implemented')
}

const updateUser = (req: express.Request, res: express.Response) => {
 throw new Error('not implemented')
}

const deleteUser = (req: express.Request, res: express.Response) => {
 throw new Error('not implemented')
}

userRoutes.route('/').get(getAllUser).post(createUser)
userRoutes.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)
