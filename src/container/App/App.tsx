import Header from "../Header/Header"
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type Props = {}

type CardDataProps = {
  totalCount: number
  totalPrice: number
}


const App = (props: Props) => {
  const [cardData, setCardData] = useState<CardDataProps>({
    totalCount: 0,
    totalPrice: 0,
  })

const addProductToCart = (count: number, price: number) => {
  setCardData((prevState) => ({
    totalCount: prevState.totalCount + count,
    totalPrice: prevState.totalPrice + price*count,
  }))
}

  return (
    <StyledEngineProvider injectFirst>
    <CssBaseline />
    <Header cardData={cardData} />
    <button onClick={() => addProductToCart(5, 500)}>add to cart</button>
    <Main addProductToCart={addProductToCart}/>
    </StyledEngineProvider>
    
  )
}
export default App