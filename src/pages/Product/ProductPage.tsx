import { useParams } from "react-router-dom"
import productsArray, { Product, getProductsObject } from "utils/productsArray"

type Props = {}
type productsObjectType = {
    [id: number]: Product
}
const ProductPage = (props: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)
    
    const {id} = useParams()

  return <div>{productsObject[parseInt(id!)].title}</div>
  
}
export default ProductPage