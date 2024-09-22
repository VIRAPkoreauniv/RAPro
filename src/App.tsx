import { QueryClientProvider, useQueryClient } from '@tanstack/react-query'
import AppRouter from './Router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = useQueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
