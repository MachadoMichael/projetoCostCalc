import React from "react";
import { useSelector } from 'react-redux'

function BoxCost() {

  const listaProdutosCadastrados = useSelector((state) => state.ingredient)
  function caixaCustoProdutos(item, index) {

    return (
      <div key={index} className="boxItens">
        <h5 className="textBox"> {(item.name)}</h5>
        <h5 className="textBox">R${(item.cost)}</h5>
      </div>
    )
  }

  const costItens = listaProdutosCadastrados.map(caixaCustoProdutos)
 
  return (
    <div>
      {costItens}
    </div>
  )

}

export default BoxCost
