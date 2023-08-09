import { Typography, Grid } from '@mui/material'
import CartTotal from 'components/Cart/CartTotal'
import CartPr from 'components/Cart/CartPr'
import CartProductListItemExtended from 'components/Cart/CartProductListItemEx'


type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
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
           {/* <CartPr productsInCart={productsInCart} />} */}
            </div>      
        </div>
    )
}

export default CartPage
