import './App.css';
import PainelCusto from './componentes/calculadora custo/PainelCusto';
import Header from './componentes/Header';
import PainelCadastroIngrediente from './componentes/cadastro de produtos/PainelCadastroIngrediente';
import { useEffect, useState } from 'react'
import GuideUser from './componentes/Guide';
import productsReducer from './reducers/productsReducer';
import { createStore } from 'redux'
import { Provider } from 'react-redux/es/exports';



const store = createStore(productsReducer)
store.subscribe(() => { console.log(store.getState()) })

function App() {

  const [page, setPage] = useState()
  useEffect(() => {
    setPage(0)
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
        <Provider store={store}>
          <Header name="Nord"
            nav={[
              "Preço dos ingredientes",
              "Calculadora de custo",
              "Produtos cadastrados",
              "Calculadora de compras"
            ]}
            stage={changeStage}>
          </Header>

          <PainelCadastroIngrediente></PainelCadastroIngrediente>
        </Provider>
      </div>
    )
  }

  if (page === 1) {
    return (
      <div>
        <Provider store={store}>
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
        </Provider>
      </div>
    );
  }

}

export default App;
