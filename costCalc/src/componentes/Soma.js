

function Soma(value) {

    const Values = value
    let valor_painel_custo = 0
    let valor_painel_venda = 0

    let valor_de_custo = 0
    let valor_margem = 0
    let valor_de_venda = 0

    valor_de_custo += Values.Carne
    valor_de_custo += Values.Mussarela
    valor_de_custo += Values.Cheddar
    valor_de_custo += Values.Gorgonzola
    valor_de_custo += Values.Catupiry
    valor_de_custo += Values.Tomate
    valor_de_custo += Values.Molho
    valor_de_custo += Values.Pão
    valor_de_custo += Values.Alface
    valor_de_custo += Values.Cebola
    valor_de_custo += Values.Bacon
    valor_de_custo += Values.Calabresa
    valor_de_custo += Values.Ovo

    valor_margem = (parseFloat(valor_de_custo) * Values.Margem) / 100
    valor_de_venda = parseFloat(valor_de_custo) + valor_margem
    console.log(valor_de_venda = parseFloat(valor_de_custo) + valor_margem)
    console.log(`Esse é o valor total dos produtos ${valor_de_custo} + o valor da margem ${valor_margem} (margem = ${Values.Margem}%) que da um valor final de ${valor_de_venda}`)
    valor_painel_custo = valor_de_custo
    valor_painel_venda = valor_de_venda
    valor_de_custo = 0
    valor_margem = 0
    valor_de_venda = 0

}

export default Soma