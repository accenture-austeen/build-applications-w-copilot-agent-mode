import { ResourcePage } from './ResourcePage.jsx'
import { apiBaseUrl, getCollection } from '../api.js'

const endpoint = '/api/leaderboard/'

async function loadLeaderboard() {
  const response = await fetch(`${apiBaseUrl}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return getCollection(await response.json(), 'leaderboard')
}

export default function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      description="Competitive standings across members and teams."
      endpoint={endpoint}
      responseKey="leaderboard"
      loadItems={loadLeaderboard}
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