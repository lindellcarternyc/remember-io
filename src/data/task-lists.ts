import { ITaskList } from '../task-list/interfaces'

const LISTS: ITaskList[] = [
  {
    id: '0',
    title: 'List 1',
    tasks: [
      {
        id: '00',
        text: 'Task 1',
        priority: 'HIGH'
      }, {
        id: '01',
        text: 'Task 2',
        priority: 'MEDIUM'
      }, {
        id: '02',
        text: 'Task 3',
        priority: 'LOW'
      }, {
        id: '03',
        text: 'Task 4'
      }
    ]
  }, {
    id: '1',
    title: 'List 2',
    tasks: [
      {
        id: '10',
        text: 'Do some stuff',
        priority: 'HIGH'
      }
    ]
  }
]

export {
  LISTS
}