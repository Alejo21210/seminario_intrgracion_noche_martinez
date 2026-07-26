import { useState } from 'react'

export default function SafeCounter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((prev) => prev + 1)
  }

  function incrementThree() {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={incrementThree}>+3</button>
    </div>
  )
}
