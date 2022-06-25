import express from 'express'
import {
 getAllTours,
 createTour,
 getTour,
 updateTour,
 deleteTour,
} from '../controllers/tours'

export const tourRoutes = express.Router()

tourRoutes.route('/').get(getAllTours).post(createTour)
tourRoutes.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)
