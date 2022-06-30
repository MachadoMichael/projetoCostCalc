import React from "react";

function BoxCost(props) {

    let valor = props.valor
    const listItens = props.name.map(function criandoItem(name, index) {
        return (
            <div key={index} className="boxItens">
                <h5 className="textBox">{name}: {valor[name]}</h5>
            </div>
        )
        
    })

    return (
        <div id="boxPainels">
            {listItens}
        </div>

    )   
}

export default BoxCost