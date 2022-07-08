
import '../../App.css';
import Input from '../Input';
import IngredientesCadastradosBOX from './IngredientesCadastradosBOX';
import { useDispatch } from "react-redux";
import Constructor from "../Constructor"


function PainelIngredientes() {
  const dispatch = useDispatch()
  let produtoCadastrado = {}
  var lastId = 0
  
  function handleChangeCost(event, key) {
    let t = event.target.value

    switch (key) {
      case 'Ingrediente': produtoCadastrado[key] = t
        break;
      case 'Preço': produtoCadastrado[key] = t
        break;
      default:
        break;
    }

  }

  return (
    <div className='container'>

      <div className='ingredientes'>
        <h2>Cadastre o seu produto </h2>
        <Input
          handle={handleChangeCost}
          inputs={[
            "Ingrediente",
            "Preço"
          ]}>
        </Input>
        <button className="salvarProduto" onClick={() => { dispatch({ type: 'ADD_ITEM', payload: Constructor(produtoCadastrado.Ingrediente, produtoCadastrado.Preço, lastId++) }) }}> Salvar </button>

      </div>

      <div id='boxes'>
        <div className='caixa'>
          <IngredientesCadastradosBOX></IngredientesCadastradosBOX>
        </div>
      </div>
    </div>
  )
}

export default PainelIngredientes;
