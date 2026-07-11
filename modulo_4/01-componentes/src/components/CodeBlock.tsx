import { useClipboard } from '../hooks/useClipboard'

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const { copy, copied } = useClipboard(1500)

  return (
    <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '6px 12px', background: '#1e293b',
      }}>
        <span style={{ fontSize: 12, color: '#94a3b8' }}>{language}</span>
        <button
          onClick={() => copy(code)}
          style={{
            padding: '3px 10px', borderRadius: 4,
            border: '1px solid #334155',
            background: copied ? '#166534' : '#1e293b',
            color:      copied ? '#bbf7d0' : '#94a3b8',
            cursor: 'pointer', fontSize: 12,
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>
      <pre style={{
        margin: 0, padding: '12px 16px',
        background: '#0f172a', color: '#e2e8f0',
        fontSize: 13, overflowX: 'auto',
      }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
