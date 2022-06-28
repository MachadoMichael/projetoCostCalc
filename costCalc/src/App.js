import './App.css';
import PainelCusto from './componentes/PainelCusto';
import Header from './componentes/Header';
import PainelIngredientes from './componentes/PainelIngredientes';
import { useEffect, useState } from 'react'
import GuideUser from './componentes/Guide';


function App() {

  const [page, setPage] = useState()
  useEffect(() => {
    setPage('guia')
  }, [])

  function changeStage(props) {
    console.log('changeStage')
    console.log(props)
    setPage(props)
  }

  if (page === 'guia') {
    return (
      <div>
        <Header name="Nord"
          nav={[
            "Preço dos ingredientes",
            "Calculadora de custo",
            "Produtos cadastrados",
            "Calculadora de compras"
          ]}
          stage={changeStage}>
        </Header>

        <GuideUser></GuideUser>
      </div>
    )
  }

  if (page === 0) {
    return (
      <div>
        <Header name="Nord"
          nav={[
            "Preço dos ingredientes",
            "Calculadora de custo",
            "Produtos cadastrados",
            "Calculadora de compras"
          ]}
          stage={changeStage}>
        </Header>

        <PainelIngredientes></PainelIngredientes>
      </div>
    )
  }

  if (page === 1) {
    return (
      <div>
        <Header name="Nord"
          nav={[
            "Preço dos ingredientes",
            "Calculadora de custo",
            "Produtos cadastrados",
            "Calculadora de compras"
          ]}
          stage={changeStage}>
        </Header>

        <PainelCusto></PainelCusto>
      </div>
    );
  }

}

export default App;
