import { useEffect } from 'react'
import '../../App.css';
import Input from '../Input';
import IngredientesCadastradosBOX from './IngredientesCadastradosBOX';
import { useDispatch } from "react-redux";
import Constructor from "../Constructor"


function PainelIngredientes() {
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

  let produtoCadastrado = {}

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
        <button className="salvarProduto" onClick={() => {
           dispatch({ type: 'ADD_ITEM', payload: Constructor(produtoCadastrado.Ingrediente, produtoCadastrado.Preço) });
           lendoBCIngredientes()
          }}> Salvar </button>

      </div>

      <div id='boxes'>
        <div className='caixa'>
          <IngredientesCadastradosBOX ></IngredientesCadastradosBOX>
        </div>
      </div>
    </div>
  )
}

export default PainelIngredientes;

