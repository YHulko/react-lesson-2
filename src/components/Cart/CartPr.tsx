import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    CartItem?: any
}

type productsObjectType = {
    [id: number]: Product
}

const CartPr = ({ productsInCart, CartItem=CartProductListItem }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem 
                key={productId}
                product={productsObject[parseInt(productId)]}
                productCount={productsInCart[parseInt(productId)]}
                />
               
            ))}
        </>
    )
}

export default CartPr
