import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    changeProductQuantity?: (id: number, count: number) => void
}

type productsObjectType = {
    [id: number]: Product
}

const CartPr = ({ productsInCart, CartItem=CartProductListItem, removeProductFromCart, changeProductQuantity }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem 
                key={productId}
                product={productsObject[parseInt(productId)]}
                productCount={productsInCart[parseInt(productId)]}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
                />
               
            ))}
        </>
    )
}

export default CartPr
