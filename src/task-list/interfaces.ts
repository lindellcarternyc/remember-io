export interface Entity {
  id: string
}

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
  tasks: ITask[]
}