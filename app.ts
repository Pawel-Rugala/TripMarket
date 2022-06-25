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

app.get('/api/tours/:id', (req, res) => {
 const id = req.params.id
 const tour = store.getTrip(parseInt(id))
 if (tour) {
  res.status(200).json(tour)
 } else {
  res.status(404).json({ message: 'Tour not found' })
 }
})

app.patch('/api/tours/:id', async (req, res) => {
 const id = req.params.id
 const tour = store.getTrip(parseInt(id))
 if (tour) {
  const newTour = Object.assign({}, tour, req.body)
  await store.updateValue(parseInt(id), newTour)
  res.status(200).json({ tour: newTour })
 } else {
  res.status(404).json({ message: 'Tour not found' })
 }
})

export default app
