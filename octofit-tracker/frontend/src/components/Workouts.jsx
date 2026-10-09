import { ResourcePage } from './ResourcePage.jsx'
import { apiBaseUrl, getCollection } from '../api.js'

const endpoint = '/api/workouts/'

async function loadWorkouts() {
  const response = await fetch(`${apiBaseUrl}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return getCollection(await response.json(), 'workouts')
}

export default function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      description="Personalized suggestions matched to member goals."
      endpoint={endpoint}
      responseKey="workouts"
      loadItems={loadWorkouts}
      columns={[
        { key: 'title', label: 'Workout' },
        { key: 'focusArea', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'estimatedMinutes', label: 'Minutes' },
        { key: 'suggestedFor', label: 'Suggested For' },
      ]}
    />
  )
}