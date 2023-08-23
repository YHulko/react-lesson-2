import { Typography, Grid } from '@mui/material'
import CartTotal from 'components/Cart/CartTotal'
import CartPr from 'components/Cart/CartPr'
import CartProductListItemExtended from 'components/Cart/CartProductListItemEx'
import { useAppSelector } from 'redux/hooks'


type Props = {
    
    removeProductFromCart : 
        (id: number)=> void
   
    changeProductQuantity : (id: number, count: number)=> void
 }

const CartPage = ({ removeProductFromCart, changeProductQuantity }: Props) => {

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
                   <CartPr productsInCart={productsInCart} CartItem={CartProductListItemExtended} 
                   removeProductFromCart={removeProductFromCart} changeProductQuantity={changeProductQuantity}/>
                </Grid>
           {/* <CartPr productsInCart={productsInCart} />} */}
            </div>      
        </div>
    )
}

export default CartPage
