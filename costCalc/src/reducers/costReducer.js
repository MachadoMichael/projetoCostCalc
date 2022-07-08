

export default function costReducer(state = 0, action) {


    switch (action.type) {
        case 'ADD_COST_TOTAL':
            console.log('somandoCusto')
            console.log(action.payload)
            return state = action.payload
        case 'CALC_COST_TOTAL':
            return state
        case 'RESET_TOTAL':
            action.payload.map((item, index) => {
                item.cost = ''
                console.log('item.cost')
                console.log(item.cost)
                return item.cost
            })
            return state = 0
        default:
            return state
    }
}

