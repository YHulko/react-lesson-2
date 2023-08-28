import { Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"

type Props = {}
type OrderData = {
  name: string
  address: string
}
const Checkout = (props: Props) => {
  
  const [orderData, setOrderData] = useState<OrderData>({
    name: '',
    address: '',
  })

const [isOrderSent, setIsOrderSent] = useState<boolean>(false)

const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
  setOrderData((prevState) => ( {
    ...prevState,
    name: e.target.value}))
}
const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
  setOrderData((prevState) => ( {
    ...prevState,
    address: e.target.value}))
}

const onSend = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault() 
 try {
 const { data } = await axios.post('https://my-json-server.typicode.com/kznkv-skillup/server/orders', 
 {
  name: orderData.name,
  address: orderData.address
 }) 
 setOrderData({
   name: data.name,
   address: data.address
 })
 setIsOrderSent(true)
} catch (e) {
  alert(e)
}
}

  const renderForm = () => {
   return (
    <form onSubmit={onSend}>
      <div> <input type="text" value={orderData.name} placeholder="Your name" onChange={handleName}/></div>
      <div> <input type="text" value={orderData.address} placeholder="Your adress" onChange={handleAddress}/></div>
      <button>Send</button>
    </form>
   ) 
  }
const renderMassage = () => {
 return (
   <div>
    <div>Dear, {orderData.name} thanks for your order!</div>
    <div>Adress: {orderData.address}</div>
   </div>
 ) 
}
  return (
    <>
    <Typography variant="h4" component={'h1'} sx={{ margin: '30px 0' }}>Checkout</Typography>

    {isOrderSent ? renderMassage() : renderForm()}
    </>
  )
}
export default Checkout