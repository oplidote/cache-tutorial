'use client'

import { worker } from '@/mocks/worker'

export default function Home() {
  if (process.env.NODE_ENV === 'development') {
    if (typeof window === 'undefined') {
      ;(async () => {
        const { server } = await import('../mocks/server')
        server.listen()
      })()
    } else {
      ;(async () => {
        const { worker } = await import('../mocks/worker')
        worker.start()
      })()
    }
  }
  return <main>메인 페이지</main>
}
