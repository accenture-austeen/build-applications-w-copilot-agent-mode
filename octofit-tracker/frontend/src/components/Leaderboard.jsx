import { ResourcePage } from './ResourcePage.jsx'

export default function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      description="Competitive standings across members and teams."
      endpoint="/api/leaderboard/"
      responseKey="leaderboard"
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'user.name', label: 'Athlete' },
        { key: 'team.name', label: 'Team' },
        { key: 'weeklyPoints', label: 'Weekly Points' },
        { key: 'totalPoints', label: 'Total Points' },
      ]}
    />
  )
}