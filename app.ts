import express from 'express'
import { getDummyDataFromFile } from './utils/localFiles'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
 res.send('hello world')
})

app.get('/api/tours', async (req, res) => {
 try {
  const data = await getDummyDataFromFile()
  res.status(200).json(data)
 } catch (error) {
  res.status(500).json({ message: 'Error getting tours', error })
 }
})

app.post('/api/tours', (req, res) => {
 console.log(req.body)
 res.status(201).json({ message: 'Tour created' })
})

export default app
