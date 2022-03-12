import { Entity, ObjectMap } from '../interfaces'

export type Priority = 
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW'

export interface ITask extends Entity {
  text: string
  priority?: Priority
}

export interface ITaskList extends Entity {
  title: string
  tasks: ObjectMap<ITask>
}