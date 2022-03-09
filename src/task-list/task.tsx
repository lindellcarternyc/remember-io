import styled from 'styled-components'

import { ITask } from './interfaces'

const TaskWrapper = styled.div`
  background-color: white;
  box-shadow: #0e1824 0px 1px 0px 0px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`

interface TaskProps {
  task: ITask
}

const Task = ({ task }: TaskProps): JSX.Element => {
  return (
    <TaskWrapper>
      {task.text}
    </TaskWrapper>
  )
}

export default Task