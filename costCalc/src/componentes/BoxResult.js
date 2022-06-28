import React from "react";

function BoxItens(props) {

    let valor = props.valor
    const listItens = props.name.map(function criandoItem(name, index) {
        return (
            <div key={index} className="boxItens">
                <h5 className="textBox">{name}: R$ {valor[name]}</h5>
                
            </div>
        )
        
    })

    return (
        <div id="boxPainels">
            {listItens}
        </div>

    )   
}

export default BoxItens