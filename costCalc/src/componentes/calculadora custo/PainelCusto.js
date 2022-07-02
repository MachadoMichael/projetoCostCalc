
import BoxCost from './BoxCost';
import TotalPainel from './TotalPainel';
import Input from "../Input";
import { useSelector } from 'react-redux'

function PainelCusto() {
  const listaProdutosCadastrados = useSelector((state) => state)
  const arrayNameProducts = listaProdutosCadastrados.map(nameProducts)
  const arrayPriceProducts = listaProdutosCadastrados.map(priceProducts)


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
        <div className='caixa'>
          <BoxCost></BoxCost>
        </div>

        <div className='caixa' id='PainelTotal'>
          <TotalPainel></TotalPainel>
        </div>
      </div>
    </div>
  )


}

export default PainelCusto
