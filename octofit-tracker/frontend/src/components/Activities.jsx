import { ResourcePage } from './ResourcePage.jsx'

export default function Activities() {
  return (
    <ResourcePage
      title="Activities"
      description="Recent workouts logged by OctoFit members."
      endpoint="/api/activities/"
      responseKey="activities"
      columns={[
        { key: 'user.name', label: 'Athlete' },
        { key: 'type', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
      ]}
    />
  )
}