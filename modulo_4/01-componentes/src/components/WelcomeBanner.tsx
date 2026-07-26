// src/App.tsx
// Prueba esto

function Bienvenida() {
  return (
    <>
      <h1 style={{ color: '#1a6b4a' }}>Hola desde React 19 + TypeScript</h1>
      <p>Proyecto configurado con Vite 8.</p>
      <p>Versión: 1.0.0</p>
    </>
  )
}

export default function WelcomeBanner() {
  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <Bienvenida />
    </main>
  )
}