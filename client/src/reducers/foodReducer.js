
export default function foodReducer(state = [], action) {
    var obj = {}
    switch (action.type) {
        case 'ADD_FOOD': action.payload.map((item, index) => {
            obj['name'] = action.name
            obj['cost'] = action.cost
            obj['valor'] = action.valor
            if (item.cost !== 0) {
                obj[item.name] = item.cost / item.price

            }
            item.cost = 0
            return obj
        })
            state.push(obj)
            console.log('state')
            console.log(state)
            return state

        default:
            return state
    }
}

