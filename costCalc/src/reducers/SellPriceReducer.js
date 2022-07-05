

export default function sellPrice(state = 0, action) {

    switch (action.type) {
        case 'ADD_MARGIN':
            return state = action.payload /100
        case 'RESET_TOTAL':
            return state = 0

        default:
            return state
    }
}

