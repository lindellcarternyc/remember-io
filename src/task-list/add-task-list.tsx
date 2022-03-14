import { useState } from 'react'
import AddButton from '../ui/add-button'
import AddTaskForm from './add-task-list-form'

interface AddNewListProps {
  onAdd: (title: string) => void
}

const AddTaskList = ({ onAdd }: AddNewListProps): JSX.Element => {
  const [showsForm, setShowsForm] = useState(false)

  const handleAdd = (title: string) => {
    onAdd(title)
  }

  if (showsForm) {
    return (
      <AddTaskForm 
        onAdd={handleAdd}
      />
    )
  }
  
  return (
    <AddButton 
      text='+ Add List'
      onClick={() => setShowsForm(true)}
    />
  )
}

export default AddTaskList