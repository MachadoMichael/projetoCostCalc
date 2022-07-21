
export default function productsReducer(state = [], action) {



    switch (action.type) {
        case 'ADD_ITEM':
            const options = {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(action.payload)
            }

            console.log('Ingrediente adcionado')
            console.log(action.payload)

            fetch('http://localhost:3000/addIngrediente', options).then(res => {
                return res.json()
            }).then(data => console.log(data))

            return state

        case 'DELETE_ITEM':
            const options2 = {
                method: 'DELETE',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(action.payload)
            }

            console.log('ingrediente deletado')
            console.log(action.payload)

            fetch('http://localhost:3000/removendoIngrediente', options2).then(res => {
                return res.json()
            }).then(data => console.log(data))

            return state

        case 'CALC_COST':
            return action.payload

        case 'READ_INGREDIENTS':
            return state = action.payload

        default:
            return state
    }
}

