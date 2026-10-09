import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile: {
      age: { type: Number, required: true },
      fitnessGoal: { type: String, required: true },
      favoriteActivity: { type: String, required: true },
    },
  },
  { timestamps: true },
)

export const User = mongoose.models.User || mongoose.model('User', userSchema)