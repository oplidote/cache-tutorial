'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}
const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const getTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setTodoList(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      return null
    }
  }

  useEffect(() => {
    getTodos()
  }, [])
  return (
    <div className="flex flex-col w-1/2 gap-4">
      {todoList.map((todo, i) => {
        return <TodoItem key={i} todo={todo} />
      })}
    </div>
  )
}

export default TodoList
