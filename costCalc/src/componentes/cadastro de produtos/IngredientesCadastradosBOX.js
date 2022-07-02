import React from 'react'
import { useSelector } from 'react-redux'


export default function IngredientesData() {

  const listaProdutosCadastrados = useSelector((state) => state)

  function caixaProdutosCadastrados(item, index) {

    return (
      <div key={index} className="boxItens">
        <h5 className="textBox">{(item.name)}: R$ {item.price}</h5>
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

