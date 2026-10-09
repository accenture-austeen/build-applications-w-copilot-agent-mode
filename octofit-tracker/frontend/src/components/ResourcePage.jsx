import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function getValue(item, path) {
  return path.split('.').reduce((value, key) => value?.[key], item)
}

function renderValue(value) {
  if (Array.isArray(value)) {
    return value.map((entry) => (typeof entry === 'object' ? entry.name || entry.title : entry)).join(', ')
  }

  if (value && typeof value === 'object') {
    return value.name || value.title || JSON.stringify(value)
  }

  return value ?? 'Not set'
}

export function ResourcePage({ title, description, endpoint, responseKey, columns, loadItems }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadPageItems() {
      try {
        const nextItems = loadItems
          ? await loadItems()
          : await fetchCollection(endpoint, responseKey)

        if (!ignore) {
          setItems(nextItems)
          setStatus('loaded')
        }
      } catch (requestError) {
        if (!ignore) {
          setError(requestError.message)
          setStatus('error')
        }
      }
    }

    loadPageItems()

    return () => {
      ignore = true
    }
  }, [endpoint, responseKey])

  return (
    <section className="resource-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>{title}</h1>
        </div>
        <p>{description}</p>
      </div>

      {status === 'loading' && <p className="status">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="status error">Unable to load data: {error}</p>}

      {status === 'loaded' && (
        <div className="table-wrap">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id || item.id || JSON.stringify(item)}>
                  {columns.map((column) => (
                    <td key={column.key}>{renderValue(getValue(item, column.key))}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {items.length === 0 && <p className="empty-state">No data returned yet.</p>}
        </div>
      )}
    </section>
  )
}