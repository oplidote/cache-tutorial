import TodoItem from './TodoItem'
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { getTodos } from '@/utils/api'
import { useEffect, useState } from 'react'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const TodoList = () => {
  const { status, data, error, refetch } = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const [isOnMSW, setIsOnMSW] = useState<boolean>(false)

  const onClickHandler = () => (isOnMSW ? offMockServer() : onMockServer())

  const onMockServer = () => {
    if (process.env.NODE_ENV === 'development') {
      if (typeof window === 'undefined') {
        ;(async () => {
          const { server } = await import('../../mocks/server')
          server.listen()
        })()
      } else {
        ;(async () => {
          const { worker } = await import('../../mocks/worker')
          worker.start()
          refetch()
          setIsOnMSW(true)
        })()
      }
    }
  }

  const offMockServer = () => {
    if (process.env.NODE_ENV === 'development') {
      if (typeof window === 'undefined') {
        ;(async () => {
          const { server } = await import('../../mocks/server')
          server.listen()
        })()
      } else {
        ;(async () => {
          const { worker } = await import('../../mocks/worker')
          worker.stop()
          refetch()
          setIsOnMSW(false)
        })()
      }
    }
  }
  useEffect(() => {
    return () => offMockServer()
  }, [])
  if (status == 'pending') return <div>Loading...</div>
  if (status == 'error') return 'An error has occurred: ' + error.message
  if (!data) return <></>
  return (
    <div className="flex flex-col w-1/2 gap-4">
      <button
        onClick={onClickHandler}
        className={`${isOnMSW ? 'bg-cyan-500 hover:bg-cyan-600' : 'bg-slate-600'} block  h-10 rounded-lg`}
      >
        {isOnMSW ? 'mock server on' : 'mock server off'}
      </button>
      {data.data.map((todo: Todo, i: number) => {
        return <TodoItem key={i} todo={todo} />
      })}
    </div>
  )
}

export default TodoList
