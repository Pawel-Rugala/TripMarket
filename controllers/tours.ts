import type express from 'express'
import Tour from '../models/tours'

export const getAllTours = async (
 req: express.Request,
 res: express.Response
) => {
 try {
  const data = await Tour.find({})
  res.status(200).json(data)
 } catch (error) {
  res.status(500).json({ message: 'Error getting tours', error })
 }
}

console.log('hello')

export const createTour = async (
 req: express.Request,
 res: express.Response
) => {
 try {
  const newTour = await Tour.create(req.body)
  res.status(201).json({ tour: newTour })
 } catch (error) {
  res.status(500).json({ message: 'Error creating tour', error })
 }
}

export const getTour = async (req: express.Request, res: express.Response) => {
 try {
  const id = req.params.id
  const tour = await Tour.findById(id)
  res.status(200).json({ tour })
 } catch (error) {
  res.status(500).json({ message: 'Error getting tour', error })
 }
}

export const updateTour = async (
 req: express.Request,
 res: express.Response
) => {
 try {
  const id = req.params.id
  const tour = await Tour.findByIdAndUpdate(id, req.body, {
   new: true,
   runValidators: true,
  })
  res.status(200).json({ tour })
 } catch (error) {
  res.status(500).json({ message: 'Error updating tour', error })
 }
}

export const deleteTour = async (
 req: express.Request,
 res: express.Response
) => {
 try {
  const id = req.params.id
  await Tour.findByIdAndDelete(id)
  res.status(204).json({ message: 'Tour deleted' })
 } catch (error) {
  res.status(500).json({ message: 'Error deleting tour', error })
 }
}
