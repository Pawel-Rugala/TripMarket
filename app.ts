import express from 'express'
import { getDummyDataFromFile } from './utils/localFiles'
import type { TDummyArrayData } from './types'
import { dummyStore } from './dummy/store'

const store = new dummyStore()
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

app.get('/', (req, res) => {
 res.send('hello world')
})

app.get('/api/tours', async (req, res) => {
 try {
  const data = store.getState()
  res.status(200).json(data)
 } catch (error) {
  res.status(500).json({ message: 'Error getting tours', error })
 }
})

app.post('/api/tours', async (req, res) => {
 try {
  const newId = store.generateId()
  const newTour = Object.assign({ id: newId }, req.body)
  console.log(newTour)
  await store.addValue(newTour)
  res.status(201).json({ tour: newTour })
 } catch (error) {
  res.status(500).json({ message: 'Error creating tour', error })
 }
})

export default app
