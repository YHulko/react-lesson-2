import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartTotal from 'components/Cart/CartTotal'
import CartPr from 'components/Cart/CartPr'
import { useAppSelector } from 'redux/hooks'

type Props = {
   
}

const CartHeader = (props: Props) => {

    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <CartPr productsInCart={productsInCart} />

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
