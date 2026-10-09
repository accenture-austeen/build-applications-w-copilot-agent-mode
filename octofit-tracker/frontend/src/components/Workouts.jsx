import { ResourcePage } from './ResourcePage.jsx'

export default function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      description="Personalized suggestions matched to member goals."
      endpoint="/api/workouts/"
      responseKey="workouts"
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