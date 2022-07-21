
import Constructor from "../componentes/Constructor"

let lastId = 0

export function addItem(name, price) {
    return { type: 'ADD_ITEM', payload: Constructor(name, price, lastId++) }
}

export function deleteItem(id) {
    return { type: 'DELETE_ITEM', payload: id }
}



