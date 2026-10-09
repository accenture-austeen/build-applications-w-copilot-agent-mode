import { Router } from 'express'
import { Workout } from '../models/Workout.js'

export const workoutsRouter = Router()

workoutsRouter.get('/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().populate('suggestedFor', 'name email').sort({ title: 1 }).lean()

    response.json({ workouts })
  } catch (error) {
    next(error)
  }
})