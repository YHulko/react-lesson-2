import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.scss'
import { Component, useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

type Props = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
    
}

 const ProductListItem = ({
     id,
     title,
     description,
     type,
     capacity,
     price,
     image,
     addProductToCart,
     
 }: Props) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>("green")
    //const [color, setColor] = useState<string>("red")

    const onIncrementClick = () => {
       setCount((prevState) => prevState+1) 
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState-1) 
     }

    const changeColor = () => {
      setColor((prevState) => prevState === "green" ? "red" : "green")   
     }
const isLiked = useAppSelector((state) => state.productsLikeState[id])
const dispatch = useAppDispatch()

     return (
           <Card variant="outlined">
                <CardContent>
                    <Button variant='outlined' 
                    onClick={() => {
                     {dispatch({type: "toggle-like", id})}}
                    }>
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product-image">
                        <img src={image} alt={title} />
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
                        color: {color}
                    </div>
                    <button onClick={changeColor}>Change color</button>
                    <Quantity count={count} onIncrementClick={onIncrementClick} onDecrementClick={onDecrementClick} minCount={1}/>
                    <div className="btns-wrap">
                        <Button variant="outlined" onClick={() => addProductToCart(id, count)}>Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

export default ProductListItem
