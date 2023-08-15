import { Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
    toggleLike: (id: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}
const ProductList = ({addProductToCart, productsLikeState, toggleLike}: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    margin: '30px 0',
                    textTransform: 'uppercase',
                }}
                align="center"
            >
                Product List
            </Typography>

            <Grid container spacing={4}>
                {productsArray.filter((item) => item.category==="phone").map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                                isLiked={productsLikeState[id]}
                                toggleLike={toggleLike}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}

export default ProductList
