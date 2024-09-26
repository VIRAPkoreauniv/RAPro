import { QueryClient } from '@tanstack/react-query'
import AppRouter from './Router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})
const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen={false} />
      <AppRouter />
    </PersistQueryClientProvider>
  )
}

export default App
