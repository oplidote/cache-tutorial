'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HeaderLayout from './HeaderLayout'

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <HeaderLayout>{children}</HeaderLayout>
    </QueryClientProvider>
  )
}

export default Provider
