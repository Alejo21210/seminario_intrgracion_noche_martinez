import { useMediaQuery } from '../hooks/useMediaQuery'
import { useWindowSize } from '../hooks/useWindowSize'

export default function ResponsiveLayout() {
  const isMobile  = useMediaQuery('(max-width: 768px)')
  const isTablet  = useMediaQuery('(max-width: 1024px)')
  const { width } = useWindowSize()

  return (
    <div style={{
      padding: isMobile ? 12 : 24,
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 1fr',
      gap: 12,
    }}>
      <div style={{ padding: 16, background: '#f9fafb', borderRadius: 8 }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Vista actual</p>
        <p style={{ margin: '4px 0 0', fontSize: 12, color: '#6b7280' }}>
          {isMobile ? 'Móvil' : isTablet ? 'Tablet' : 'Escritorio'} — {width}px
        </p>
      </div>
      <div style={{ padding: 16, background: '#f9fafb', borderRadius: 8 }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Columnas</p>
        <p style={{ margin: '4px 0 0', fontSize: 12, color: '#6b7280' }}>
          {isMobile ? 1 : isTablet ? 2 : 3}
        </p>
      </div>
      {!isMobile && (
        <div style={{ padding: 16, background: '#f9fafb', borderRadius: 8 }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Extra</p>
          <p style={{ margin: '4px 0 0', fontSize: 12, color: '#6b7280' }}>
            Solo visible en tablet/escritorio
          </p>
        </div>
      )}
    </div>
  )
}
