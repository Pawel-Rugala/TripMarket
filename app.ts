import express from 'express'
import { dummyStore } from './dummy/store'
import morgan from 'morgan'
import { tourRoutes } from './routes/tours'

export const store = new dummyStore()

store
 .setState()
 .then(() => {
  console.log('store initialized')
 })
 .catch((err: any) => {
  console.log(err)
 })

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
 res.send('hello world')
})

app.use('/api/tours', tourRoutes)

export default app
