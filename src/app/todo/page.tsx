'use client'

import axios from 'axios'
import { useEffect } from 'react'

const Page = () => {
  const getTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      return
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return <div></div>
}

export default Page
