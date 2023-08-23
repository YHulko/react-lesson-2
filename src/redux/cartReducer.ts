import { AnyAction } from "@reduxjs/toolkit"
import { omit } from "lodash"


type CartState = {
    [id: number]: number
}

const initialState: CartState = {
    1: 4,
    2: 4,
}
const cartReducer = (state=initialState, action:AnyAction) =>  {
    switch (action.type) {
 case 'add-product-to-cart':
    return {
     ...state,
     [action.id]: (state[action.id] || 0) + action.count,   
    }       
case 'remove-product-from-cart': {return omit(state, action.id)}

case 'change-product-quantity': {return {
    ...state,
    [action.id]: action.count,
}}

    default: return state
    }
}


export default cartReducer