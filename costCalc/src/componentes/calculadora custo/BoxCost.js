import React from "react";
import { useSelector } from 'react-redux'


function BoxCost() {

  const listaProdutosCadastrados = useSelector((state) => state)
  function caixaCustoProdutos(item, index) {

    return (
      <div key={index} className="boxItens">
        <h5 className="textBox">Produto: {(item.name)}</h5>
        <h5 className="textBox">Preço(Kg): R${(item.price)}</h5>
        <h5 className="textBox">Custo: R${(item.cost)}</h5>
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
