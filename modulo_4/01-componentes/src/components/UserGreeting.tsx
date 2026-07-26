// src/components/UserGreeting.tsx

interface UserGreetingProps {
  name: string
  occupation?: string
  online?: boolean
}

export default function UserGreeting({ name, occupation, online }: UserGreetingProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#e11d48',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
          }}
        >
          {initials}
        </div>
        {online && (
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#22c55e',
              position: 'absolute',
              bottom: 0,
              right: 0,
              border: '2px solid #fff',
            }}
          />
        )}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Hola, {name}</p>
        {occupation && (
          <p style={{ margin: 0, fontSize: 13, color: '#888' }}>{occupation}</p>
        )}
      </div>
    </div>
  )
}
