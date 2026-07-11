import { Toaster } from 'sonner'
import AppRouter from './presentation/router/AppRouter'

export default function App() {
  return (
    <>
      <AppRouter />
      <Toaster richColors closeButton />
    </>
  )
}
