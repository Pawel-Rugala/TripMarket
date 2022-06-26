import express from 'express'
import { dummyStore } from './dummy/store'
import morgan from 'morgan'
import { tourRoutes } from './routes/tours'
import { userRoutes } from './routes/users'

export const store = new dummyStore()

store.setState().catch((err: any) => {
 console.log(err)
})

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
 res.send('hello world')
})

app.use('/api/tours', tourRoutes)
app.use('/api/users', userRoutes)

export default app
