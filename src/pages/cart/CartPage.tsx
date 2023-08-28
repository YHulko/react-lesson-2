import { Typography, Grid } from '@mui/material'
import CartTotal from 'components/Cart/CartTotal'
import CartPr from 'components/Cart/CartPr'
import CartProductListItemExtended from 'components/Cart/CartProductListItemEx'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'


type Props = {
        
 }

const CartPage = (props: Props) => {

const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            CartPage
            <Typography
                variant="h4"
                component="h1"
                sx={{ margin: '30px 0' }}
            ></Typography>
             <div>
                <Grid container spacing={4}>
                   <CartPr productsInCart={productsInCart} CartItem={CartProductListItemExtended} />
                </Grid>
            <CartTotal productsInCart={productsInCart} />
             <Link to="/checkout">Proceed to checkout</Link>
            </div>      
        </div>
    )
}

export default CartPage
