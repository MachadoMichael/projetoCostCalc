

export default function costReducer(state = 0, action) {


    switch (action.type) {
        case 'ADD_COST_TOTAL':
            return state = action.payload
        case 'CALC_COST_TOTAL':
            return state
        case 'RESET_TOTAL':
            return state = 0
        default:
            return state
    }
}

