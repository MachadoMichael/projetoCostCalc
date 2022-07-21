import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

function BoxCost() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/lendoIngredientes').then(res => {
      return res.json()
    }).then(data => {
      dispatch({ type: 'READ_INGREDIENTS', payload: data })
    })
  }, [])

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
