import { Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'

type Props = {
    
}
const ProductList = (props: Props) => {
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
                {productsArray.map(
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
                                
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}

export default ProductList
