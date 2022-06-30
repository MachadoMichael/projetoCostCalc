
import '../../App.css';
import CadastroProduto from './CadastroProduto';
import IngredientesData from './IngredientesData';


function PainelIngredientes() {
 

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
    <div id='container'>

      <div id='ingredientes'>
        <h2>Cadastre o seu produto </h2>
        <CadastroProduto handle={handleChangeCost} produto={produtoCadastrado}></CadastroProduto>
      </div>

      <div id='boxes'>
        <div className='caixa'>
          <IngredientesData></IngredientesData>
        </div>
      </div>
    </div>
  )
}

export default PainelIngredientes;
