import { createSlice } from "@reduxjs/toolkit"
import { omit } from "lodash"


type CartState = {
    [id: number]: number
}

const initialState: CartState = {
    1: 4,
    2: 4,
}

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
     addProductToCart: (state, action) => ({
      ...state,
     [action.payload.id]: (state[action.payload.id] || 0) + action.payload.count    
     }   ),
     
     removeProductFromCart: (state, action) => {
         return omit(state, action.payload)},

     changeProductQuantity: (state, action) => ({
         ...state,
         [action.payload.id]: action.payload.count
     })
     }
    
})

export const {addProductToCart, removeProductFromCart, changeProductQuantity} = cartReducer.actions

export default cartReducer.reducer
// const cartReducer = (state=initialState, action:AnyAction) =>  {
//     switch (action.type) {
//  case 'add-product-to-cart':
//     return {
//      ...state,
//      [action.id]: (state[action.id] || 0) + action.count,   
//     }       
// case 'remove-product-from-cart': {return omit(state, action.id)}

// case 'change-product-quantity': {return {
//     ...state,
//     [action.id]: action.count,
// }}

//     default: return state
//     }
// }