import { useState, useEffect } from 'react'

interface User {
  id:       number
  name:     string
  email:    string
  username: string
}

export default function FetchUsers() {
  const [userId,    setUserId]    = useState(1)
  const [customId,  setCustomId]  = useState('')
  const [user,      setUser]      = useState<User | null>(null)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchUser() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: User = await res.json()

        if (!cancelled) setUser(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUser()

    return () => { cancelled = true }
  }, [userId])

  function handleCustomSearch() {
    const id = parseInt(customId, 10)
    if (id >= 1 && id <= 10) {
      setUserId(id)
    }
  }

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: userId === id ? '#0070f3' : '#fff',
              color:      userId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: userId === id ? 600 : 400,
            }}
          >
            Usuario {id}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          type="number"
          min={1}
          max={10}
          value={customId}
          onChange={(e) => setCustomId(e.target.value)}
          placeholder="ID (1-10)"
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', fontSize: 14 }}
        />
        <button
          onClick={handleCustomSearch}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 14 }}
        >
          Buscar
        </button>
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {user && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{user.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            @{user.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {user.email}
          </p>
        </div>
      )}
    </div>
  )
}
