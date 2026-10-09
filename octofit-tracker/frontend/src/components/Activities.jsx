import { ResourcePage } from './ResourcePage.jsx'
import { apiBaseUrl, getCollection } from '../api.js'

const endpoint = '/api/activities/'

async function loadActivities() {
  const response = await fetch(`${apiBaseUrl}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return getCollection(await response.json(), 'activities')
}

export default function Activities() {
  return (
    <ResourcePage
      title="Activities"
      description="Recent workouts logged by OctoFit members."
      endpoint={endpoint}
      responseKey="activities"
      loadItems={loadActivities}
      columns={[
        { key: 'user.name', label: 'Athlete' },
        { key: 'type', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
      ]}
    />
  )
}