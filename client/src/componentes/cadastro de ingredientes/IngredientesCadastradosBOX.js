import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function IngredientesData(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    lendoBCIngredientes()
  }, [])

  function lendoBCIngredientes() {
    fetch('http://localhost:3000/lendoIngredientes').then(res => {
      return res.json()
    }).then(data => {
      dispatch({ type: 'READ_INGREDIENTS', payload: data })
    })
  }

  const listaProdutosCadastrados = useSelector((state) => state.ingredient)

  function caixaProdutosCadastrados(item, index) {

    return (
      <div key={index} className="boxItens">
        <h5 className="textBox">{(item.name)}: R$ {item.price}</h5>
        <button onClick={() => {
          dispatch({ type: 'DELETE_ITEM', payload: item });
          lendoBCIngredientes()
        }} className='btn_delete_item'>DELETE</button>
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

