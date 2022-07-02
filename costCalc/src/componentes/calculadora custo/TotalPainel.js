
function TotalPainel(props) {

    return (
        <div id="painelSoma">
            <button id="btn_salvar_produto">Resetar valores</button>
            <button id="btn_salvar_produto">Calcular</button>

            <h2 className="valores">CUSTO DE PRODUÇÃO: R$ {}</h2>
            <h2 className="valores">PREÇO DE VENDA: R$ { }</h2>
        </div>
    )
}



export default TotalPainel
