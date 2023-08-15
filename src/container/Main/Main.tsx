import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {
  addProductToCart: (id: number, count: number) => void
}
const Main = ({addProductToCart}: Props) => {
  return ( 
           <Container>
              <Home addProductToCart={addProductToCart} productsLikeState={{}} toggleLike={function (id: number): void {
        throw new Error('Function not implemented.')
      } }/>
           </Container>
  )
}
export default Main