import { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  border: none;
`

const CreateButton = styled.button`
  background-color  : green;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
`

const AddTaskListFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`

interface AddTaskListFormProps {
  onAdd: (title: string) => void
}

const AddTaskForm = ({ onAdd }: AddTaskListFormProps): JSX.Element => {
  const [text, setText] = useState('')

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    evt.stopPropagation()

    const value = text.trim()
    if (value) {
      onAdd(value)
    }
  }

  return (
    <AddTaskListFormWrapper onSubmit={handleSubmit}>
      <StyledInput onChange={onChange} value={text} />
      <CreateButton type="submit">Create</CreateButton>
    </AddTaskListFormWrapper>
  )
}

export default AddTaskForm