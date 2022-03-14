import { ObjectMap } from '../interfaces'
import { ITaskList } from '../task-list/interfaces'

const LISTS: ObjectMap<ITaskList> = {
  '0': {
    id: '0',
    title: 'List 1',
    tasks: {
      '00': {
        id: '00',
        text: 'Task 1',
        priority: 'HIGH'
      }, 
      '01': {
        id: '01',
        text: 'Task 2',
        priority: 'MEDIUM'
      },
      '02': {
        id: '02',
        text: 'Task 3',
        priority: 'LOW'
      }, 
      '03': {
        id: '03',
        text: 'Task 4'
      }
    }
  }, 
  '1': {
    id: '1',
    title: 'List 2',
    tasks: {
      '10': {
        id: '10',
        text: 'Do some stuff',
        priority: 'HIGH'
      }
    }
  }
}

export {
  LISTS
}