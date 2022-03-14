import { createContext, ReactNode, useContext, useState } from 'react'
import { LISTS } from '../data/task-lists'
import { AppState } from './interfaces'
import { nanoid } from 'nanoid'
import { ITaskList } from '../task-list/interfaces'

interface AppStateContextProps extends AppState {
  addList: (title: string) => void
}

const AppStateContext = createContext<AppStateContextProps>({ } as AppStateContextProps)

interface AppStateProviderProps {
  children: ReactNode
}

export const AppStateProvider = ({ children }: AppStateProviderProps): JSX.Element => {
  const [lists, setLists] = useState(LISTS)

  const onAddList = (title: string) => {
    const id = nanoid()
    const list: ITaskList = {
      id,
      title,
      tasks: { }
    }
    setLists(lists => (
      {
        ...lists,
        [id]: list
      }
    ))
  }
  
  return (
    <AppStateContext.Provider value={{
      taskLists: lists,
      addList: onAddList
    }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}