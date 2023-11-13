import { http, HttpResponse } from 'msw'

const todos = ['먹기', '자기', '놀기']

export const handlers = [
  // 할일 목록
  http.get('https://jsonplaceholder.typicode.com/todos', ({ request }) => {
    return HttpResponse.json([
      {
        userId: 1,
        id: 1,
        title: '청소',
        completed: true,
      },
      {
        userId: 1,
        id: 2,
        title: '설거지',
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: '빨래',
        completed: true,
      },
    ])
  }),
]
