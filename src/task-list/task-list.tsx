import styled from 'styled-components'
import AddButton from '../ui/add-button'
import { mapObject } from '../utils/collection.utils'

import { ITaskList } from './interfaces'

import Task from './task'

const TaskListWrapper = styled.div`
  background-color: #ebecf0;
  padding: 0.75rem;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  cursor: pointer;
`

const TaskListTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`

interface TaskListProps {
  list: ITaskList
}

const TaskList = ({ list }: TaskListProps): JSX.Element => {
  return (
    <TaskListWrapper>
      <TaskListTitle>
        {list.title}
      </TaskListTitle>
      {mapObject(list.tasks, task => (
        <Task key={task.id} task={task} />
      ))}
      <AddButton 
        dark
        text='+ Add Task'
        onClick={alert}
      />
    </TaskListWrapper>
  )
}

export default TaskList