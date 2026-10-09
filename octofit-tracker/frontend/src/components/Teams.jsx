import { ResourcePage } from './ResourcePage.jsx'

export default function Teams() {
  return (
    <ResourcePage
      title="Teams"
      description="Training groups and their current roster."
      endpoint="/api/teams/"
      responseKey="teams"
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'mascot', label: 'Mascot' },
        { key: 'members', label: 'Members' },
      ]}
    />
  )
}