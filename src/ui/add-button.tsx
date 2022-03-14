import styled from 'styled-components'

export interface AddButtonProps {
  dark?: boolean
  text: string
  onClick: () => void
}

const AddButtonWrapper = styled.button<Pick<AddButtonProps, 'dark'>>`
  background-color: rgba(255, 255, 255, 0.24);
  border-radius: 4px;
  border: none;

  color: ${({ dark }) => dark ? '#000' : '#fff'};
  cursor: pointer;

  width: 100%;
  max-width: 300px;

  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${({ dark }) => {
      return dark ? 'white' : `rgba(255, 255, 255, 0.32);`
    }};
  }

`

const AddButton = ({ text, dark, onClick }: AddButtonProps): JSX.Element => {
  return (
    <AddButtonWrapper dark={dark} onClick={onClick}>
      {text}
    </AddButtonWrapper>
  )
}

export default AddButton