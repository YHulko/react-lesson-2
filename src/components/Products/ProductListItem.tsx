import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.scss'
import { Component, ReactNode } from 'react'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

class ProductListItem extends Component<Props> {
    render() {
        const { title, description, type, capacity, price, image } = this.props

        return (
            <Card variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="title" />
                    </div>
                    <h2 className="product-title">{title}</h2>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="product-price">
                        Price: <span>${price}</span>
                    </div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField value="1" size="small" />
                        <Button variant="outlined">+</Button>
                    </div>
                    <div className="btns-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

export default ProductListItem
