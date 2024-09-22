import { QueryClientProvider, useQueryClient } from '@tanstack/react-query'
import AppRouter from './Router'

const queryClient = useQueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
