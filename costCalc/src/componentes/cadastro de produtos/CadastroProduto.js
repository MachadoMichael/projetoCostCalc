import React from 'react'
import Input from '../Input'

export default function CadastroProduto(props) {

  return (
    <div id="itens">
    <Input handle={props.handle} 
        produto={props.produto}
        inputs={[
            "Ingrediente",
            "Preço"
        ]}>
        </Input>
    </div>
  )
}
