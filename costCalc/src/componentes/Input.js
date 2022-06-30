import { useDispatch } from "react-redux";
import { addItem } from '../actions/listActions'
import React from "react";

function Input(props) {
    const dispatch = useDispatch()
    const produtoCadastrado = props.produto
    const handle = props.handle
    const listItens = props.inputs.map((inputs, index) =>
        <form key={index}>
            <label>{inputs}</label>
            <input className="input" onChange={(e) => handle(e, inputs)} type="text" placeholder={0}></input>
        </form>)

    return (
        <ul className="listInputs">
            {listItens}
            <button className="salvarProduto" onClick={() => { dispatch(addItem(produtoCadastrado.Ingrediente, produtoCadastrado.Preço)) }}> Salvar </button>
            
        </ul >
    )
}

export default Input

// preciso criar verificação para caso não tenha texto nos inputs