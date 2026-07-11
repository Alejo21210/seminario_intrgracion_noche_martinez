import { useCounter } from '../hooks/useCounter'

export default function QuantitySelector() {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 1, min: 1, max: 99,
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <button
        onClick={decrement}
        disabled={count === 1}
        style={qBtn}
      >
        −
      </button>
      <span style={{ minWidth: 32, textAlign: 'center', fontWeight: 600 }}>
        {count}
      </span>
      <button
        onClick={increment}
        disabled={count === 99}
        style={qBtn}
      >
        +
      </button>
      <button onClick={reset} style={{ ...qBtn, fontSize: 11, color: '#9ca3af' }}>
        Reset
      </button>
    </div>
  )
}

const qBtn = {
  width: 30, height: 30, border: '1px solid #d1d5db',
  borderRadius: 6, background: '#f9fafb', cursor: 'pointer',
}
