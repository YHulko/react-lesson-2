import { AnyAction } from "@reduxjs/toolkit"

type State = {
    [id: number]: boolean}

const initialState: State = {
    1: true,
    2: true,
}    


const likeReducer = (state=initialState, action:AnyAction) => {
   
    switch (action.type) {
case 'toggle-like':
    return {
        ...state,
        [action.id]: !state[action.id],
    }

default:
    return state
    } 
}

export default likeReducer