import { ObjectMap } from '../interfaces'
import { ITaskList } from '../task-list/interfaces'

export interface AppState {
  taskLists: ObjectMap<ITaskList>
}