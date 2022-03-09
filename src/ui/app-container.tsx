import { ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  body {
    background: #3179ba;
    width: 100%;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

const AppContainerWrapper = styled.div`
  background-color: #3179ba;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`

interface AppContainerProps {
  children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps): JSX.Element => {
  return (
    <> 
      <Normalize />
      <GlobalStyles />
      <AppContainerWrapper>
        {children}
      </AppContainerWrapper>
    </>
  )
}

export default AppContainer