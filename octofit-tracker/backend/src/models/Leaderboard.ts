import mongoose from 'mongoose'

const leaderboardSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    rank: { type: Number, required: true },
    weeklyPoints: { type: Number, required: true },
    totalPoints: { type: Number, required: true },
  },
  { timestamps: true },
)

export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema)