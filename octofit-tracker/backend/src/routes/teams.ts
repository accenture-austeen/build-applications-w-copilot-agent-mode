import { Router } from 'express'
import { Team } from '../models/Team.js'

export const teamsRouter = Router()

teamsRouter.get('/', async (_request, response, next) => {
  try {
    const teams = await Team.find().populate('members', 'name email').sort({ name: 1 }).lean()

    response.json({ teams })
  } catch (error) {
    next(error)
  }
})