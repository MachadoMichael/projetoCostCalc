import { useSelector } from 'react-redux'

function Soma() {

    const listaProdutosCadastrados = useSelector((state) => state)
    function caixaCustoProdutos(item, index) {

        let cost = 0
        cost += item.cost

        return cost
    }

    listaProdutosCadastrados.map(caixaCustoProdutos)

}

export default Soma

