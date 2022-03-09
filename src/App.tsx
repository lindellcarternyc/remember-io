import React from 'react'

import { AppContainer, HorizontalScroll } from './ui'
import { TaskList } from './task-list'
import { ITaskList } from './task-list/interfaces'

const LISTS: ITaskList[] = [
  {
    id: '0',
    title: 'List 1',
    tasks: [
      {
        id: '00',
        text: 'Task 1'
      }, {
        id: '01',
        text: 'Task 2'
      }
    ]
  }
]

const App = (): JSX.Element => {
  return (
    <AppContainer>
      <div>App</div>
      <HorizontalScroll>
        {LISTS.map(list => {
          return <TaskList key={list.id} list={list} />
        })}
      </HorizontalScroll>
    </AppContainer>
  )
}

export default App