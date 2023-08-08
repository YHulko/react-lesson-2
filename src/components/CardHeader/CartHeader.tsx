import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartTotal from 'components/Cart/CartTotal'
import CartPr from 'components/Cart/CartPr'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            <CartPr productsInCart={productsInCart} />

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
