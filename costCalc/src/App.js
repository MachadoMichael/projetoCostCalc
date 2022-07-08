import './App.css';
import PainelCusto from './componentes/calculadora custo/PainelCusto';
import Header from './componentes/Header';
import PainelCadastroIngrediente from './componentes/cadastro de produtos/PainelCadastroIngrediente';
import GuideUser from './componentes/guia/Guide';
import PainelFood from './componentes/cadastro alimento/PainelFood';

import ingredientReducer from './reducers/ingredientReducer';
import costReducer from './reducers/costReducer';
import marginReducer from './reducers/marginReducer';
import foodReducer from './reducers/foodReducer';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const allReducers = combineReducers({
  cost: costReducer,
  ingredient: ingredientReducer,
  margin: marginReducer,
  food: foodReducer,
})
const store = createStore(allReducers)
store.subscribe(() => { console.log(store.getState()) })

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header name="Nord"
          nav={[
            "Guia",
            "Cadastro",
            "Custo",
            "Produtos",
            "Compras"
          ]}>
        </Header>
        <Routes>
          <Route path='/'></Route>
          <Route path='/Guia' element={<GuideUser />}></Route>
          <Route path='/Cadastro' element={<PainelCadastroIngrediente />}></Route>
          <Route path='/Custo' element={<PainelCusto />}></Route>
          <Route path='/Produtos' element={<PainelFood />}></Route>
          <Route path='/Compras' element={0}></Route>
        </Routes>
      </Router>
    </Provider>
  )

}

export default App;
