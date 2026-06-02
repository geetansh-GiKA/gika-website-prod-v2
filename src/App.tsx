import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { PreLoader } from './Design-System/Components/PreLoader/PreLoaderOverlay'

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
