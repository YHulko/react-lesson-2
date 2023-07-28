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

type State = {
    count: number
    color: string
}

class ProductListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 1,
            color: 'green',
        }
        this.onIncrementClick = this.onIncrementClick.bind(this)
    }

    onIncrementClick() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick() {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }
    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }

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

                    <div>
                        Color: <span></span>
                        {this.state.color}
                    </div>
                    <button>Change color</button>

                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick()}
                            disabled={this.state.count <= 1}
                        >
                            -
                        </Button>
                        <TextField value={this.state.count} size="small" />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
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
