import { useAppState } from '../state/app-state.context'
import { TaskList } from '../task-list'
import AddTaskList from '../task-list/add-task-list'
import { HorizontalScroll } from '../ui'
import { mapObject } from '../utils/collection.utils'

const TaskListPage = (): JSX.Element => {
  const { taskLists, addList } = useAppState()

  return (
    <HorizontalScroll>
      {mapObject(taskLists, list => (
        <TaskList key={list.id} list={list} />
      ))}
      <AddTaskList 
        onAdd={addList}
      />
    </HorizontalScroll>
  )
}

export default TaskListPage