import React from "react";

function InputItens(props) {
   
    const handle = props.handle
    const listItens = props.itens.map((itens, index) =>
        <form key={index}>
            <label>{itens}</label>
            <input className="input" onChange={(e) => handle(e, itens)} type="text" placeholder={0}></input>
        </form>)

    return (
        <ul className="listInputs">
            {listItens}
    
        </ul >
    )
}

export default InputItens