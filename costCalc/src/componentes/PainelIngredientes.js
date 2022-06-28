// import ProductBox from './ProductBox';
import '../App.css';
import React, { useState } from 'react';
import BoxResult from './BoxResult';
import ItemList from './ItemList';

function PainelIngredientes() {

  const [Cost, setCost] = useState({
    Carne: 0,
    Mussarela: 0,
    Cheddar: 0,
    Gorgonzola: 0,
    Catupiry: 0,
    Tomate: 0,
    Molho: 0,
    Pão: 0,
    Alface: 0,
    Cebola: 0,
    Bacon: 0,
    Calabresa: 0,
    Ovo: 0,
    Margem: 0
  });

  function handleChangeCost(event, key) {

    let t = event.target.value
    let novo_estado_cost = {};

    switch (key) {
      case 'Carne': novo_estado_cost[key] = t
        break;
      case 'Mussarela': novo_estado_cost[key] = t
        break;
      case 'Cheddar': novo_estado_cost[key] = t
        break;
      case 'Gorgonzola': novo_estado_cost[key] = t
        break;
      case 'Catupiry': novo_estado_cost[key] = t
        break;
      case 'Tomate': novo_estado_cost[key] = t
        break;
      case 'Molho': novo_estado_cost[key] = t
        break;
      case 'Pão': novo_estado_cost[key] = t
        break;
      case 'Alface': novo_estado_cost[key] = t
        break;
      case 'Cebola': novo_estado_cost[key] = t
        break;
      case 'Bacon': novo_estado_cost[key] = t
        break;
      case 'Calabresa': novo_estado_cost[key] = t
        break;
      case 'Ovo': novo_estado_cost[key] = t
        break;

      default: novo_estado_cost[key] = t
        break;
    }

    setCost((estado_atual_cost) => Object.assign({ ...estado_atual_cost }, novo_estado_cost))


  }



  return (
    <div id='container'>

      <div id='ingredientes'>
        <h2>Digite o preço dos ingredientes (Área em contrução)</h2>
        <ItemList handle={handleChangeCost}></ItemList>
      </div>

      <div id='boxes'>
        <div className='caixa'>
          <BoxResult
            valor={Cost}
            name={[
              "Carne",
              "Mussarela",
              "Cheddar",
              "Gorgonzola",
              "Catupiry",
              "Tomate",
              "Molho",
              "Pão",
              "Alface",
              "Cebola",
              "Bacon",
              "Calabresa",
              "Ovo",
              "Margem"
            ]}>
          </BoxResult>
        </div>
      </div>
    </div>
  )
}

export default PainelIngredientes;
