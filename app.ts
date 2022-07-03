require('dotenv').config()
import express from 'express'
import morgan from 'morgan'
import { tourRoutes } from './routes/tours'
import { userRoutes } from './routes/users'
import mongoose from 'mongoose'

const LinkToDb = process.env.DB as string

mongoose
 .connect(`${LinkToDb}`)
 .then((con) => console.log('DB Connected '))
 .catch((err) => console.log(err))

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
 res.send('hello world')
})

app.use('/api/tours', tourRoutes)
app.use('/api/users', userRoutes)

// close mongoose connection on process exit
process.on('SIGINT', async () => {
 console.log('DB disconnected')
 await mongoose.disconnect()
})

export default app
