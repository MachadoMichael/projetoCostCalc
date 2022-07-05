import { useDispatch, useSelector } from 'react-redux'

function TotalPainel(props) {
    const dispatch = useDispatch()
    const custoTotal = useSelector((state) => state.cost)
    const valorVenda = useSelector((state) => state.sell)

    var isso = custoTotal + (custoTotal * valorVenda)

    function addMargem(event) {
        let SellPrice = event.target.value;
        dispatch({ type: 'ADD_MARGIN', payload: SellPrice })
    }

    return (
        <div id="painelSoma">
            <button onClick={() => { dispatch({ type: 'RESET_TOTAL' }) }} className="btn_total_painel">Resetar valores</button>
            <input onChange={(event) => addMargem(event)} id='input_total_painel' placeholder='Margem %'></input>

            <h2 className="valores">CUSTO DE PRODUÇÃO: R$ {custoTotal}</h2>
            <h2 className="valores">PREÇO DE VENDA: R$ {isso}</h2>
        </div>
    )
}

export default TotalPainel
