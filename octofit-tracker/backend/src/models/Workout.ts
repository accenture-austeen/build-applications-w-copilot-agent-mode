import mongoose from 'mongoose'

const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, required: true },
    estimatedMinutes: { type: Number, required: true },
    suggestedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    exercises: [{ type: String, required: true }],
  },
  { timestamps: true },
)

export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema)