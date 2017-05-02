// ------------------------------------ //
// Constants 
// ------------------------------------ 
export const GET_CHECKOUT = 'GET_CHECKOUT'  
// ------------------------------------ //
// Actions
 // ------------------------------------ 

  export const actions = { }  

// ------------------------------------ //
// Action Handlers 
// ------------------------------------ //
const ACTION_HANDLERS = {  [GET_CHECKOUT] : (state, action) => state + action.payload  }  

// ------------------------------------ //
// Reducer
 // ------------------------------------ //
const initialState = 0
export default function checkoutReducer (state = initialState, action) { 
    const handler = ACTION_HANDLERS[action.type]  
    return handler ? handler(state, action) : state 
} 
