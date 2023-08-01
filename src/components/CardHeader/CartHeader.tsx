type Props = {
  cardData: {
    totalCount: number
    totalPrice: number
}}
const CartHeader = ({cardData}: Props) => {
  return (
    <div>
        <div>{cardData.totalCount}</div>
        <div>$ {cardData.totalPrice}</div>
    </div>
  )
}
export default CartHeader