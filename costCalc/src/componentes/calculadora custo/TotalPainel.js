import { useDispatch, useSelector } from 'react-redux'

function TotalPainel(props) {

    const listaProdutosCadastrados = useSelector((state) => state.ingredient)
    const dispatch = useDispatch()
    const custoTotal = useSelector((state) => state.cost)
    const margin = useSelector((state) => state.margin)
    let nameFood = ''


    var valorVenda = custoTotal + (custoTotal * margin)
    
    var valorVendaFixed = parseFloat(valorVenda).toFixed(2)
    const custoTotalFixed = parseFloat(custoTotal).toFixed(2)

    function addMargem(event) {
        let SellPrice = event.target.value;
        dispatch({ type: 'ADD_MARGIN', payload: SellPrice })
    }

    function createFood(event) {
        nameFood = event.target.value;
        return nameFood
    }

    return (
        <div id="painelSoma">
            <button onClick={() => { dispatch({ type: 'RESET_TOTAL', payload: listaProdutosCadastrados }) }} className="btn_total_painel">Resetar valores</button>
            <input onChange={(event) => addMargem(event)} id='input_total_painel' placeholder='Margem %'></input>

            <h2 className="valores">CUSTO DE PRODUÇÃO: R$ {custoTotalFixed}</h2>
            <h2 className="valores">PREÇO DE VENDA: R$ {valorVendaFixed}</h2>

            <input onChange={(event) => createFood(event)} id='input_total_painel' placeholder='Name'></input>
            <button onClick={() => { dispatch({ type: 'ADD_FOOD', payload: listaProdutosCadastrados, name: nameFood, cost: custoTotalFixed, valor: valorVendaFixed  }) }} className="btn_total_painel">Salvar produto</button>
        </div>
    )
}

export default TotalPainel
