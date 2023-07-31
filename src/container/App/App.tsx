import Header from "../Header/Header"
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type Props = {}

type CardDataProps ={
  totalCount: number,
  totalPrice: number
}


const App = (props: Props) => {
  const [cardData, setCardData] = useState<CardDataProps>({
    totalCount: 10,
    totalPrice: 100,
  })
  return (
    <StyledEngineProvider injectFirst>
     <CssBaseline />
    <Header />
    <Main/>
    </StyledEngineProvider>
    
  )
}
export default App