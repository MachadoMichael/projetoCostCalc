import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function IngredientesData() {

  const listaProdutosCadastrados = useSelector((state) => state.ingredient)
  const dispatch = useDispatch()

  function caixaProdutosCadastrados(item, index) {

    return (
      <div key={index} className="boxItens">
        <h5 className="textBox">{(item.name)}: R$ {item.price}</h5>
        <button onClick={() => dispatch({type: 'DELETE_ITEM', payload: item.id })} className='btn_delete_item'>DELETE</button>
      </div>
    )
  }

  const listItens = listaProdutosCadastrados.map(caixaProdutosCadastrados)

  return (
    <div>
      {listItens}
    </div>


  )
}

