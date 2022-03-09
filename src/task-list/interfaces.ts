export interface Entity {
  id: string
}

export interface ITask extends Entity {
  text: string
}

export interface ITaskList extends Entity {
  title: string
  tasks: ITask[]
}