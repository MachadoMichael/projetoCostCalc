
import React from "react";

function Input(props) {
  
    const handle = props.handle
    const listItens = props.inputs.map((input, index) =>
        <div key={index}>
            <label>{input}</label>
            <input className="input" onChange={(event) => handle(event, input, index)} type="text" placeholder={0}></input>
        </div>)

    return (
        <ul className="listInputs">
            {listItens}
        </ul >
    )
}

export default Input

// preciso criar verificação para caso não tenha texto nos inputs