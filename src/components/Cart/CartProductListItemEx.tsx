import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    function removeProductFromCart(id: number): void {
        throw new Error('Function not implemented.')
    }

    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-description">
                        {product.description}
                    </div>
                    <div className="product-description">
                        Price for one item: ${product.price}
                    </div>
                    <div className="product-features">
                    Count: {productCount}</div>
                    <Button variant="outlined" onClick={() => removeProductFromCart(product.id)}>
                        <DeleteIcon />
                        Remove
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
