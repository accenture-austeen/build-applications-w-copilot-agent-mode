import { ResourcePage } from './ResourcePage.jsx'
import { apiBaseUrl, getCollection } from '../api.js'

const endpoint = '/api/teams/'

async function loadTeams() {
  const response = await fetch(`${apiBaseUrl}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return getCollection(await response.json(), 'teams')
}

export default function Teams() {
  return (
    <ResourcePage
      title="Teams"
      description="Training groups and their current roster."
      endpoint={endpoint}
      responseKey="teams"
      loadItems={loadTeams}
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'mascot', label: 'Mascot' },
        { key: 'members', label: 'Members' },
      ]}
    />
  )
}