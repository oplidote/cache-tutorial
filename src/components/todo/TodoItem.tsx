'use client'
import React from 'react'
import { Todo } from './TodoList'

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">{todo.title}</p>
        </blockquote>
        <figcaption className="font-medium">
          <span className="text-sky-500 dark:text-sky-400">
            {todo.userId} 님 <span className="text-slate-700 dark:text-slate-500"> : {todo.id} 번쨰 할 일</span>
          </span>
        </figcaption>
      </div>
    </figure>
  )
}

export default TodoItem
