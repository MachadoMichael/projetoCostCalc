

export default function productsReducer(state = [], action) {

  
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.payload)
        case 'CALC_COST':
            return console.log(state)
        default:
            return state
    }



}