import { Router } from 'express'
import { Activity } from '../models/Activity.js'

export const activitiesRouter = Router()

activitiesRouter.get('/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().populate('user', 'name email').sort({ activityDate: -1 }).lean()

    response.json({ activities })
  } catch (error) {
    next(error)
  }
})