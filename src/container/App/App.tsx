import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CartPage from 'pages/cart/CartPage'
import AboutUs from 'pages/AboutUs/AboutUs'
import CheckoutPage from 'pages/Checkout/CheckoutPage'



type Props = {}



const App = (props: Props) => {
   
   
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route path="/About-Us" element={<AboutUs />} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/checkout" element={<CheckoutPage/>} />
                </Routes>
            </Container>
          <h5>КОНЕЦ</h5>
        </StyledEngineProvider>
    )
}
export default App


