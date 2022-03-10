import styled from 'styled-components'

import { ITask } from './interfaces'

interface TaskProps {
  task: ITask
}

const TaskWrapper = styled.div<Pick<TaskProps['task'], 'priority'>>`
  background-color: ${({ priority }) => {
    switch (priority) {
      case 'HIGH':
        return 'red'
      case 'MEDIUM':
        return 'darkgray'
      case 'LOW':
        return 'green'
      default:
        return 'white'
    }
  }};
  box-shadow: #0e1824 0px 1px 0px 0px;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Task = ({ task }: TaskProps): JSX.Element => {
  return (
    <TaskWrapper priority={task.priority}>
      {task.text}
    </TaskWrapper>
  )
}

export default Task