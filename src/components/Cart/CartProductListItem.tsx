import { Product } from 'utils/productsArray'
import productsArray, { getProductsObject } from 'utils/productsArray'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItem = ({product, productCount}: Props) => {
    return   (
    <div>
     {product.title}: {productCount}
    </div>
    )
}

export default CartProductListItem
