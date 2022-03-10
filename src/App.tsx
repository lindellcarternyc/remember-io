import React from 'react'

import { AppContainer, HorizontalScroll } from './ui'
import { TaskList } from './task-list'

import { LISTS } from './data/task-lists'

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