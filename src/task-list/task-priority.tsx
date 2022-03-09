import styled from 'styled-components'
import { Priority } from './interfaces'

interface TaskPriorityProps {
  priority: Priority
}

const TaskPriorityWrapper = styled.span<TaskPriorityProps>`
  padding: 0.25rem 0.5rem;
  width: fit-content;
  font-size: 0.5em;
  color: white;

  border-radius: 4px;
  line-height: 1.5em;

  background-color: ${props => {
    switch (props.priority) {
      case 'HIGH': {
        return 'red'
      }

      case 'LOW': {
        return 'green'
      }

      case 'MEDIUM': {
        return 'darkgray'
      }

      default: {
        return 'transparent'
      }
    }
  }};
`

const TaskPriority = ({ priority }: TaskPriorityProps): JSX.Element => {
  return (
    <TaskPriorityWrapper priority={priority}>
      {priority}
    </TaskPriorityWrapper>
  )
}

export default TaskPriority