import React from 'react'
import { useSelector } from 'react-redux'

export default function FoodBox() {


    const listaAlimentosSalvos = useSelector((state) => state.food)
    function caixaAlimentosSalvos(item, index) {

        const readObj = Object.keys(item).map((key, index) => {
            if (key === 'name') {
                return (
                    <h5 className="textBox"> {key}: {(item[key])}</h5>
                )
            }
            if (key !== 'name') {
                return (
                    <h5 className="textBox"> {(key)}: {parseFloat(item[key]).toFixed(2)}</h5>
                )
            }
        })
        return (
            <div key={index} className="FoodBox">

                {readObj}
            </div>
        )
    }

    const foodBox = listaAlimentosSalvos.map(caixaAlimentosSalvos)

    return (
        <div>
            {foodBox}
        </div>
    )


}
