
import BoxCost from './BoxCost';
import TotalPainel from './TotalPainel';
import Input from "../Input";
import { useDispatch, useSelector } from 'react-redux'

function PainelCusto() {
  const listaProdutosCadastrados = useSelector((state) => state.product)
  const arrayNameProducts = listaProdutosCadastrados.map(nameProducts)
  const arrayPriceProducts = listaProdutosCadastrados.map(priceProducts)
  const dispatch = useDispatch()
  let somandoCusto = 0;

  function nameProducts(item, index) {

    const nomesProdutos = []
    nomesProdutos.push(item.name)
    return nomesProdutos
  }

  function priceProducts(item, index) {

    const precoProdutos = []
    precoProdutos.push(item.price)
    return precoProdutos

  }

  function handleChange(event, input, index) {

    let t = event.target.value
    let novo_estado = {};


    switch (input) {
      case arrayNameProducts[index]:
        novo_estado[input] = (t * arrayPriceProducts[index][0]) / 1000
        listaProdutosCadastrados[index].cost = novo_estado[input]

        dispatch({ type: 'CALC_COST', payload: [...listaProdutosCadastrados] })


        console.log(listaProdutosCadastrados[index].cost)

        listaProdutosCadastrados.map(function soma(item, index) {
          somandoCusto += item.cost
          dispatch({ type: 'ADD_COST_TOTAL', payload: somandoCusto })

        })



        console.log('somandoCusto')
        console.log(somandoCusto)

        break
      default: novo_estado[input] = t
        break;
    }
  }

  return (
    <div id='container'>
      <div id='ingredientes'>
        <h2>Digite o material</h2>
        <Input
          handle={handleChange}
          inputs={arrayNameProducts}
        ></Input>

      </div>

      <div id='boxes'>

        <BoxCost />



        <TotalPainel />

      </div>
    </div>
  )


}

export default PainelCusto
