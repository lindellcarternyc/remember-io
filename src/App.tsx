import React from 'react'

import { AppContainer } from './ui'
import { AppStateProvider } from './state/app-state.context'
import TaskListPage from './pages/task-lists.page'

const App = (): JSX.Element => {
  return (
    <AppContainer>
      <AppStateProvider>
        <TaskListPage />
      </AppStateProvider>
    </AppContainer>
  )
}

export default App