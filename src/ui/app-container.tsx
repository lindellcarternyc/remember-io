import { ReactNode } from 'react'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'

const AppContainerWrapper = styled.div`
  background-color: #3179ba;
  width: 100vw;
  height: 100vh;
`

interface AppContainerProps {
  children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps): JSX.Element => {
  return (
    <> 
      <Normalize />
      <AppContainerWrapper>
        {children}
      </AppContainerWrapper>
    </>
  )
}

export default AppContainer