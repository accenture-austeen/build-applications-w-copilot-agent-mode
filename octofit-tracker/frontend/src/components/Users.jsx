import { ResourcePage } from './ResourcePage.jsx'
import { apiBaseUrl, getCollection } from '../api.js'

const endpoint = '/api/users/'

async function loadUsers() {
  const response = await fetch(`${apiBaseUrl}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return getCollection(await response.json(), 'users')
}

export default function Users() {
  return (
    <ResourcePage
      title="Users"
      description="Profiles, goals, and favorite ways to stay active."
      endpoint={endpoint}
      responseKey="users"
      loadItems={loadUsers}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'profile.fitnessGoal', label: 'Goal' },
        { key: 'profile.favoriteActivity', label: 'Favorite Activity' },
      ]}
    />
  )
}