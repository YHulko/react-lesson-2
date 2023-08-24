import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CartPage from 'pages/cart/CartPage'
import AboutUs from 'pages/AboutUs/AboutUs'



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
                </Routes>
            </Container>
          <h5>КОНЕЦ</h5>
        </StyledEngineProvider>
    )
}
export default App


