
import Ingrediente from "../componentes/Constructor"

let lastId = 0

export function addItem(name, price) {
    return { type: 'ADD_ITEM', payload: Ingrediente(name, price, lastId++) }
}

export function deleteItem(id) {
    return { type: 'DELETE_ITEM', payload: id }
}

export function CalcCost() {
    return { type: 'CALC_COST' }
}

