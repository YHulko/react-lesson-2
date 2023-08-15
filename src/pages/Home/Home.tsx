import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
  addProductToCart:(id: number, count: number) => void
  toggleLike: (id: number) => void
  productsLikeState: {
    [id: number]: boolean
  }
  
}
const Home = ({addProductToCart,productsLikeState, toggleLike} : Props) => {
  return (
  <>
  <ProductList addProductToCart={addProductToCart} productsLikeState={productsLikeState} toggleLike={toggleLike}/>
  <Reviews />
  </>
  )
}
export default Home