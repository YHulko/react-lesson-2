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

type productsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<productsInCartType>({
        1: 3,
        2: 3,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductsInCart = { ...prevState }
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="/About-Us" element={<AboutUs />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Container>
            <button onClick={() => addProductToCart(2, 5)}>add to cart</button>
        </StyledEngineProvider>
    )
}
export default App
