import { useState } from 'react'

interface Task {
  id: number
  title: string
  text: string
  done: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [titleInput, setTitleInput] = useState('')
  const [textInput, setTextInput] = useState('')

  function addTask() {
    if (!titleInput.trim() || !textInput.trim()) return
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: titleInput.trim(), text: textInput.trim(), done: false },
    ])
    setTitleInput('')
    setTextInput('')
  }

  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Título"
          style={{ width: 100, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Nueva tarea..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addTask}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Agregar
        </button>
      </div>

      {tasks.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay tareas. ¡Agrega una con título y descripción!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#aaa' : '#333' }}>
                {task.title}
              </div>
              <div style={{ fontSize: 13, color: task.done ? '#ccc' : '#888', textDecoration: task.done ? 'line-through' : 'none' }}>
                {task.text}
              </div>
            </div>
            <button
              onClick={() => removeTask(task.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {tasks.filter((t) => t.done).length} de {tasks.length} completadas
        </p>
      )}
    </div>
  )
}
