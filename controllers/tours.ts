import { store } from '../app'
import type express from 'express'

export const getAllTours = async (
 req: express.Request,
 res: express.Response
) => {
 try {
  const data = store.getState()
  res.status(200).json(data)
 } catch (error) {
  res.status(500).json({ message: 'Error getting tours', error })
 }
}

export const createTour = async (
 req: express.Request,
 res: express.Response
) => {
 try {
  const newId = store.generateId()
  const newTour = Object.assign({ id: newId }, req.body)
  console.log(newTour)
  await store.addValue(newTour)
  res.status(201).json({ tour: newTour })
 } catch (error) {
  res.status(500).json({ message: 'Error creating tour', error })
 }
}

export const getTour = (req: express.Request, res: express.Response) => {
 const id = req.params.id
 const tour = store.getTrip(parseInt(id))
 if (tour) {
  res.status(200).json(tour)
 } else {
  res.status(404).json({ message: 'Tour not found' })
 }
}

export const updateTour = async (
 req: express.Request,
 res: express.Response
) => {
 const id = req.params.id
 const tour = store.getTrip(parseInt(id))
 if (tour) {
  const newTour = Object.assign({}, tour, req.body)
  await store.updateValue(parseInt(id), newTour)
  res.status(200).json({ tour: newTour })
 } else {
  res.status(404).json({ message: 'Tour not found' })
 }
}

export const deleteTour = async (
 req: express.Request,
 res: express.Response
) => {
 try {
  const id = req.params.id
  await store.deleteTour(parseInt(id))
  res.status(204).json({ message: 'Tour deleted' })
 } catch (error) {
  res.status(500).json({ message: 'Error deleting tour', error })
 }
}
