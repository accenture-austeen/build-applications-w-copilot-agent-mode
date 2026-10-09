import { ResourcePage } from './ResourcePage.jsx'

export default function Users() {
  return (
    <ResourcePage
      title="Users"
      description="Profiles, goals, and favorite ways to stay active."
      endpoint="/api/users/"
      responseKey="users"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'profile.fitnessGoal', label: 'Goal' },
        { key: 'profile.favoriteActivity', label: 'Favorite Activity' },
      ]}
    />
  )
}